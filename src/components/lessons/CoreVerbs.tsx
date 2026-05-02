import {
  LessonSection, SectionHeading, Paragraph, InfoBox, TestBox,
  PhraseGrid, DataTable, MonoBlock, VerbCardGrid,
} from "../ui";
import { RO } from "../RO";
import { Matrix } from "../Matrix";
import { MATRIX_FI, MATRIX_AVEA } from "../../data/matrices";
import { CORE_VERBS } from "../../data/verbs";

// ─── Lesson 4 — A FI ────────────────────────────────────────────

export function Lesson4() {
  return (
    <LessonSection
      id="L4" num="4" tag="The verb to be"
      title="A fi — the most important verb"
      subtitle="“A fi” is irregular but indispensable: identity, descriptions, professions, locations, states."
    >
      <SectionHeading>Full matrix</SectionHeading>
      <Matrix data={MATRIX_FI} />

      <SectionHeading>Using a fi</SectionHeading>
      <PhraseGrid items={[
        { ro: "Eu sunt student.", en: "I am a student." },
        { ro: "Ea este frumoasă.", en: "She is beautiful." },
        { ro: "Noi suntem din România.", en: "We are from Romania." },
        { ro: "El a fost la București.", en: "He was in Bucharest." },
        { ro: "O să fie bine.", en: "It will be fine." },
        { ro: "Cine este el?", en: "Who is he?" },
      ]} />

      <InfoBox variant="gold" title="Shortcut: ‘e’ = ‘este’">
        <p>
          In speech, <b>este</b> shrinks to <b>e</b>. So <RO text="El e student." en="He is a student." />{" "}
          means the same as <RO text="El este student." en="He is a student." />
        </p>
      </InfoBox>

      <TestBox title="Self-test" items={[
        { question: "I am from England.", answer: "Eu sunt din Anglia." },
        { question: "She was not happy.", answer: "Ea nu a fost fericită." },
        { question: "It will be fine.", answer: "O să fie bine." },
      ]} />
    </LessonSection>
  );
}

// ─── Lesson 5 — A AVEA ──────────────────────────────────────────

export function Lesson5() {
  return (
    <LessonSection
      id="L5" num="5" tag="The verb to have"
      title="A avea — possession, age, and the past-tense helper"
      subtitle="“A avea” expresses possession AND is the auxiliary that builds every past tense."
    >
      <SectionHeading>Full matrix</SectionHeading>
      <Matrix data={MATRIX_AVEA} />

      <SectionHeading>Using a avea</SectionHeading>
      <PhraseGrid items={[
        { ro: "Am o mașină nouă.", en: "I have a new car." },
        { ro: "Câți ani ai?", en: "How old are you? (lit. how many years do you have?)" },
        { ro: "Am 28 de ani.", en: "I am 28 years old." },
        { ro: "Ea nu are timp.", en: "She doesn’t have time." },
        { ro: "Aveți copii?", en: "Do you have children?" },
        { ro: "Am avut noroc.", en: "I was lucky." },
      ]} />

      <SectionHeading>“Îmi place” — how ‘to like’ works</SectionHeading>
      <InfoBox variant="neutral" title="Backwards, like Spanish ‘gustar’">
        <MonoBlock>
          <RO text="Îmi place cafeaua." en="I like coffee. (lit. coffee is pleasing to me)" /><br />
          <RO text="Îți place România?" en="Do you like Romania?" /><br />
          <RO text="Ne plac sarmalele." en="We like sarmale." /> &nbsp;
          <span className="text-[var(--ink-3)]">(plural object → <b>plac</b>!)</span><br />
          <RO text="Mi-a plăcut filmul." en="I liked the movie. (past)" />
        </MonoBlock>
        <p style={{ marginTop: 8 }}>
          Singular object → <b>place</b>. Plural object → <b>plac</b>. Past → <b>a plăcut</b>.
        </p>
      </InfoBox>

      <SectionHeading>Past participle formation</SectionHeading>
      <DataTable
        headers={["Group", "Infinitive ends in", "Participle ends in", "Example"]}
        rows={[
          ["I", "-a", "-at", "a lucra → lucrat"],
          ["II", "-ea", "-ut", "a avea → avut"],
          ["III", "-e", "-ut / -s", "a face → făcut · a merge → mers"],
          ["IV", "-i / -î", "-it / -ât", "a vorbi → vorbit · a coborî → coborât"],
        ]}
        highlightCols={[2]}
      />

      <InfoBox variant="blue" title="Forming the past — perfect compus">
        <p>
          Conjugated form of <b>a avea</b> + past participle. <br />
          <MonoBlock>
            <RO text="Eu am vorbit." en="I spoke." /> &nbsp;·&nbsp;
            <RO text="Tu ai vorbit." en="You spoke." /> &nbsp;·&nbsp;
            <RO text="El a vorbit." en="He spoke." /><br />
            <RO text="Noi am vorbit." en="We spoke." /> &nbsp;·&nbsp;
            <RO text="Voi ați vorbit." en="You (pl) spoke." /> &nbsp;·&nbsp;
            <RO text="Ei au vorbit." en="They spoke." />
          </MonoBlock>
        </p>
      </InfoBox>
    </LessonSection>
  );
}

// ─── Lesson 6 — 32 verbs ────────────────────────────────────────

export function Lesson6() {
  return (
    <LessonSection
      id="L6" num="6" tag="The thirty-two magic verbs"
      title="The verbs that cover daily life"
      subtitle="Infinitive, the “eu” form, the “el / ea” form, and the past participle. Drill each one through the matrix."
    >
      <Paragraph>
        Memorise these and you have access to almost any everyday situation. Hover any form to see
        its meaning, click to hear it.
      </Paragraph>
      <VerbCardGrid verbs={CORE_VERBS} />
    </LessonSection>
  );
}
