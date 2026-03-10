import {
  LessonSection, SectionHeading, Paragraph, InfoBox, TestBox, DrillBox,
  PhraseGrid, VocabGrid, NumberGrid, SoundGrid, DataTable,
  Speakable, MonoBlock, ContrastBox,
} from "../ui";
import {
  NUMBERS_0_10, NUMBERS_11_19, NUMBERS_TENS, SEASONS, WEATHER_PHRASES,
} from "../../data/numbers";
import { DAYS, MONTHS, TIME_EXPRESSIONS, CONJUNCTIONS } from "../../data/vocabulary";

// ─── Lesson 9 — Numbers ───────────────────────────────────────

export function Lesson9() {
  return (
    <LessonSection id="L9" num="9" tag="Lesson 9 — Numbers, Time & Calendar" title="Counting, Telling Time & Dates">
      <SectionHeading>Numbers 0–10</SectionHeading>
      <NumberGrid items={NUMBERS_0_10} />

      <SectionHeading>Numbers 11–19 — The "spre zece" Pattern</SectionHeading>
      <InfoBox variant="orange" title="How It Works">
        <p>11–19 literally mean "X toward ten" → number + <b>spre</b> + <b>zece</b>. Some forms contract. This is the trickiest part of Romanian numbers — memorize them!</p>
      </InfoBox>
      <NumberGrid items={NUMBERS_11_19} />

      <SectionHeading>Tens (20–100)</SectionHeading>
      <NumberGrid items={NUMBERS_TENS} />

      <InfoBox variant="blue" title="Combining Numbers">
        <MonoBlock>
          21 = <Speakable text="douăzeci și unu">douăzeci și unu</Speakable> · 35 = <Speakable text="treizeci și cinci">treizeci și cinci</Speakable><br />
          47 = <Speakable text="patruzeci și șapte">patruzeci și șapte</Speakable> · 99 = <Speakable text="nouăzeci și nouă">nouăzeci și nouă</Speakable><br />
          200 = <Speakable text="două sute">două sute</Speakable> · 500 = <Speakable text="cinci sute">cinci sute</Speakable> · 2000 = <Speakable text="două mii">două mii</Speakable>
        </MonoBlock>
      </InfoBox>

      <InfoBox variant="orange" title='The "DE" Rule — Numbers 20+'>
        <p>After numbers <b>20 and above</b>, add <b>de</b> before the noun:</p>
        <MonoBlock>
          <Speakable text="doi lei">doi lei</Speakable> — 2 lei ✅ (no "de")<br />
          <Speakable text="douăzeci de lei">douăzeci <b>de</b> lei</Speakable> — 20 lei ✅ (with "de"!)<br />
          <Speakable text="o sută de oameni">o sută <b>de</b> oameni</Speakable> — 100 people ✅
        </MonoBlock>
        <p className="mt-1.5">1–19 = no "de." 20+ = always "de."</p>
      </InfoBox>

      <SectionHeading>Ordinal Numbers</SectionHeading>
      <DataTable
        headers={["Number", "Masculine", "Feminine", "Example"]}
        rows={[
          ["1st", "primul", "prima", "primul etaj — first floor"],
          ["2nd", "al doilea", "a doua", "a doua zi — the second day"],
          ["3rd", "al treilea", "a treia", "al treilea rând — third row"],
          ["4th", "al patrulea", "a patra", ""],
          ["5th", "al cincilea", "a cincea", ""],
          ["last", "ultimul", "ultima", "ultima dată — last time"],
        ]}
        highlightCols={[1, 2]}
        speakableCols={[1, 2]}
      />

      <SectionHeading>Telling Time</SectionHeading>
      <InfoBox variant="teal" title="E ora… (It's … o'clock)">
        <MonoBlock>
          <Speakable text="Cât e ceasul?"><b>Cât e ceasul?</b></Speakable> — What time is it?<br />
          <Speakable text="E ora trei.">E ora trei.</Speakable> — It's 3 o'clock.<br />
          <Speakable text="E ora trei și jumătate.">E ora trei și <b>jumătate</b>.</Speakable> — It's 3:30 (half).<br />
          <Speakable text="E ora trei și un sfert.">E ora trei și un <b>sfert</b>.</Speakable> — It's 3:15 (quarter).<br />
          <Speakable text="E ora patru fără un sfert.">E ora patru <b>fără</b> un sfert.</Speakable> — It's 3:45 (4 minus quarter).<br />
          <Speakable text="La ce oră?"><b>La ce oră?</b></Speakable> — At what time?<br />
          <Speakable text="La ora opt.">La ora opt.</Speakable> — At 8 o'clock.
        </MonoBlock>
      </InfoBox>

      <SectionHeading>Days of the Week</SectionHeading>
      <VocabGrid items={DAYS} />

      <SectionHeading>Months of the Year</SectionHeading>
      <VocabGrid items={MONTHS} />

      <SectionHeading>Seasons</SectionHeading>
      <SoundGrid items={SEASONS.map(s => ({ symbol: s.icon, pronunciation: s.ro, description: s.en, example: "", exampleWord: s.ro }))} />
      <InfoBox variant="gold" title="Using Seasons & Months">
        <MonoBlock>
          <Speakable text="în primăvară">în primăvară</Speakable> — in spring · <Speakable text="vara trecută">vara trecută</Speakable> — last summer<br />
          <Speakable text="în ianuarie">în ianuarie</Speakable> — in January · <Speakable text="pe 15 martie">pe 15 martie</Speakable> — on March 15th
        </MonoBlock>
      </InfoBox>

      <SectionHeading>Time Expressions</SectionHeading>
      <VocabGrid items={TIME_EXPRESSIONS} />

      <SectionHeading>Weather</SectionHeading>
      <PhraseGrid items={WEATHER_PHRASES} />

      <TestBox title="Self-Test — Numbers & Time" items={[
        { question: 'Say "17" in Romanian', answer: "șaptesprezece" },
        { question: '"It\'s 3:30" in Romanian', answer: "E ora trei și jumătate." },
        { question: '"25 lei" (remember the "de" rule!)', answer: "douăzeci și cinci de lei" },
        { question: '"In January" in Romanian', answer: "în ianuarie" },
      ]} />
    </LessonSection>
  );
}

