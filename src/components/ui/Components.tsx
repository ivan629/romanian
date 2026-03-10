import { useState, type ReactNode } from "react";
import type {
  BoxVariant, PhraseItem, VocabItem, NumberItem, SoundItem as SoundItemType,
  PrincipleItem, ScheduleItem, FillerItem, TestItem, DialogueData, ContrastColumn,
} from "../../types";
import { Speakable } from "./Speakable";

// ─── InfoBox ───────────────────────────────────────────────────

const BOX_STYLES: Record<BoxVariant, string> = {
  blue: "bg-[var(--accentL)] border-[#c5d8e8] [&_h4]:text-[var(--accent)]",
  gold: "bg-[var(--goldL)] border-[#ede0c4] [&_h4]:text-[var(--gold)]",
  orange: "bg-[#fef7ee] border-[#f5d9b3] [&_h4]:text-[#b45309]",
  teal: "bg-[#edfaf7] border-[#a7e8d8] [&_h4]:text-[#0d7d6c]",
};

export function InfoBox({ variant, title, children }: { variant: BoxVariant; title: string; children: ReactNode }) {
  return (
    <div className={`rounded-lg p-5 my-6 border ${BOX_STYLES[variant]}`}>
      <h4 className="mb-1 text-[0.82rem] font-bold">{title}</h4>
      <div className="text-[0.86rem] text-[var(--ink2)] [&_p]:mb-1">{children}</div>
    </div>
  );
}

// ─── DrillBox ──────────────────────────────────────────────────

