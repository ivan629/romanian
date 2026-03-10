import {
  LessonSection, SectionHeading, Paragraph, InfoBox, TestBox, DrillBox,
  PhraseGrid, DataTable, Speakable, MonoBlock, FillerGrid, VocabGrid,
} from "../ui";
import { FILLER_WORDS, EXPRESSIONS, COMPLEX_SENTENCES, GRAND_REVIEW_TESTS } from "../../data/matrices";
import { COGNATES } from "../../data/vocabulary";

// ─── Lesson 13 — Commands ─────────────────────────────────────

export function Lesson13() {
  return (
    <LessonSection id="L13" num="13" tag="Lesson 13 — Commands" title="Imperative — Orders & Requests">
      <Paragraph>Two forms: <b>tu</b> (informal, one person) and <b>voi</b> (formal/plural). The voi form is also used with <b>dumneavoastră</b>.</Paragraph>
      <DataTable
        headers={["English", "+ (tu)", "+ (voi)", "− (tu)"]}
        rows={[
          ["Come!", "Vino!", "Veniți!", "Nu veni!"],
          ["Go!", "Du-te!", "Duceți-vă!", "Nu te duce!"],
          ["Wait!", "Stai!", "Stați!", "Nu sta!"],
          ["Speak!", "Vorbește!", "Vorbiți!", "Nu vorbi!"],
          ["Eat!", "Mănâncă!", "Mâncați!", "Nu mânca!"],
          ["Give!", "Dă!", "Dați!", "Nu da!"],
          ["Read!", "Citește!", "Citiți!", "Nu citi!"],
          ["Write!", "Scrie!", "Scrieți!", "Nu scrie!"],
          ["Listen!", "Ascultă!", "Ascultați!", "Nu asculta!"],
          ["Look!", "Uită-te!", "Uitați-vă!", "Nu te uita!"],
        ]}
        speakableCols={[1, 2]}
      />

      <InfoBox variant="teal" title="Polite Requests">
        <MonoBlock>
          <Speakable text="Veniți, vă rog!">Veniți, <b>vă rog</b>!</Speakable> — Come, please!<br />
          <Speakable text="Spuneți-mi, vă rog.">Spuneți-mi, <b>vă rog</b>.</Speakable> — Tell me, please.<br />
          <Speakable text="Stai puțin!">Stai <b>puțin</b>!</Speakable> — Wait a moment!
        </MonoBlock>
      </InfoBox>

      <TestBox title="Self-Test — Commands" items={[
        { question: '"Come here!" (informal)', answer: "Vino aici!" },
        { question: '"Don\'t go!" (informal)', answer: "Nu te duce!" },
        { question: '"Please speak slowly." (formal)', answer: "Vorbiți încet, vă rog." },
      ]} />
    </LessonSection>
  );
}

// ─── Lesson 14 — Subjunctive ──────────────────────────────────