// ─── Lesson 10 — Prepositions ──────────────────────────────────

export function Lesson10() {
  return (
    <LessonSection id="L10" num="10" tag="Lesson 10 — Prepositions & Connectors" title="Linking Words, Places & Directions">
      <SectionHeading>Essential Prepositions</SectionHeading>
      <DataTable
        headers={["Romanian", "English", "Example"]}
        rows={[
          ["în", "in / into", "Locuiesc în București."],
          ["la", "to / at", "Merg la serviciu."],
          ["din", "from (inside)", "Sunt din România."],
          ["de la", "from (a place)", "Vin de la birou."],
          ["cu", "with", "Beau cafea cu lapte."],
          ["fără", "without", "Cafea fără zahăr."],
          ["pe", "on", "Cartea e pe masă."],
          ["pentru", "for", "Aceasta e pentru tine."],
          ["despre", "about", "Vorbesc despre el."],
          ["după", "after", "După masă merg acasă."],
          ["înainte de", "before", "Înainte de prânz."],
          ["între", "between", "Între noi."],
        ]}
        speakableCols={[0, 2]}
      />

      <SectionHeading>"ÎN" vs "LA"</SectionHeading>
      <ContrastBox columns={[
        { type: "yes", title: "✅ ÎN — physically inside", items: ["în București", "în România", "în casă"] },
        { type: "no", title: "LA — at/to a destination", items: ["la hotel", "la birou", "la doctor"] },
      ]} />

      <SectionHeading>Conjunctions</SectionHeading>
      <VocabGrid items={CONJUNCTIONS} />
    </LessonSection>
  );
}

// ─── Lesson 11 — Modals ───────────────────────────────────────

