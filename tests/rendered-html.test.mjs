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
    /<title>Carecogni — Van incidentmelding naar verbetering<\/title>/i,
  );
  assert.match(html, /Meer leren van ieder incident/);
  assert.match(html, /Van incidentmelding naar verbetering/);
  assert.match(html, /Registreren is pas het begin/);
  assert.match(html, /Minder tijd aan verwerking/);
  assert.match(html, /Een slimme laag boven op het bestaande meldproces/);
  assert.match(html, /Van melding naar bruikbare verbeterinformatie/);
  assert.match(html, /Circa 20.000 meldingen per jaar zorgvuldig verwerken/);
  assert.match(html, /carecogni-logo-dark\.svg/);
  assert.match(html, /v3-hero-caregiver-devices\.png/);
  assert.match(html, /Bekijk hoe het werkt/);
  assert.match(html, /Arkin/);
  assert.match(html, /Fivoor/);
  assert.match(html, /GGZ Noord-Holland-Noord/);
  assert.match(html, /Saffier/);
  assert.doesNotMatch(html, /Cases uit de praktijk|Meer usecases/);
  assert.doesNotMatch(html, /IoT & Domotica|30\+|4–8 weken|6–10 weken|2–4 weken/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("server-renders the designer-led content pages", async () => {
  const paths = [
    ["/cases", /Slimme AI oplossingen in de praktijk/],
    ["/over-ons", /Intelligente samenwerking tussen mens en technologie/],
    ["/methode", /Hoe gaan wij te werk/],
    ["/contact", /Benieuwd wat wij voor jou kunnen betekenen/],
    ["/oplossingen/ai-care-assistant", /AI Care Assistant/],
  ];

  for (const [pathname, expected] of paths) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, expected, pathname);

    if (pathname === "/over-ons") {
      assert.match(html, /Joris Smeets/);
      assert.match(html, /Tijs Teulings/);
      assert.match(html, /Tim Schouten/);
      assert.match(html, /Gabriel Uwaila/);
      assert.match(html, /Platform Engineer/);
      assert.match(html, /Project Manager/);
      assert.match(html, /Software Engineer/);
      assert.match(html, /tijs-teulings\.png/);
      assert.match(html, /tim-schouten\.png/);
      assert.match(html, /gabriel-uwaila\.png/);
    }
  }
});
