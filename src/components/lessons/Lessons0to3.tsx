import {
  LessonSection, SectionHeading, Paragraph, InfoBox, DrillBox, TestBox,
  PrincipleGrid, PsychBox, SoundGrid, DataTable, Speakable, MonoBlock,
  Matrix,
} from "../ui";
import { PETROV_PRINCIPLES, LIBERATING_TRUTHS, KEY_PATTERNS } from "../../data/schedule";
import { MATRIX_VORBI_EU, MATRIX_LUCRA_FULL, MATRIX_FACE_FULL } from "../../data/matrices";

// ─── 7 Principles ──────────────────────────────────────────────

export function LessonRules() {
  return (
    <LessonSection id="rules" num="★" tag="Foundation" title="The 7 Petrov Principles">
      <PrincipleGrid items={PETROV_PRINCIPLES} />
    </LessonSection>
  );
}

// ─── Lesson 0 ──────────────────────────────────────────────────

export function Lesson0() {
  return (
    <LessonSection id="L0" num="0" tag="Lesson 0 — Breaking the Barrier" title="The Psychological Warm-Up">
      <Paragraph>
        Before a single grammar rule — we address the <b>real</b> reason you haven't learned a language yet. It's not intelligence. It's fear.
      </Paragraph>
      <PsychBox
        title="Ask Yourself Honestly"
        questions={[
          "What specifically has stopped me from learning a language before?",
          "Am I afraid of sounding foolish? Of being judged?",
          "Do I believe I'm \"bad at languages\" or \"too old to learn\"?",
          "Have I been overwhelmed by grammar rules and textbooks?",
        ]}
        footer="If you answered yes — you are normal. By Lesson 4, Petrov's students were speaking. By Lesson 16, they were having real conversations."
      />
      <SectionHeading>The 3 Liberating Truths</SectionHeading>
      <PrincipleGrid items={LIBERATING_TRUTHS} />
      <InfoBox variant="gold" title="Your Contract With Yourself">
        <p>"I will speak Romanian badly, bravely, and often — starting today." Write it down.</p>
      </InfoBox>
      <InfoBox variant="blue" title="Why 16 Lessons Work">
        <p>Petrov creates a <b>fireproof foundation</b> — a structural skeleton so strong that even if you stop for months, it never fully disappears.</p>
      </InfoBox>
    </LessonSection>
  );
}

// ─── Lesson 1 ──────────────────────────────────────────────────

const SPECIAL_CHARS = [
  { symbol: "Ă ă", pronunciation: "\"uh\" — like 'a' in \"about\"", description: "", example: "băiat (boy)", exampleWord: "băiat" },
  { symbol: "Â â", pronunciation: "\"uh\" deep — no English equiv.", description: "", example: "câine (dog)", exampleWord: "câine" },
  { symbol: "Î î", pronunciation: "Same as Â — position differs", description: "", example: "în (in)", exampleWord: "în" },
  { symbol: "Ș ș", pronunciation: "\"sh\" — like \"show\"", description: "", example: "școală (school)", exampleWord: "școală" },
  { symbol: "Ț ț", pronunciation: "\"ts\" — like \"cats\"", description: "", example: "țară (country)", exampleWord: "țară" },
];

const CONSONANT_COMBOS = [
  { symbol: "CE", pronunciation: "\"che\" — like \"check\"", description: "", example: "ce (what)", exampleWord: "ce" },
  { symbol: "CI", pronunciation: "\"chi\" — like \"cheese\"", description: "", example: "cinci (five)", exampleWord: "cinci" },
  { symbol: "CHE", pronunciation: "\"ke\" — like \"kept\"", description: "", example: "chelner (waiter)", exampleWord: "chelner" },
  { symbol: "CHI", pronunciation: "\"ki\" — like \"kid\"", description: "", example: "chiar (really)", exampleWord: "chiar" },
  { symbol: "GE", pronunciation: "\"je\" — like \"jet\"", description: "", example: "ger (frost)", exampleWord: "ger" },
  { symbol: "GI", pronunciation: "\"ji\" — like \"jingle\"", description: "", example: "girafă (giraffe)", exampleWord: "girafă" },
  { symbol: "GHE", pronunciation: "\"ghe\" — like \"get\"", description: "", example: "ghete (boots)", exampleWord: "ghete" },
  { symbol: "GHI", pronunciation: "\"gi\" — like \"give\"", description: "", example: "ghid (guide)", exampleWord: "ghid" },
];

