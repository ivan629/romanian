import {
  LessonSection, SectionHeading, Paragraph, InfoBox, TestBox,
  PhraseGrid, DataTable, Speakable, MonoBlock, Matrix, VerbCardGrid, VocabGrid,
} from "../ui";
import { MATRIX_FI, MATRIX_AVEA } from "../../data/matrices";
import { CORE_VERBS } from "../../data/verbs";
import { ADVERBS, COLORS, NOUNS_WITH_ARTICLES } from "../../data/vocabulary";

// ─── Lesson 4 — A FI ──────────────────────────────────────────

export function Lesson4() {
  return (
    <LessonSection id="L4" num="4" tag='Lesson 4 — The Verb "To Be"' title="A FI — The Most Important Verb">
      <Paragraph>"A fi" is irregular. Used for identity, descriptions, professions, locations, and states.</Paragraph>
      <SectionHeading>Full Matrix: A FI</SectionHeading>
      <Matrix data={MATRIX_FI} />
      <SectionHeading>Using A FI</SectionHeading>
      <PhraseGrid items={[
        { ro: "Eu sunt student.", en: "I am a student." },
        { ro: "Ea este frumoasă.", en: "She is beautiful." },
        { ro: "Noi suntem din România.", en: "We are from Romania." },
        { ro: "El a fost la București.", en: "He was in Bucharest." },
        { ro: "O să fie bine.", en: "It will be fine." },
        { ro: "Cine este el?", en: "Who is he?" },
      ]} />
      <InfoBox variant="gold" title='Shortcut: "e" = "este"'>
        <p>In speech, <b>este</b> → <b>e</b>. "<Speakable text="El e student.">El e student</Speakable>" = "El este student."</p>
      </InfoBox>
      <TestBox title="Self-Test" items={[
        { question: "I am from England.", answer: "Eu sunt din Anglia." },
        { question: "She was not happy.", answer: "Ea nu a fost fericită." },
        { question: "It will be fine.", answer: "O să fie bine." },
      ]} />
    </LessonSection>
  );
}

// ─── Lesson 5 — A AVEA ────────────────────────────────────────

export function Lesson5() {
  return (
    <LessonSection id="L5" num="5" tag='Lesson 5 — The Verb "To Have"' title="A AVEA — Possession, Age & Past Tense Helper">
      <Paragraph>"A avea" expresses possession AND is the helper verb for ALL past tenses.</Paragraph>
      <SectionHeading>Full Matrix: A AVEA</SectionHeading>
      <Matrix data={MATRIX_AVEA} />
      <SectionHeading>Using A AVEA</SectionHeading>
      <PhraseGrid items={[
        { ro: "Am o mașină nouă.", en: "I have a new car." },
        { ro: "Câți ani ai?", en: "How old are you?" },
        { ro: "Am 28 de ani.", en: "I am 28 years old." },
        { ro: "Ea nu are timp.", en: "She doesn't have time." },
        { ro: "Aveți copii?", en: "Do you have children?" },
        { ro: "Am avut noroc.", en: "I was lucky." },
      ]} />
      <SectionHeading>"Îmi place" — How "To Like" Works</SectionHeading>
      <InfoBox variant="orange" title="It's Backwards — Like Spanish 'gustar'">
        <MonoBlock>
          <Speakable text="Îmi place cafeaua."><b>Îmi place</b> cafeaua.</Speakable> — I like coffee.<br />
          <Speakable text="Îți place România?"><b>Îți place</b> România?</Speakable> — Do you like Romania?<br />
          <Speakable text="Ne plac sarmalele."><b>Ne plac</b> sarmalele.</Speakable> — We like sarmale. (plural = <b>plac</b>!)<br />
          <Speakable text="Mi-a plăcut filmul."><b>Mi-a plăcut</b> filmul.</Speakable> — I liked the movie. (past)
        </MonoBlock>
        <p className="mt-1.5">Singular → <b>place</b>. Plural → <b>plac</b>. Past → <b>a plăcut</b>.</p>
      </InfoBox>
      <SectionHeading>Past Participle Formation</SectionHeading>
      <DataTable
        headers={["Group", "Infinitive", "Participle", "Example"]}
        rows={[
          ["I", "-a", "-at", "a lucra → lucrat"],
          ["II", "-ea", "-ut", "a avea → avut"],
          ["III", "-e", "-ut", "a face → făcut"],
          ["IV", "-i / -î", "-it / -ât", "a vorbi → vorbit"],
        ]}
        highlightCols={[2]}
      />
    </LessonSection>
  );
}

// ─── Lesson 6 — 32 Verbs ──────────────────────────────────────

export function Lesson6() {
  return (
    <LessonSection id="L6" num="6" tag="Lesson 6 — The 32 Magic Verbs" title="32 Verbs = All Daily Actions">
      <Paragraph>Infinitive, "eu" present, "el/ea" form, and past participle for each.</Paragraph>
      <VerbCardGrid verbs={CORE_VERBS} />
    </LessonSection>
  );
}

// ─── Lesson 7 — Articles ───────────────────────────────────────

