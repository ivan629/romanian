// ─── Core Entity Types ─────────────────────────────────────────

export interface VerbDefinition {
  infinitive: string;
  meaning: string;
  euForm: string;
  elForm: string;
  participle: string;
}

export interface MatrixCell {
  ro: string[];
  en?: string[];
}

export interface MatrixRow {
  tenseName: string;
  tenseSub?: string;
  question: MatrixCell;
  affirmative: MatrixCell;
  negative: MatrixCell;
}

export interface MatrixData {
  title: string;
  subtitle?: string;
  rows: MatrixRow[];
}

export interface PhraseItem {
  ro: string;
  en: string;
}

export interface SoundItem {
  symbol: string;
  description: string;
  pronunciation: string;
  example: string;
  exampleWord: string;
}

export interface VocabItem {
  ro: string;
  en: string;
}

export interface VocabSection {
  icon: string;
  label: string;
  items: VocabItem[];
}

export interface NumberItem {
  num: number | string;
  word: string;
}

export interface DialogueLine {
  speaker: "A" | "B";
  ro: string;
  en: string;
}

export interface DialogueData {
  icon: string;
  title: string;
  lines: DialogueLine[];
}

export interface TestItem {
  question: string;
  answer: string;
}

export interface TableColumn {
  header: string;
  key: string;
  highlight?: boolean;
  speakable?: boolean;
}

export interface TableRow {
  [key: string]: string;
}

export interface PrincipleItem {
  num: string;
  title: string;
  description: string;
}

export interface ScheduleItem {
  days: string;
  task: string;
}

export interface FillerItem {
  word: string;
  meaning: string;
  example: string;
}

export interface ContrastColumn {
  type: "yes" | "no";
  title: string;
  items: string[];
}

// ─── Box Variants ──────────────────────────────────────────────

export type BoxVariant = "blue" | "gold" | "orange" | "teal";

// ─── Lesson Meta ───────────────────────────────────────────────

export interface LessonMeta {
  id: string;
  num: string;
  tag: string;
  title: string;
}

export interface DrillVerb {
  infinitive: string;
  meaning: string;
  conjugations: {
    future: { eu: string; tu: string; el: string; noi: string; voi: string; ei: string };
    present: { eu: string; tu: string; el: string; noi: string; voi: string; ei: string };
    past: { eu: string; tu: string; el: string; noi: string; voi: string; ei: string };
  };
}
