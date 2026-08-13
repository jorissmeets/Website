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
    /<title>Carecogni — AI voor Care &amp; Cure in productie<\/title>/i,
  );
  assert.match(
    html,
    /Wij bestaan om de grenzen te verleggen van wat mogelijk wordt geacht met AI in de zorg/,
  );
  assert.doesNotMatch(html, /Van incidentmelding naar verbetering/);
  assert.doesNotMatch(html, /Korte positioneringsregel/);
  assert.match(html, /Pragmatisch versneld AI voor Care &amp; Cure in productie/);
  assert.doesNotMatch(html, /Introductie in 2–3 zinnen/);
  assert.match(html, /Waardevolle informatie blijft te vaak onbenut/);
  assert.match(html, /Een AI-assistent die het voorwerk uit handen neemt/);
  assert.match(html, /Gebouwd rond de systemen en processen die er al zijn/);
  assert.doesNotMatch(html, /tekst nog te schrijven|Hier komt|Lorem ipsum/);
  assert.doesNotMatch(html, /Sectietitel voor de werkwijze/);
  assert.doesNotMatch(html, /Screenen|Classificeren|Leren en verbeteren/);
  assert.match(html, /AI-chatbot ontlast zorgmedewerkers/);
  assert.match(html, /AI-screeningsassistent voor medicatie-incidenten/);
  assert.match(html, /Rapportagevalidatie van zorginhoudelijk contact/);
  assert.match(html, /circa 20.000 meldingen per jaar/);
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
      html.indexOf("Waardevolle informatie blijft te vaak onbenut"),
    "customer section should appear directly after the hero",
  );
  assert.doesNotMatch(html, /Over Carecogni/);
  assert.doesNotMatch(html, /Titel over Carecogni — tekst nog te schrijven/);
  assert.doesNotMatch(html, /Intelligente samenwerking tussen mens en technologie/);
  assert.match(html, /Joris Smeets/);
  assert.match(html, /Tijs Teulings/);
  assert.match(html, /AI Lead/);
  assert.match(html, /Joran Timmerman/);
  assert.match(html, /Platform Lead/);
  assert.doesNotMatch(html, /Platform Engineer/);
  assert.match(html, /Pascal Venema/);
  assert.match(html, /Tim Schouten/);
  assert.match(html, /tim-schouten-2026\.png/);
  assert.match(html, /Een multidisciplinair team dat kennis van zorg, AI en software samenbrengt/);
  assert.doesNotMatch(html, /Gabriel Uwaila/);
  assert.doesNotMatch(html, /Hoe gaan wij te werk/);
  assert.doesNotMatch(html, /We build it, you use it, you own it/);
  assert.match(html, /Neem contact op/);
  assert.match(html, /Wil je verkennen wat AI voor jouw organisatie kan betekenen/);
  assert.match(html, /href="\/#werkwijze"/);
  assert.match(html, /href="\/#cases"/);
  assert.match(html, /href="\/#over-ons"/);
  assert.doesNotMatch(html, /href="\/#aanpak"/);
  assert.match(html, /href="\/#contact"/);
  assert.match(html, /mailto:hello@carecogni\.com/);
  assert.doesNotMatch(html, /Cases uit de praktijk|Meer usecases/);
  assert.doesNotMatch(html, /IoT & Domotica|30\+|4–8 weken|6–10 weken|2–4 weken/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("legacy content routes return to the one-page homepage", async () => {
  const paths = [
    ["/cases", "#cases"],
    ["/cases/ivm-incidentmeldingen", "#cases"],
    ["/over-ons", "#over-ons"],
    ["/methode", ""],
    ["/contact", "#contact"],
    ["/oplossingen/ai-care-assistant", "#werkwijze"],
  ];

  for (const [pathname, anchor] of paths) {
    const response = await render(pathname);
    assert.ok([307, 308].includes(response.status), pathname);
    assert.equal(new URL(response.headers.get("location")).hash, anchor, pathname);
  }
});