export function Lesson7() {
  return (
    <LessonSection id="L7" num="7" tag="Lesson 7 — Articles, Gender & Plurals" title="How Romanian Nouns Work">
      <Paragraph>3 genders (masculine, feminine, neuter). The definite article attaches to the <b>end</b> of the word — unique among Romance languages.</Paragraph>

      <SectionHeading>Indefinite Articles (a, an)</SectionHeading>
      <DataTable
        headers={["Gender", "Singular", "Plural", "Example"]}
        rows={[
          ["Masculine", "un", "niște", "un băiat → niște băieți"],
          ["Feminine", "o", "niște", "o fată → niște fete"],
          ["Neuter", "un", "niște", "un lucru → niște lucruri"],
        ]}
        highlightCols={[1, 2]}
        speakableCols={[3]}
      />

      <SectionHeading>Definite Articles (the) — Attached to the End!</SectionHeading>
      <DataTable
        headers={["Gender", "Ending", "Without \"the\"", "With \"the\""]}
        rows={[
          ["Masc.", "-(u)l", "băiat", "băiatul"],
          ["Fem.", "-(u)a", "fată", "fata"],
          ["Neuter", "-(u)l", "lucru", "lucrul"],
          ["M. Pl.", "-ii", "băieți", "băieții"],
          ["F. Pl.", "-ele", "fete", "fetele"],
        ]}
        highlightCols={[1, 3]}
        speakableCols={[3]}
      />

      <InfoBox variant="blue" title="Gender Quick Guide">
        <p>Consonant ending = masculine. <b>-ă</b> or <b>-e</b> ending = feminine. Neuter = masculine singular, feminine plural.</p>
      </InfoBox>

      <SectionHeading>Genitive/Dative — "of" / "to"</SectionHeading>
      <DataTable
        headers={["Gender", "Nominative", "Gen./Dat. Sg.", "Gen./Dat. Pl."]}
        rows={[
          ["Masc.", "băiatul", "băiatului", "băieților"],
          ["Fem.", "fata", "fetei", "fetelor"],
          ["Fem.", "mama", "mamei", "mamelor"],
        ]}
        highlightCols={[2, 3]}
        speakableCols={[2, 3]}
      />
      <PhraseGrid items={[
        { ro: "Casa mamei.", en: "Mother's house." },
        { ro: "Cartea profesorului.", en: "The teacher's book." },
      ]} />

      <SectionHeading>The Vocative</SectionHeading>
      <InfoBox variant="teal" title="How Romanians Call People">
        <MonoBlock>
          mamă → <Speakable text="Mamo!"><b>mamo!</b></Speakable> · Maria → <Speakable text="Mario!"><b>Mario!</b></Speakable> · domn → <Speakable text="Domnule!"><b>Domnule!</b></Speakable> · frate → <Speakable text="Frate!"><b>Frate!</b></Speakable>
        </MonoBlock>
      </InfoBox>

      <SectionHeading>Common Nouns With Articles</SectionHeading>
      <VocabGrid items={NOUNS_WITH_ARTICLES} />
    </LessonSection>
  );
}

// ─── Lesson 8 — Adjectives ─────────────────────────────────────

export function Lesson8() {
  return (
    <LessonSection id="L8" num="8" tag="Lesson 8 — Adjectives, Adverbs & Possessives" title="Describing Things, Actions & Ownership">
      <SectionHeading>Adjective Agreement</SectionHeading>
      <DataTable
        headers={["English", "M. Sg.", "F. Sg.", "M. Pl.", "F. Pl."]}
        rows={[
          ["good", "bun", "bună", "buni", "bune"],
          ["big", "mare", "mare", "mari", "mari"],
          ["small", "mic", "mică", "mici", "mici"],
          ["beautiful", "frumos", "frumoasă", "frumoși", "frumoase"],
          ["new", "nou", "nouă", "noi", "noi"],
          ["old", "vechi", "veche", "vechi", "vechi"],
          ["cheap", "ieftin", "ieftină", "ieftini", "ieftine"],
          ["expensive", "scump", "scumpă", "scumpi", "scumpe"],
          ["happy", "fericit", "fericită", "fericiți", "fericite"],
          ["tired", "obosit", "obosită", "obosiți", "obosite"],
        ]}
        highlightCols={[1, 2, 3, 4]}
        speakableCols={[1]}
      />

      <SectionHeading>Key Adverbs</SectionHeading>
      <VocabGrid items={ADVERBS} />

      <SectionHeading>Colors</SectionHeading>
      <VocabGrid items={COLORS} />

      <SectionHeading>Possessives</SectionHeading>
      <DataTable
        headers={["English", "Before M. Noun", "Before F. Noun"]}
        rows={[
          ["my", "meu", "mea"],
          ["your (sg.)", "tău", "ta"],
          ["his", "lui", "lui"],
          ["her", "ei", "ei"],
          ["our", "nostru", "noastră"],
          ["their", "lor", "lor"],
        ]}
        highlightCols={[1, 2]}
        speakableCols={[1, 2]}
      />
      <InfoBox variant="blue" title="Word Order">
        <p>Noun (with article) + possessive: <b><Speakable text="casa mea">casa mea</Speakable></b> (my house), <b><Speakable text="fratele meu">fratele meu</Speakable></b> (my brother).</p>
      </InfoBox>
    </LessonSection>
  );
}