export function Lesson1() {
  return (
    <LessonSection id="L1" num="1" tag="Lesson 1 — The Sound System" title="Romanian Pronunciation — It's Phonetic!">
      <Paragraph>
        Romanian is almost perfectly phonetic. What you see is what you say. Only <b>5 special characters</b> to learn.
      </Paragraph>

      <SectionHeading>The 5 Special Characters</SectionHeading>
      <SoundGrid items={SPECIAL_CHARS} />

      <InfoBox variant="blue" title="Â vs Î">
        <p><b>Â</b> = inside a word (<Speakable text="România">România</Speakable>). <b>Î</b> = start/end of a word (<Speakable text="în">în</Speakable>). They sound <b>exactly the same</b>.</p>
      </InfoBox>

      <SectionHeading>Consonant Combinations</SectionHeading>
      <SoundGrid items={CONSONANT_COMBOS} />

      <SectionHeading>Vowel Sounds</SectionHeading>
      <DataTable
        headers={["Letter", "Sound", "Like English", "Example"]}
        rows={[
          ["A", "ah", "\"father\"", "apă (water)"],
          ["E", "eh", "\"bed\"", "este (is)"],
          ["I", "ee", "\"see\"", "iubi (to love)"],
          ["O", "oh", "\"more\"", "om (man)"],
          ["U", "oo", "\"food\"", "unu (one)"],
        ]}
        highlightCols={[3]}
        speakableCols={[3]}
      />

      <InfoBox variant="gold" title="Stress Rule">
        <p>Generally on the <b>second-to-last syllable</b> (~80% of words). Unlike French, <b>every letter is pronounced</b>.</p>
      </InfoBox>

      <InfoBox variant="orange" title="Common Stress Exceptions">
        <MonoBlock>
          <Speakable text="copíl">co<b>PÍL</b></Speakable> (child) · <Speakable text="băiát">bă<b>IÁT</b></Speakable> (boy) · <Speakable text="cafea">ca<b>FEA</b></Speakable> (coffee)<br />
          <Speakable text="cásă"><b>CÁ</b>să</Speakable> (house) · <Speakable text="fátă"><b>FÁ</b>tă</Speakable> (girl) · <Speakable text="másă"><b>MÁ</b>să</Speakable> (table)
        </MonoBlock>
      </InfoBox>

      <DrillBox
        title="Drill — Read These Aloud"
        examples={
          <>
            <Speakable text="mulțumesc">mulțumesc</Speakable> = thank you · <Speakable text="bună ziua">bună ziua</Speakable> = good day · <Speakable text="vă rog">vă rog</Speakable> = please<br />
            <Speakable text="da">da</Speakable> / <Speakable text="nu">nu</Speakable> = yes / no · <Speakable text="România">România</Speakable> = Romania · <Speakable text="București">București</Speakable> = Bucharest
          </>
        }
      />
    </LessonSection>
  );
}

// ─── Lesson 2 ──────────────────────────────────────────────────

const QUESTION_WORDS = [
  { symbol: "ce?", pronunciation: "what?", description: "", example: "Ce faci?", exampleWord: "Ce faci?" },
  { symbol: "cine?", pronunciation: "who?", description: "", example: "Cine este?", exampleWord: "Cine este?" },
  { symbol: "unde?", pronunciation: "where?", description: "", example: "Unde mergi?", exampleWord: "Unde mergi?" },
  { symbol: "când?", pronunciation: "when?", description: "", example: "Când pleci?", exampleWord: "Când pleci?" },
  { symbol: "cum?", pronunciation: "how?", description: "", example: "Cum te cheamă?", exampleWord: "Cum te cheamă?" },
  { symbol: "de ce?", pronunciation: "why?", description: "", example: "De ce plângi?", exampleWord: "De ce plângi?" },
  { symbol: "cât?", pronunciation: "how much?", description: "", example: "Cât costă?", exampleWord: "Cât costă?" },
  { symbol: "câți?", pronunciation: "how many?", description: "", example: "Câți ani ai?", exampleWord: "Câți ani ai?" },
  { symbol: "care?", pronunciation: "which?", description: "", example: "Care este?", exampleWord: "Care este?" },
  { symbol: "al cui?", pronunciation: "whose?", description: "", example: "Al cui este?", exampleWord: "Al cui este?" },
];