export function DrillBox({ title, children, examples }: { title: string; children?: ReactNode; examples?: ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-[#edfaf0] to-[#edf4fa] border border-[#bddbc9] rounded-lg p-6 my-8">
      <h4 className="text-[var(--green)] mb-2 text-[0.88rem] font-bold">{title}</h4>
      {children && <div className="text-[var(--ink2)] text-[0.86rem] mb-1">{children}</div>}
      {examples && (
        <div className="font-mono text-[0.84rem] bg-white/70 p-3 rounded-md my-3 leading-[2] border border-[#d1fae5]">
          {examples}
        </div>
      )}
    </div>
  );
}

// ─── TestBox ───────────────────────────────────────────────────

function TestBoxItem({ item }: { item: TestItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white/85 border border-[#ddd6fe] rounded-md px-3.5 py-2.5 mb-1.5 cursor-pointer transition-all hover:border-[var(--purple)]"
      onClick={() => setOpen(!open)}
    >
      <div className="text-[0.86rem] font-semibold text-[var(--ink)]">{item.question}</div>
      <div
        className={`font-mono text-[0.84rem] text-[var(--purple)] overflow-hidden transition-all duration-300 ${
          open ? "max-h-24 opacity-100 mt-1.5 pt-1.5 border-t border-dashed border-[#ddd6fe]" : "max-h-0 opacity-0"
        }`}
      >
        <Speakable text={item.answer} stopPropagation>{item.answer}</Speakable>
      </div>
      {!open && <div className="text-[0.68rem] text-[var(--ink4)] italic mt-0.5">Click to reveal</div>}
    </div>
  );
}

export function TestBox({ title, items }: { title: string; items: TestItem[] }) {
  return (
    <div className="bg-[var(--purpleL)] border border-[#ddd6fe] rounded-lg p-6 my-8">
      <h4 className="text-[var(--purple)] text-[0.88rem] font-bold mb-4">{title}</h4>
      {items.map((item, i) => <TestBoxItem key={i} item={item} />)}
    </div>
  );
}

// ─── PhraseGrid ────────────────────────────────────────────────

export function PhraseGrid({ items }: { items: PhraseItem[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-2 my-5">
      {items.map((p, i) => (
        <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg py-3 px-4 shadow-[var(--shadow)]">
          <div className="font-mono text-[var(--ink)] font-medium text-[0.86rem] mb-0.5">
            <Speakable text={p.ro}>{p.ro}</Speakable>
          </div>
          <div className="text-[var(--ink3)] text-[0.78rem]">{p.en}</div>
        </div>
      ))}
    </div>
  );
}

// ─── VocabGrid ─────────────────────────────────────────────────

export function VocabGrid({ items }: { items: VocabItem[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-1 mb-6">
      {items.map((v, i) => (
        <div key={i} className="flex justify-between py-1.5 px-2.5 bg-[var(--surface2)] rounded-[5px] text-[0.82rem]">
          <span className="font-mono text-[var(--ink)] font-medium">
            {/* @ts-ignore */ }
            <Speakable text={v.ro?.split("/")[0]?.split("→")[0]?.trim()}>{v.ro}</Speakable>
          </span>
          <span className="text-[var(--ink3)]">{v.en}</span>
        </div>
      ))}
    </div>
  );
}

export function VocabSectionLabel({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="text-[0.72rem] font-bold uppercase tracking-wider text-[var(--accent2)] inline-block bg-[var(--accentL)] py-1 px-3.5 rounded-full mt-6 mb-2">
      {icon} {label}
    </span>
  );
}

// ─── NumberGrid ────────────────────────────────────────────────

export function NumberGrid({ items }: { items: NumberItem[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-1 my-4">
      {items.map((n, i) => (
        <div key={i} className="flex justify-between py-1.5 px-2.5 bg-[var(--surface2)] rounded-[5px] text-[0.82rem]">
          <span className="font-mono text-[var(--gold)] font-bold min-w-[32px]">{n.num}</span>
          <span className="font-mono text-[var(--ink)] font-medium">
            {/* @ts-ignore */ }
            <Speakable text={n.word.split("/")[0]}>{n.word}</Speakable>
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── SoundGrid ─────────────────────────────────────────────────

export function SoundGrid({ items }: { items: SoundItemType[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2 my-4">
      {items.map((s, i) => (
        <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg py-2.5 px-3.5 flex items-center gap-2.5 shadow-[var(--shadow)]">
          <div className="font-mono text-[1.3rem] font-bold text-[var(--accent)] min-w-[36px] text-center">
            {s.symbol.includes("?") || s.symbol.includes("!") ? (
              <Speakable text={s.symbol.replace("?", "").replace("!", "")}>{s.symbol}</Speakable>
            ) : s.symbol}
          </div>
          <div className="text-[0.82rem]">
            <div className="font-semibold text-[var(--ink)]">{s.pronunciation}</div>
            <div className="text-[var(--ink3)] text-[0.78rem]">
              {s.example ? <Speakable text={s.exampleWord}>{s.example}</Speakable> : s.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── DialogueBox ───────────────────────────────────────────────

export function DialogueBox({ dialogue }: { dialogue: DialogueData }) {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 my-6 shadow-[var(--shadow2)]">
      <div className="font-bold text-[var(--accent2)] text-[0.72rem] uppercase tracking-wider mb-3">
        {dialogue.icon} {dialogue.title}
      </div>
      {dialogue.lines.map((line, i) => (
        <div key={i} className="flex gap-2.5 mb-2 text-[0.86rem]">
          <span className={`font-bold min-w-[20px] ${line.speaker === "A" ? "text-[var(--gold)]" : "text-[var(--accent2)]"}`}>
            {line.speaker}:
          </span>
          <div>
            <span className="font-mono text-[var(--ink)] font-medium">
              <Speakable text={line.ro}>{line.ro}</Speakable>
            </span>
            <span className="text-[var(--ink3)] text-[0.76rem] italic block">{line.en}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── PrincipleGrid ─────────────────────────────────────────────

export function PrincipleGrid({ items }: { items: PrincipleItem[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-2.5 my-5">
      {items.map((p, i) => (
        <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-[var(--shadow)]">
          <div className="w-7 h-7 bg-[var(--accent)] text-white font-extrabold rounded-[7px] flex items-center justify-center text-[0.78rem] mb-2">
            {p.num}
          </div>
          <div className="font-bold text-[var(--ink)] mb-0.5 text-[0.92rem]">{p.title}</div>
          <div className="text-[var(--ink2)] text-[0.84rem]">{p.description}</div>
        </div>
      ))}
    </div>
  );
}

// ─── ScheduleGrid ──────────────────────────────────────────────

export function ScheduleGrid({ items }: { items: ScheduleItem[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2 my-4">
      {items.map((s, i) => (
        <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg py-3 px-4 shadow-[var(--shadow)]">
          <div className="font-extrabold text-[var(--accent)] text-[0.7rem] uppercase tracking-wider mb-0.5">{s.days}</div>
          <div className="text-[0.82rem] text-[var(--ink2)]" dangerouslySetInnerHTML={{ __html: s.task.replace(/\*\*(.*?)\*\*/g, '<b class="text-[var(--ink)]">$1</b>') }} />
        </div>
      ))}
    </div>
  );
}

// ─── FillerGrid ────────────────────────────────────────────────

export function FillerGrid({ items }: { items: FillerItem[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2 my-4">
      {items.map((f, i) => (
        <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg py-3 px-3.5 shadow-[var(--shadow)]">
          <div className="font-mono text-[0.95rem] font-bold text-[var(--gold)] mb-px">
            <Speakable text={f.word}>{f.word}</Speakable>
          </div>
          <div className="text-[0.8rem] text-[var(--ink2)] mb-1">{f.meaning}</div>
          <div className="font-mono text-[0.8rem] text-[var(--ink3)]">{f.example}</div>
        </div>
      ))}
    </div>
  );
}

// ─── ContrastBox ───────────────────────────────────────────────

export function ContrastBox({ columns }: { columns: ContrastColumn[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 my-5 max-md:grid-cols-1">
      {columns.map((col, i) => (
        <div
          key={i}
          className={`rounded-lg p-4 ${
            col.type === "yes"
              ? "bg-[var(--affirmL)] border border-[var(--affirmB)]"
              : "bg-[var(--negL)] border border-[var(--negB)]"
          }`}
        >
          <h5 className={`text-[0.7rem] uppercase tracking-wider mb-2 font-bold ${
            col.type === "yes" ? "text-[var(--affirm)]" : "text-[var(--neg)]"
          }`}>
            {col.title}
          </h5>
          <div className="font-mono text-[0.84rem] leading-[1.9]">
            {col.items.map((item, j) => (
              <div key={j}><Speakable text={item}>{item}</Speakable></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── VerbCardGrid ──────────────────────────────────────────────

import type { VerbDefinition } from "../../types";

export function VerbCardGrid({ verbs }: { verbs: VerbDefinition[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-2.5 my-6">
      {verbs.map((v, i) => (
        <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-[var(--shadow)] transition-all hover:border-[var(--border2)] hover:shadow-[var(--shadow2)]">
          <div className="font-serif text-[1.05rem] text-[var(--accent)] font-semibold">
            <Speakable text={v.infinitive}>{v.infinitive}</Speakable>
          </div>
          <div className="text-[0.75rem] text-[var(--ink3)] mb-1.5">{v.meaning}</div>
          <div className="flex justify-between items-baseline py-[3px] border-b border-[var(--border)] text-[0.82rem]">
            <span className="text-[var(--ink3)] font-medium w-12 text-[0.75rem]">eu</span>
            <span className="font-mono font-medium text-[var(--ink)]">
              {/* @ts-ignore */ }
              <Speakable text={v.euForm.split(" ")[v.euForm.split(" ").length > 1 ? 1 : 0]}>{v.euForm}</Speakable>
            </span>
          </div>
          <div className="flex justify-between items-baseline py-[3px] text-[0.82rem]">
            <span className="text-[var(--ink3)] font-medium w-12 text-[0.75rem]">el/ea</span>
            <span className="font-mono font-medium text-[var(--ink)]">
              {/* @ts-ignore */ }
              <Speakable text={v.elForm.split(" ")[0]}>{v.elForm}</Speakable>
            </span>
          </div>
          <span className="inline-block mt-1.5 py-0.5 px-2.5 bg-[var(--goldL)] text-[var(--gold)] rounded font-mono text-[0.72rem] font-semibold">
            {v.participle}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── DataTable ─────────────────────────────────────────────────

interface DataTableProps {
  headers: string[];
  rows: string[][];
  highlightCols?: number[];
  speakableCols?: number[];
}

export function DataTable({ headers, rows, highlightCols = [], speakableCols = [] }: DataTableProps) {
  return (
    <div className="overflow-x-auto my-5 rounded-lg border border-[var(--border)] shadow-[var(--shadow)] bg-[var(--surface)]">
      <table className="w-full border-collapse text-[0.84rem]">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="bg-[var(--surface2)] text-[0.68rem] font-bold uppercase tracking-wider text-[var(--ink3)] py-2.5 px-3.5 border-b border-[var(--border)] text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => {
                const isHighlight = highlightCols.includes(j);
                const isSpeakable = speakableCols.includes(j);
                return (
                  <td key={j} className={`py-2.5 px-3.5 border-b border-[var(--border)] text-left ${isHighlight ? "text-[var(--gold)] font-semibold font-mono" : ""}`}>
                    {isSpeakable ? (
                      <span className="font-mono font-medium text-[var(--ink)]">
                        {/* @ts-ignore */ }
                        <Speakable text={cell.split("→")[0].split("/")[0].trim()}>{cell}</Speakable>
                      </span>
                    ) : (
                      <span className={isHighlight ? "" : j === 0 ? "font-mono text-[var(--ink)]" : "text-[var(--ink3)]"}>
                        {cell}
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── LessonSection ─────────────────────────────────────────────

interface LessonSectionProps {
  id: string;
  num: string;
  tag: string;
  title: string;
  children: ReactNode;
}

export function LessonSection({ id, num, tag, title, children }: LessonSectionProps) {
  return (
    <section id={id} className="mb-20 scroll-mt-16 animate-[fadeUp_0.4s_ease_both]">
      <div className="inline-flex items-center gap-2.5 mb-2">
        <div className="w-7 h-7 rounded-lg bg-[var(--accent)] text-white text-[0.72rem] font-bold flex items-center justify-center">
          {num}
        </div>
        <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--accent2)]">{tag}</span>
      </div>
      <h2 className="font-serif text-[1.75rem] font-normal text-[var(--ink)] tracking-tight mb-2">{title}</h2>
      {children}
    </section>
  );
}

// ─── Section Heading ───────────────────────────────────────────

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-[1.2rem] font-medium text-[var(--ink)] mt-10 mb-3 pb-2 border-b border-[var(--border)]">
      {children}
    </h3>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-[0.78rem] font-bold text-[var(--accent2)] uppercase tracking-wider mt-6 mb-2">
      {children}
    </h4>
  );
}

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-[var(--ink2)] mb-4 max-w-[720px]">{children}</p>;
}

// ─── Mono Block (for inline code/Romanian examples) ────────────

export function MonoBlock({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[0.85rem] leading-[2] mt-1.5">{children}</div>
  );
}

// ─── Psych Box (Lesson 0) ──────────────────────────────────────

export function PsychBox({ title, questions, footer }: { title: string; questions: string[]; footer?: string }) {
  return (
    <div className="bg-gradient-to-br from-[var(--goldL)] to-[#fdf2f6] border border-[#ede0c4] rounded-lg p-7 my-6">
      <h4 className="text-[var(--gold)] text-[0.92rem] font-bold mb-3">{title}</h4>
      {questions.map((q, i) => (
        <div key={i} className="bg-white/65 py-2.5 px-3.5 rounded-md my-1.5 border-l-[3px] border-[var(--gold)] italic text-[var(--ink2)] text-[0.88rem]">
          {q}
        </div>
      ))}
      {footer && <p className="mt-4 font-semibold text-[var(--gold)] text-[0.86rem]">{footer}</p>}
    </div>
  );
}