export function Lesson14() {
  return (
    <LessonSection id="L14" num="14" tag='Lesson 14 — The Subjunctive "SĂ"' title="Modal + SĂ + Verb">
      <Paragraph>Romanian uses the subjunctive where English uses infinitives: "I want <b>to go</b>" = "Vreau <b>să merg</b>." Only 3rd person changes from present tense.</Paragraph>

      <InfoBox variant="blue" title="When to Use SĂ">
        <p>After: <b>vreau</b> (I want), <b>trebuie</b> (must), <b>pot</b> (I can), <b>o să</b> (will), <b>hai</b> (let's), <b>sper</b> (I hope), <b>cred</b> (I think).</p>
      </InfoBox>

      <DataTable
        headers={["Verb", "Present (el)", "Subjunctive (el să…)", "Example"]}
        rows={[
          ["a vorbi", "vorbește", "să vorbească", "Vreau să vorbească."],
          ["a face", "face", "să facă", "Trebuie să facă asta."],
          ["a merge", "merge", "să meargă", "O să meargă acasă."],
          ["a veni", "vine", "să vină", "Trebuie să vină."],
          ["a fi", "este", "să fie", "Vreau să fie bine."],
          ["a avea", "are", "să aibă", "Sper să aibă noroc."],
          ["a mânca", "mănâncă", "să mănânce", "Vreau să mănânce."],
          ["a ști", "știe", "să știe", "Trebuie să știe."],
          ["a putea", "poate", "să poată", "Vreau să poată veni."],
        ]}
        highlightCols={[2]}
        speakableCols={[2]}
      />

      <DrillBox title='Drill — Build "Vreau să…" Sentences' examples={<>
        <Speakable text="Vreau să merg acasă.">Vreau să merg acasă.</Speakable> — I want to go home.<br />
        <Speakable text="Trebuie să lucrez mâine.">Trebuie să lucrez mâine.</Speakable> — I must work tomorrow.<br />
        <Speakable text="Pot să te ajut?">Pot să te ajut?</Speakable> — Can I help you?<br />
        <Speakable text="Sper să fie frumos afară.">Sper să fie frumos afară.</Speakable> — I hope it's nice outside.
      </>} />

      <TestBox title="Self-Test — Subjunctive" items={[
        { question: '"I want to eat something."', answer: "Vreau să mănânc ceva." },
        { question: '"He must come tomorrow."', answer: "Trebuie să vină mâine." },
        { question: '"Can she speak Romanian?"', answer: "Poate să vorbească românește?" },
      ]} />
    </LessonSection>
  );
}

// ─── Lesson 15 — Conditionals ─────────────────────────────────

export function Lesson15() {
  return (
    <LessonSection id="L15" num="15" tag="Lesson 15 — Conditionals & Complex Sentences" title="If… Then…, Reflexives, Relative Clauses">
      <SectionHeading>Conditional — "I would…"</SectionHeading>
      <DataTable
        headers={["Pronoun", "Marker", "+ a face", "+ a fi", "+ a merge"]}
        rows={[
          ["eu", "aș", "aș face", "aș fi", "aș merge"],
          ["tu", "ai", "ai face", "ai fi", "ai merge"],
          ["el/ea", "ar", "ar face", "ar fi", "ar merge"],
          ["noi", "am", "am face", "am fi", "am merge"],
          ["voi", "ați", "ați face", "ați fi", "ați merge"],
          ["ei/ele", "ar", "ar face", "ar fi", "ar merge"],
        ]}
        highlightCols={[1]}
        speakableCols={[2]}
      />

      <SectionHeading>If… Then… (Dacă)</SectionHeading>
      <InfoBox variant="orange" title='3 Types of "If" Sentences'>
        <MonoBlock>
          <b>Real (likely):</b><br />
          <Speakable text="Dacă am timp, vin la tine.">Dacă am timp, vin la tine.</Speakable> — If I have time, I'll come.<br />
          <Speakable text="Dacă plouă, stau acasă.">Dacă plouă, stau acasă.</Speakable> — If it rains, I stay home.<br /><br />
          <b>Unreal (hypothetical):</b><br />
          <Speakable text="Dacă aș avea bani, aș călători.">Dacă aș avea bani, aș călători.</Speakable> — If I had money, I would travel.<br />
          <Speakable text="Dacă aș fi tu, aș pleca.">Dacă aș fi tu, aș pleca.</Speakable> — If I were you, I would leave.<br /><br />
          <b>Past unreal:</b><br />
          <Speakable text="Dacă aș fi știut, aș fi venit.">Dacă aș fi știut, aș fi venit.</Speakable> — If I had known, I would have come.
        </MonoBlock>
      </InfoBox>

      <SectionHeading>Reflexive Verbs</SectionHeading>
      <DataTable
        headers={["Verb", "Meaning", "Example"]}
        rows={[
          ["a se trezi", "to wake up", "Mă trezesc la 7."],
          ["a se simți", "to feel", "Mă simt bine."],
          ["a se uita", "to look/watch", "Mă uit la televizor."],
          ["a se gândi", "to think about", "Mă gândesc la tine."],
          ["a se numi", "to be called", "Mă numesc Ana."],
          ["a se spăla", "to wash oneself", "Mă spăl pe mâini."],
          ["a se îmbrăca", "to get dressed", "Mă îmbrac repede."],
        ]}
        speakableCols={[0, 2]}
      />

      <InfoBox variant="blue" title="Reflexive Pronouns">
        <MonoBlock>
          eu <b>mă</b> · tu <b>te</b> · el/ea <b>se</b> · noi <b>ne</b> · voi <b>vă</b> · ei/ele <b>se</b>
        </MonoBlock>
      </InfoBox>

      <SectionHeading>Relative Clauses — "Care" (who/which/that)</SectionHeading>
      <PhraseGrid items={[
        { ro: "Omul care vorbește e profesorul.", en: "The man who is speaking is the teacher." },
        { ro: "Cartea pe care o citesc e bună.", en: "The book (that) I'm reading is good." },
        { ro: "Filmul despre care vorbim.", en: "The movie we're talking about." },
      ]} />

      <SectionHeading>Double Negation — Romanian Says "No" Twice!</SectionHeading>
      <InfoBox variant="orange" title="Mandatory Pattern">
        <MonoBlock>
          <Speakable text="Nu vine nimeni."><b>Nu</b> vine <b>nimeni</b>.</Speakable> — Nobody is coming.<br />
          <Speakable text="Nu am nimic."><b>Nu</b> am <b>nimic</b>.</Speakable> — I have nothing.<br />
          <Speakable text="Nimeni nu știe nimic."><b>Nimeni nu</b> știe <b>nimic</b>.</Speakable> — Nobody knows anything.<br />
          <Speakable text="Nu merg nicăieri."><b>Nu</b> merg <b>nicăieri</b>.</Speakable> — I'm not going anywhere.<br />
          <Speakable text="Nu vorbesc niciodată."><b>Nu</b> vorbesc <b>niciodată</b>.</Speakable> — I never speak.
        </MonoBlock>
      </InfoBox>

      <TestBox title="Self-Test — Conditionals & Reflexives" items={[
        { question: '"If I had time, I would learn Romanian."', answer: "Dacă aș avea timp, aș învăța românește." },
        { question: '"I wake up at 7 and I feel good."', answer: "Mă trezesc la 7 și mă simt bine." },
        { question: '"The woman who works here is my friend."', answer: "Femeia care lucrează aici e prietena mea." },
        { question: '"Nobody knows anything."', answer: "Nimeni nu știe nimic." },
      ]} />
    </LessonSection>
  );
}

// ─── Lesson 16 — Advanced ─────────────────────────────────────

export function Lesson16() {
  return (
    <LessonSection id="L16" num="16" tag="Lesson 16 — Advanced Patterns" title="Complex Sentences, Fillers, Idioms & Cognates">
      <SectionHeading>Complex Sentences</SectionHeading>
      <PhraseGrid items={COMPLEX_SENTENCES} />

      <SectionHeading>"Mi-e…" — Expressing States</SectionHeading>
      <InfoBox variant="teal" title="How to Say 'I'm hungry / cold / afraid">
        <MonoBlock>
          <Speakable text="Mi-e foame."><b>Mi-e foame.</b></Speakable> — I'm hungry. (lit: "to me is hunger")<br />
          <Speakable text="Mi-e sete."><b>Mi-e sete.</b></Speakable> — I'm thirsty.<br />
          <Speakable text="Mi-e frig."><b>Mi-e frig.</b></Speakable> — I'm cold.<br />
          <Speakable text="Mi-e cald."><b>Mi-e cald.</b></Speakable> — I'm hot.<br />
          <Speakable text="Mi-e somn."><b>Mi-e somn.</b></Speakable> — I'm sleepy.<br />
          <Speakable text="Mi-e frică."><b>Mi-e frică.</b></Speakable> — I'm afraid.<br />
          <Speakable text="Mi-e rușine."><b>Mi-e rușine.</b></Speakable> — I'm ashamed/embarrassed.<br />
          <Speakable text="Mi-e dor de tine."><b>Mi-e dor</b> de tine.</Speakable> — I miss you. (uniquely Romanian!)
        </MonoBlock>
      </InfoBox>

      <SectionHeading>Filler Words — How Romanians Really Talk</SectionHeading>
      <FillerGrid items={FILLER_WORDS} />

      <SectionHeading>Common Expressions & Idioms</SectionHeading>
      <PhraseGrid items={EXPRESSIONS} />

      <SectionHeading>Cognate Trick — 1000 Free Words</SectionHeading>
      <InfoBox variant="gold" title="English → Romanian Patterns">
        <p><b>-tion → -ție</b>: information → informație, situation → situație<br />
          <b>-ty → -tate</b>: university → universitate, quality → calitate<br />
          <b>-ture → -tură</b>: nature → natură, culture → cultură<br />
          <b>-ment → -ment</b>: moment → moment, apartment → apartament</p>
      </InfoBox>
      <VocabGrid items={COGNATES} />
    </LessonSection>
  );
}

// ─── Lesson 17 — Review ───────────────────────────────────────

export function Lesson17() {
  return (
    <LessonSection id="L17" num="17" tag="Lesson 17 — Grand Review" title="Grand Self-Test — All 16 Lessons">
      <TestBox title="Can You Say All of These?" items={GRAND_REVIEW_TESTS} />
      <InfoBox variant="gold" title="What Comes After?">
        <p>You have the complete foundation. Continue with Romanian YouTube, ProTV, Digi24, native speakers. The foundation never disappears.</p>
      </InfoBox>
    </LessonSection>
  );
}