export function Lesson2() {
  return (
    <LessonSection id="L2" num="2" tag="Lesson 2 — Pronouns & Question Words" title="The Building Blocks of Every Sentence">
      <SectionHeading>Subject Pronouns</SectionHeading>
      <DataTable
        headers={["Romanian", "English", "Tip"]}
        rows={[
          ["eu", "I", "sounds like \"yeh-oo\""],
          ["tu", "you (informal)", "like French \"tu\""],
          ["el / ea", "he / she", ""],
          ["noi", "we", "like French \"nous\""],
          ["voi", "you (plural)", "like French \"vous\""],
          ["ei / ele", "they (m / f)", ""],
        ]}
        speakableCols={[0]}
      />

      <InfoBox variant="blue" title="Formal 'You' — Dumneavoastră">
        <p>Use <b><Speakable text="dumneavoastră">dumneavoastră</Speakable></b> with strangers, older people, officials. Takes <b>voi</b> verb forms. Romanian formality is <b>strict</b>.</p>
        <MonoBlock><Speakable text="Dumneavoastră vorbiți românește?">Dumneavoastră vorbiți românește?</Speakable> — Do you (formal) speak Romanian?</MonoBlock>
      </InfoBox>

      <SectionHeading>Object Pronouns</SectionHeading>
      <DataTable
        headers={["Subject", "Direct Object", "Indirect Object", "After Prep."]}
        rows={[
          ["eu", "mă", "îmi", "mine"],
          ["tu", "te", "îți", "tine"],
          ["el", "îl", "îi", "el"],
          ["ea", "o", "îi", "ea"],
          ["noi", "ne", "ne", "noi"],
          ["voi", "vă", "vă", "voi"],
          ["ei/ele", "îi/le", "le", "ei/ele"],
        ]}
        highlightCols={[1, 2, 3]}
      />

      <SectionHeading>"Pe" — The Personal Accusative</SectionHeading>
      <InfoBox variant="orange" title='Use "PE" Before People'>
        <MonoBlock>
          <Speakable text="Îl văd pe Mihai.">Îl văd <b>pe</b> Mihai.</Speakable> — I see Mihai. ✅<br />
          <Speakable text="Văd mașina.">Văd mașina.</Speakable> — I see the car. ✅ (no "pe" — thing)<br />
          <Speakable text="Pe cine cauți?"><b>Pe cine</b> cauți?</Speakable> — Who are you looking for?
        </MonoBlock>
        <p className="mt-1.5">Person = use "pe." Thing = no "pe."</p>
      </InfoBox>

      <SectionHeading>Demonstratives — This / That</SectionHeading>
      <DataTable
        headers={["English", "Formal", "Colloquial", "Example"]}
        rows={[
          ["this (m)", "acest", "ăsta", "Ăsta e bun."],
          ["this (f)", "această", "asta", "Vreau asta."],
          ["that (m)", "acel", "ăla", "Ăla e scump."],
          ["that (f)", "acea", "aia", "Nu vreau aia."],
          ["these (m)", "acești", "ăștia", "Ăștia sunt buni."],
          ["these (f)", "aceste", "astea", "Astea sunt ieftine."],
          ["those (m)", "acei", "ăia", ""],
          ["those (f)", "acele", "alea", "Alea costă mult."],
        ]}
        highlightCols={[1, 2]}
        speakableCols={[2, 3]}
      />
      <InfoBox variant="gold" title="In Real Life">
        <p>Nobody says "această" in conversation. Use <b>ăsta/asta/ăla/aia</b>.</p>
      </InfoBox>

      <SectionHeading>Question Words — The 10 Essentials</SectionHeading>
      <SoundGrid items={QUESTION_WORDS} />

      <SectionHeading>Survival Communication</SectionHeading>
      <InfoBox variant="teal" title="When You Don't Understand">
        <MonoBlock>
          <Speakable text="Nu înțeleg.">Nu înțeleg.</Speakable> — I don't understand.<br />
          <Speakable text="Puteți repeta, vă rog?">Puteți repeta, vă rog?</Speakable> — Can you repeat, please?<br />
          <Speakable text="Mai încet, vă rog.">Mai încet, vă rog.</Speakable> — Slower, please.<br />
          <Speakable text="Ce înseamnă asta?">Ce înseamnă asta?</Speakable> — What does that mean?<br />
          <Speakable text="Vorbiți engleză?">Vorbiți engleză?</Speakable> — Do you speak English?
        </MonoBlock>
      </InfoBox>

      <TestBox title="Self-Test" items={[
        { question: "\"What is your name?\" (informal)", answer: "Cum te cheamă?" },
        { question: "\"I see Maria\" (don't forget pe!)", answer: "O văd pe Maria." },
        { question: "\"Can you repeat, please?\"", answer: "Puteți repeta, vă rog?" },
      ]} />
    </LessonSection>
  );
}

// ─── Lesson 3 ──────────────────────────────────────────────────

