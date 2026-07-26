import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${pathname}-${process.pid}-${Date.now()}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
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
}

test("server-renders the Carecogni homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Carecogni — Eerder zicht op risico(?:&#x27;|')s in complexe zorg<\/title>/i,
  );
  assert.match(html, /Meer zorg, minder last/);
  assert.match(html, /Krijg eerder zicht op risico/);
  assert.match(html, /zonder extra registratiedruk/);
  assert.match(html, /carecogni-mark-light\.svg/);
  assert.match(html, /v3-hero-caregiver-devices\.png/);
  assert.match(html, /Onze oplossingen/);
  assert.match(html, /Cases/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("server-renders the designer-led content pages", async () => {
  const paths = [
    ["/cases", /Slimme AI oplossingen in de praktijk/],
    ["/over-ons", /Over Carecogni/],
    ["/methode", /Hoe gaan wij te werk/],
    ["/contact", /Benieuwd wat wij voor jou kunnen betekenen/],
    ["/oplossingen/ai-care-assistant", /AI Care Assistant/],
  ];

  for (const [pathname, expected] of paths) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), expected, pathname);
  }
});
