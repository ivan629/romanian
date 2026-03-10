import {
  LessonSection, SectionHeading, InfoBox,
  VocabSectionLabel, VocabGrid, PhraseGrid, DialogueBox,
  ScheduleGrid, PrincipleGrid, Speakable, MonoBlock,
} from "../ui";
import { VOCAB_SECTIONS, SURVIVAL_PHRASES, HEALTH_PHRASES } from "../../data/vocabulary";
import { DIALOGUES } from "../../data/dialogues";
import { SCHEDULE_ITEMS, DAILY_PRACTICE } from "../../data/schedule";

// ─── Vocabulary Section ────────────────────────────────────────

export function VocabularySection() {
  return (
    <LessonSection id="vocab" num="★" tag="Reference" title="500+ Core Vocabulary">
      {VOCAB_SECTIONS.map((section, i) => (
        <div key={i}>
          <VocabSectionLabel icon={section.icon} label={section.label} />
          <VocabGrid items={section.items} />
          {section.label === "Body & Health" && (
            <InfoBox variant="teal" title='Saying "It Hurts"'>
              <MonoBlock>
                {HEALTH_PHRASES.map((p, j) => (
                  <span key={j}>
                    <Speakable text={p.ro}>{p.ro}</Speakable> — {p.en}<br />
                  </span>
                ))}
              </MonoBlock>
            </InfoBox>
          )}
        </div>
      ))}
      <VocabSectionLabel icon="🗣️" label="Survival Phrases" />
      <PhraseGrid items={SURVIVAL_PHRASES} />
    </LessonSection>
  );
}

// ─── Dialogues Section ─────────────────────────────────────────

export function DialoguesSection() {
  return (
    <LessonSection id="dialogues" num="★" tag="Practice" title="14 Mini-Conversations">
      {DIALOGUES.map((d, i) => <DialogueBox key={i} dialogue={d} />)}
    </LessonSection>
  );
}

// ─── Schedule Section ──────────────────────────────────────────

export function ScheduleSection() {
  return (
    <LessonSection id="schedule" num="★" tag="Study Plan" title="32-Day Pacing Schedule">
      <ScheduleGrid items={SCHEDULE_ITEMS} />
      <SectionHeading>Daily Micro-Practice (Forever)</SectionHeading>
      <PrincipleGrid items={DAILY_PRACTICE} />
    </LessonSection>
  );
}

// ─── About Me Template ─────────────────────────────────────────

function Blank({ children }: { children: string }) {
  return (
    <span className="inline-block border-b-2 border-dashed border-[var(--gold)] min-w-[90px] text-[var(--gold)] font-semibold px-1">
      {children}
    </span>
  );
}

export function AboutMeSection() {
  return (
    <LessonSection id="aboutme" num="★" tag="Your First Paragraph" title='"About Me" Template'>
      <div className="bg-gradient-to-br from-[var(--goldL)] to-[var(--purpleL)] border border-[#ede0c4] rounded-lg p-7 my-8">
        <p className="font-mono text-[0.9rem] leading-[2.4] text-[var(--ink)]">
          <Speakable text="Bună! Mă cheamă">Bună! Mă cheamă</Speakable> <Blank>[name]</Blank>. <Speakable text="Am">Am</Speakable> <Blank>[nr]</Blank> <Speakable text="de ani.">de ani.</Speakable><br />
          <Speakable text="Sunt din">Sunt din</Speakable> <Blank>[country]</Blank>. <Speakable text="Locuiesc în">Locuiesc în</Speakable> <Blank>[city]</Blank>.<br />
          <Speakable text="Lucrez ca">Lucrez ca</Speakable> <Blank>[job]</Blank>. <Speakable text="și acum învăț româna.">Și acum învăț româna.</Speakable><br />
          <Speakable text="Îmi place">Îmi place</Speakable> <Blank>[hobby]</Blank>. <Speakable text="România este foarte frumoasă.">România este foarte frumoasă.</Speakable><br />
          <Speakable text="Încântat de cunoștință!">Încântat(ă) de cunoștință!</Speakable>
        </p>
      </div>

      <SectionHeading>Completed Example</SectionHeading>
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 my-5 shadow-[var(--shadow2)]">
        <p className="font-mono text-[0.9rem] leading-[2.4] text-[var(--ink)]">
          <Speakable text="Bună! Mă cheamă Sarah. Am treizeci și doi de ani.">Bună! Mă cheamă Sarah. Am treizeci și doi de ani.</Speakable><br />
          <Speakable text="Sunt din Anglia. Locuiesc în Londra.">Sunt din Anglia. Locuiesc în Londra.</Speakable><br />
          <Speakable text="Lucrez ca profesoară. Și acum învăț româna.">Lucrez ca profesoară. Și acum învăț româna.</Speakable><br />
          <Speakable text="Îmi place muzica și îmi plac cărțile.">Îmi place muzica și îmi plac cărțile.</Speakable><br />
          <Speakable text="Am fost în România vara trecută și mi-a plăcut foarte mult.">Am fost în România vara trecută și mi-a plăcut foarte mult.</Speakable><br />
          <Speakable text="România este foarte frumoasă. Încântată de cunoștință!">România este foarte frumoasă. Încântată de cunoștință!</Speakable>
        </p>
      </div>
      <InfoBox variant="gold" title="Now Write Yours!">
        <p>Replace the blanks with your own information. Read it aloud 3 times. This is your first real paragraph in Romanian.</p>
      </InfoBox>
    </LessonSection>
  );
}
