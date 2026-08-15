import {
  copyFile,
  mkdir,
  readdir,
  readFile,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const output = path.join(root, "github-pages");
const clientOutput = path.join(root, "dist", "client");
const publicDirectory = path.join(root, "public");

async function copyTree(source, destination) {
  const sourceStat = await stat(source);

  if (sourceStat.isDirectory()) {
    await mkdir(destination, { recursive: true });
    for (const entry of await readdir(source)) {
      await copyTree(path.join(source, entry), path.join(destination, entry));
    }
    return;
  }

  await mkdir(path.dirname(destination), { recursive: true });
  await copyFile(source, destination);
}

function makeStatic(html) {
  return html.replace(
    /\/_vinext\/image\?url=([^&\"]+)(?:(?:&amp;|&)w=\d+)?(?:(?:&amp;|&)q=\d+)?/g,
    (_match, encodedUrl) => decodeURIComponent(encodedUrl),
  );
}

async function render(worker, pathname) {
  const response = await worker.fetch(
    new Request(`https://carecogni.com${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`Kon ${pathname} niet exporteren: HTTP ${response.status}`);
  }

  return makeStatic(await response.text());
}

function redirectPage(target) {
  return `<!doctype html>
<html lang="nl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=${target}">
    <link rel="canonical" href="https://carecogni.com${target}">
    <title>Carecogni</title>
  </head>
  <body>
    <p><a href="${target}">Ga naar Carecogni</a></p>
  </body>
</html>`;
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await copyTree(publicDirectory, output);
await copyTree(clientOutput, output);

const workerUrl = pathToFileURL(path.join(root, "dist", "server", "index.js"));
workerUrl.searchParams.set("static-export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const pages = [
  ["/", "index.html"],
  ["/privacy", "privacy/index.html"],
];

for (const [pathname, filename] of pages) {
  const html = await render(worker, pathname);
  if (html.includes("/_vinext/image")) {
    throw new Error(`${pathname} bevat nog een dynamische afbeeldings-URL`);
  }
  const destination = path.join(output, filename);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

const redirects = [
  ["cases/index.html", "/#cases"],
  ["contact/index.html", "/#contact"],
  ["over-ons/index.html", "/#over-ons"],
  ["methode/index.html", "/"],
  ["oplossingen/ai-care-assistant/index.html", "/#werkwijze"],
];

for (const [filename, target] of redirects) {
  const destination = path.join(output, filename);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, redirectPage(target));
}

const notFound = `<!doctype html>
<html lang="nl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Carecogni</title>
  </head>
  <body>
    <script>
      const route = location.pathname;
      const target = route.startsWith('/cases')
        ? '/#cases'
        : route.startsWith('/over-ons')
          ? '/#over-ons'
          : route.startsWith('/contact')
            ? '/#contact'
            : route.startsWith('/oplossingen')
              ? '/#werkwijze'
              : '/';
      location.replace(target);
    </script>
    <noscript><a href="/">Ga naar Carecogni</a></noscript>
  </body>
</html>`;

await writeFile(path.join(output, "404.html"), notFound);
await writeFile(path.join(output, ".nojekyll"), "");
await writeFile(path.join(output, "CNAME"), "carecogni.com\n");

const homepage = await readFile(path.join(output, "index.html"), "utf8");
for (const requiredText of [
  "Wij verleggen de grenzen van wat mogelijk is met AI in de zorg",
  "Cases",
  "Ons team",
  "Algemene voorwaarden",
]) {
  if (!homepage.includes(requiredText)) {
    throw new Error(`Statische homepage mist: ${requiredText}`);
  }
}

console.log(`GitHub Pages-export gereed: ${output}`);