export function Lesson3() {
  return (
    <LessonSection id="L3" num="3" tag="The Most Important Lesson" title="The Verb Matrix — Petrov's 'Multiplication Table'">
      <Paragraph>3 Tenses × 3 Forms = <b>9 sentence types</b>. Master this and you can say almost anything.</Paragraph>

      <InfoBox variant="teal" title="Don't Panic">
        <p>Start with just the <b>"eu" (I)</b> row. Once natural, add "tu" and "el/ea." Focus on <b>speed</b>, not perfection.</p>
      </InfoBox>

      <SectionHeading>The 3 Key Patterns</SectionHeading>
      <PrincipleGrid items={KEY_PATTERNS} />

      <InfoBox variant="blue" title="The 3 Tenses You Need">
        <p><b>Future (colloquial)</b> = o să + subjunctive. <b>Present</b> = conjugated verb. <b>Past</b> = am + participle. That's 90% of daily speech.</p>
        <p className="mt-1.5">Formal future uses <b>voi + infinitive</b>: <Speakable text="Voi vorbi.">Voi vorbi.</Speakable> — for news, books, formal settings.</p>
      </InfoBox>

      <Matrix data={MATRIX_VORBI_EU} />
      <Matrix data={MATRIX_LUCRA_FULL} />
      <Matrix data={MATRIX_FACE_FULL} />

      <SectionHeading>Formal Future — "Voi + Infinitive"</SectionHeading>
      <DataTable
        headers={["Pronoun", "Marker", "a face", "a merge", "a vorbi"]}
        rows={[
          ["eu", "voi", "voi face", "voi merge", "voi vorbi"],
          ["tu", "vei", "vei face", "vei merge", "vei vorbi"],
          ["el/ea", "va", "va face", "va merge", "va vorbi"],
          ["noi", "vom", "vom face", "vom merge", "vom vorbi"],
          ["voi", "veți", "veți face", "veți merge", "veți vorbi"],
          ["ei/ele", "vor", "vor face", "vor merge", "vor vorbi"],
        ]}
        highlightCols={[1]}
      />

      <SectionHeading>Word Order — Flexible!</SectionHeading>
      <InfoBox variant="orange" title="Word Order Changes Emphasis">
        <MonoBlock>
          <Speakable text="Eu merg la școală.">Eu merg la școală.</Speakable> — I go to school. (neutral)<br />
          <Speakable text="La școală merg eu.">La școală merg eu.</Speakable> — It's <b>me</b> who goes. (emphasis)<br />
          <Speakable text="Merg la școală.">Merg la școală.</Speakable> — (I) go to school. (subject dropped)
        </MonoBlock>
        <p className="mt-1.5">Romanian often <b>drops the subject pronoun</b> because the verb ending tells you who's speaking.</p>
      </InfoBox>

      <SectionHeading>Contracted Forms — Real Speech</SectionHeading>
      <InfoBox variant="orange" title="How Romanians Really Talk">
        <MonoBlock>
          nu am → <Speakable text="n-am"><b>n-am</b></Speakable> · nu ai → <b>n-ai</b> · nu are → <b>n-are</b><br />
          este → <b>e</b> · nu o să → <Speakable text="n-o să"><b>n-o să</b></Speakable><br />
          <Speakable text="N-am timp.">N-am timp.</Speakable> — I don't have time.<br />
          <Speakable text="S-a terminat.">S-a terminat.</Speakable> — It's over.
        </MonoBlock>
      </InfoBox>

      <DrillBox
        title="Drill — Build Sentences From the Matrix"
        examples={
          <>
            <b>A VORBI:</b> <Speakable text="O să vorbesc.">O să vorbesc.</Speakable> → <Speakable text="Vorbesc.">Vorbesc.</Speakable> → <Speakable text="Am vorbit.">Am vorbit.</Speakable><br />
            <Speakable text="O să vorbesc?">O să vorbesc?</Speakable> → <Speakable text="Vorbesc?">Vorbesc?</Speakable> → <Speakable text="Am vorbit?">Am vorbit?</Speakable><br />
            <Speakable text="N-o să vorbesc.">N-o să vorbesc.</Speakable> → <Speakable text="Nu vorbesc.">Nu vorbesc.</Speakable> → <Speakable text="Nu am vorbit.">Nu am vorbit.</Speakable>
          </>
        }
      >
        <p>Pick any verb. Run it through all 9 cells. 20–30 seconds per verb. Do this 5× daily.</p>
        <p className="font-bold mt-2">20–30 sec/verb · 5× daily · Automatic in 2–3 days</p>
      </DrillBox>
    </LessonSection>
  );
}