export function Lesson11() {
  return (
    <LessonSection id="L11" num="11" tag="Lesson 11 — Modals & Comparatives" title="Can, Must, Should + Comparisons">
      <SectionHeading>Modal Verbs</SectionHeading>
      <DataTable
        headers={["Modal", "Meaning", "Pattern", "Example"]}
        rows={[
          ["a putea", "can", "pot + să + verb", "Pot să vorbesc românește."],
          ["trebuie", "must", "trebuie + să + verb", "Trebuie să plec acum."],
          ["a vrea", "to want", "vreau + să + verb", "Vreau să mănânc ceva."],
          ["ar trebui", "should", "ar trebui + să", "Ar trebui să înveți."],
          ["aș vrea", "I'd like", "aș vrea + să", "Aș vrea o cafea."],
        ]}
        highlightCols={[2]}
        speakableCols={[0, 3]}
      />

      <SectionHeading>"Hai să" — Let's...!</SectionHeading>
      <InfoBox variant="orange" title="The Most Common Invitation">
        <MonoBlock>
          <Speakable text="Hai să mergem!">Hai să mergem!</Speakable> — Let's go! · <Speakable text="Hai să mâncăm!">Hai să mâncăm!</Speakable> — Let's eat!<br />
          <Speakable text="Hai să bem o cafea!">Hai să bem o cafea!</Speakable> — Let's have a coffee!
        </MonoBlock>
      </InfoBox>

      <SectionHeading>Comparatives</SectionHeading>
      <DataTable
        headers={["Type", "Pattern", "Example"]}
        rows={[
          ["More…than", "mai + adj + decât", "El e mai mare decât eu."],
          ["Less…than", "mai puțin + adj + decât", "E mai puțin scump."],
          ["The most", "cel mai + adj", "Cel mai frumos oraș."],
          ["As…as", "la fel de + adj + ca", "E la fel de bun ca el."],
        ]}
        highlightCols={[1]}
        speakableCols={[2]}
      />
    </LessonSection>
  );
}

// ─── Lesson 12 — Imperfect ────────────────────────────────────

export function Lesson12() {
  return (
    <LessonSection id="L12" num="12" tag="Lesson 12 — Imperfect Tense" title='"I was doing / I used to do"'>
      <Paragraph>Ongoing or habitual past actions: "I used to…", "I was …ing". The imperfect is <b>regular</b> — even irregular verbs behave predictably here.</Paragraph>

      <SectionHeading>Imperfect Conjugation</SectionHeading>
      <DataTable
        headers={["Pronoun", "a fi", "a avea", "a merge", "a vorbi", "a lucra"]}
        rows={[
          ["eu", "eram", "aveam", "mergeam", "vorbeam", "lucram"],
          ["tu", "erai", "aveai", "mergeai", "vorbeai", "lucrai"],
          ["el/ea", "era", "avea", "mergea", "vorbea", "lucra"],
          ["noi", "eram", "aveam", "mergeam", "vorbeam", "lucram"],
          ["voi", "erați", "aveați", "mergeați", "vorbeați", "lucrați"],
          ["ei/ele", "erau", "aveau", "mergeau", "vorbeau", "lucrau"],
        ]}
        highlightCols={[1, 2, 3, 4, 5]}
        speakableCols={[1]}
      />

      <InfoBox variant="blue" title="Imperfect Pattern">
        <p>Take the infinitive stem → add <b>-am, -ai, -a, -am, -ați, -au</b>. Works for almost every verb!</p>
      </InfoBox>

      <SectionHeading>Imperfect vs. Perfect Compus</SectionHeading>
      <ContrastBox columns={[
        { type: "yes", title: "✅ Perfect — completed action", items: ["Am mâncat la ora 12.", "(I ate at 12. done)"] },
        { type: "no", title: "⏳ Imperfect — ongoing / habitual", items: ["Mâncam când a sunat.", "(I was eating when the phone rang.)"] },
      ]} />

      <SectionHeading>Using the Imperfect</SectionHeading>
      <PhraseGrid items={[
        { ro: "Când eram mic, locuiam la sat.", en: "When I was small, I lived in the village." },
        { ro: "Mergeam la școală în fiecare zi.", en: "I used to go to school every day." },
        { ro: "Afară ploua și era frig.", en: "Outside it was raining and it was cold." },
        { ro: "Ce făceai ieri la ora cinci?", en: "What were you doing yesterday at 5?" },
      ]} />

      <DrillBox title='Drill — "Când eram mic…"' examples={<>
        Când eram mic, <b>___</b> (a locui) la/în ___.<br />
        <b>___</b> (a merge) la școală în fiecare zi.<br />
        Bunica mea <b>___</b> (a face) mâncare bună.<br />
        <b>___</b> (a fi) fericit(ă) când <b>___</b> (a juca) afară.
      </>}>
        <p>Complete these sentences about your childhood:</p>
      </DrillBox>

      <TestBox title="Self-Test — Imperfect" items={[
        { question: '"I used to speak Romanian." (eu)', answer: "Vorbeam românește." },
        { question: '"She was working when I called."', answer: "Ea lucra când am sunat." },
        { question: '"They used to have a house in the mountains."', answer: "Ei aveau o casă la munte." },
      ]} />
    </LessonSection>
  );
}
