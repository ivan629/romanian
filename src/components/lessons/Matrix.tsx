import {
  LessonSection, SectionHeading, Paragraph, InfoBox, DrillBox,
  PrincipleGrid, DataTable, MonoBlock,
} from "../ui";
import { RO } from "../RO";
import { Matrix } from "../Matrix";
import { KEY_PATTERNS } from "../../data/schedule";
import { MATRIX_VORBI_EU, MATRIX_LUCRA_FULL, MATRIX_FACE_FULL } from "../../data/matrices";

export function Lesson3() {
  return (
    <LessonSection
      id="L3" num="3" tag="The most important lesson"
      title="The verb matrix"
      subtitle="Three tenses × three forms = nine sentence types. Master one verb across this grid and you can already say almost anything."
    >
      <InfoBox variant="green" title="Don’t panic">
        <p>
          Start with just the <b>“eu” (I)</b> row. Once that feels natural, add <b>tu</b> and <b>el / ea</b>.
          Aim for <b>speed</b>, not perfection.
        </p>
      </InfoBox>

      <SectionHeading>The three key patterns</SectionHeading>
      <PrincipleGrid items={KEY_PATTERNS} />

      <InfoBox variant="blue" title="The three tenses you actually need">
        <p>
          <b>Future (colloquial)</b> = <RO text="o să" en="will" /> + subjunctive verb. &nbsp;
          <b>Present</b> = the conjugated verb. &nbsp;
          <b>Past</b> = <RO text="am" en="have" /> + past participle. &nbsp;
          That’s ninety percent of daily speech.
        </p>
        <p>
          Formal future uses <b><RO text="voi" en="will (formal aux.)" /> + infinitive</b> (e.g.{" "}
          <RO text="Voi vorbi." en="I will speak." />) — for news, books, and formal writing.
        </p>
      </InfoBox>

      <Matrix data={MATRIX_VORBI_EU} />
      <Matrix data={MATRIX_LUCRA_FULL} />
      <Matrix data={MATRIX_FACE_FULL} />

      <SectionHeading>Formal future — “voi” + infinitive</SectionHeading>
      <DataTable
        headers={["Pronoun", "Marker", "a face", "a merge", "a vorbi"]}
        rows={[
          ["eu", "voi", "voi face", "voi merge", "voi vorbi"],
          ["tu", "vei", "vei face", "vei merge", "vei vorbi"],
          ["el / ea", "va", "va face", "va merge", "va vorbi"],
          ["noi", "vom", "vom face", "vom merge", "vom vorbi"],
          ["voi", "veți", "veți face", "veți merge", "veți vorbi"],
          ["ei / ele", "vor", "vor face", "vor merge", "vor vorbi"],
        ]}
        highlightCols={[1]}
      />

      <SectionHeading>Word order is flexible</SectionHeading>
      <InfoBox variant="neutral" title="Order changes emphasis, not meaning">
        <MonoBlock>
          <RO text="Eu merg la școală." en="I go to school. (neutral)" /><br />
          <RO text="La școală merg eu." en="It’s ME who goes to school. (emphasis)" /><br />
          <RO text="Merg la școală." en="(I) go to school. (subject dropped)" />
        </MonoBlock>
        <p style={{ marginTop: 8 }}>
          Romanian often <b>drops the subject pronoun</b> — the verb ending already says who is speaking.
        </p>
      </InfoBox>

      <SectionHeading>Contracted forms — how Romanians actually speak</SectionHeading>
      <InfoBox variant="neutral" title="Real-life contractions">
        <MonoBlock>
          nu am → <RO text="n-am" en="I don’t have" /> &nbsp;·&nbsp;
          nu ai → <RO text="n-ai" en="you don’t have" /> &nbsp;·&nbsp;
          nu are → <RO text="n-are" en="he/she doesn’t have" /><br />
          este → <RO text="e" en="is" /> &nbsp;·&nbsp;
          nu o să → <RO text="n-o să" en="will not" /><br />
          <RO text="N-am timp." en="I don’t have time." /> &nbsp;·&nbsp;
          <RO text="S-a terminat." en="It’s over." />
        </MonoBlock>
      </InfoBox>

      <DrillBox
        title="Drill — build sentences from the matrix"
        examples={
          <>
            <b>a vorbi:</b> &nbsp;
            <RO text="O să vorbesc." en="I will speak." /> →{" "}
            <RO text="Vorbesc." en="I speak." /> →{" "}
            <RO text="Am vorbit." en="I spoke." /><br />
            <RO text="O să vorbesc?" en="Will I speak?" /> →{" "}
            <RO text="Vorbesc?" en="Do I speak?" /> →{" "}
            <RO text="Am vorbit?" en="Did I speak?" /><br />
            <RO text="N-o să vorbesc." en="I won’t speak." /> →{" "}
            <RO text="Nu vorbesc." en="I don’t speak." /> →{" "}
            <RO text="Nu am vorbit." en="I didn’t speak." />
          </>
        }
      >
        <Paragraph>
          Pick any verb. Run it through all nine cells aloud. Twenty to thirty seconds per verb.
          Repeat five times daily, ideally at different times. Within two or three days, the structure
          fires automatically — that’s the whole point.
        </Paragraph>
      </DrillBox>
    </LessonSection>
  );
}
