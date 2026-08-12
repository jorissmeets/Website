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
  assert.match(html, /Van incidentmelding naar verbetering/);
  assert.match(html, /Korte positioneringsregel — tekst nog te schrijven/);
  assert.match(html, /Sectietitel over de uitdaging in de zorgpraktijk/);
  assert.match(html, /Titel voor de AI-assistent — tekst nog te schrijven/);
  assert.match(html, /Sectietitel voor de werkwijze — tekst nog te schrijven/);
  assert.match(html, /Circa 20.000 meldingen per jaar zorgvuldig verwerken/);
  assert.match(html, /carecogni-logo-dark\.svg/);
  assert.match(html, /v3-hero-caregiver-devices\.png/);
  assert.match(html, /Bekijk hoe het werkt/);
  assert.match(html, /Arkin/);
  assert.match(html, /Fivoor/);
  assert.match(html, /GGZ Noord-Holland-Noord/);
  assert.match(html, /Saffier/);
  assert.match(
    html,
    /We werken samen met organisaties in de ggz, ouderenzorg en medicatieveiligheid/,
  );
  assert.doesNotMatch(html, /Korte introductie bij onze klanten/);
  assert.ok(
    html.indexOf("Onze klanten") <
      html.indexOf("Sectietitel over de uitdaging in de zorgpraktijk"),
    "customer section should appear directly after the hero",
  );
  assert.doesNotMatch(html, /Over Carecogni/);
  assert.doesNotMatch(html, /Titel over Carecogni — tekst nog te schrijven/);
  assert.doesNotMatch(html, /Intelligente samenwerking tussen mens en technologie/);
  assert.match(html, /Joris Smeets/);
  assert.match(html, /Tijs Teulings/);
  assert.match(html, /AI Lead/);
  assert.match(html, /Joran Timmerman/);
  assert.match(html, /Pascal Venema/);
  assert.match(html, /Tim Schouten/);
  assert.match(html, /tim-schouten-2026\.png/);
  assert.doesNotMatch(html, /Gabriel Uwaila/);
  assert.doesNotMatch(html, /Hoe gaan wij te werk/);
  assert.doesNotMatch(html, /We build it, you use it, you own it/);
  assert.doesNotMatch(html, /Neem contact met ons op/);
  assert.match(html, /href="\/#over-ons"/);
  assert.doesNotMatch(html, /href="\/#aanpak"/);
  assert.doesNotMatch(html, /href="\/#contact"/);
  assert.match(html, /mailto:hello@carecogni\.com/);
  assert.doesNotMatch(html, /Cases uit de praktijk|Meer usecases/);
  assert.doesNotMatch(html, /IoT & Domotica|30\+|4–8 weken|6–10 weken|2–4 weken/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("legacy content routes return to the one-page homepage", async () => {
  const paths = [
    ["/cases", "#ivm-case"],
    ["/cases/ivm-incidentmeldingen", "#ivm-case"],
    ["/over-ons", "#over-ons"],
    ["/methode", ""],
    ["/contact", ""],
    ["/oplossingen/ai-care-assistant", "#oplossing"],
  ];

  for (const [pathname, anchor] of paths) {
    const response = await render(pathname);
    assert.ok([307, 308].includes(response.status), pathname);
    assert.equal(new URL(response.headers.get("location")).hash, anchor, pathname);
  }
});
