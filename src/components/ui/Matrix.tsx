import type { MatrixData } from "../../types";
import { Speakable } from "./Speakable";

interface MatrixProps {
  data: MatrixData;
}

function MatrixCellContent({ lines, variant }: { lines: string[]; variant: "q" | "a" | "n" }) {
  const colorMap = { q: "text-[var(--question)]", a: "text-[var(--affirm)]", n: "text-[var(--neg)]" };
  return (
    <div>
      {lines.map((line, i) => (
        <span key={i} className={`block font-mono font-medium text-[0.85rem] leading-[1.8] ${colorMap[variant]}`}>
          <Speakable text={line}>{line}</Speakable>
        </span>
      ))}
    </div>
  );
}

export function Matrix({ data }: MatrixProps) {
  return (
    <div className="my-6">
      <h3 className="font-serif text-[1.2rem] font-medium text-[var(--ink)] mb-3 pb-2 border-b border-[var(--border)]">
        {data.title}
      </h3>
      <div className="rounded-lg overflow-hidden border border-[var(--border2)] shadow-[var(--shadow2)] bg-[var(--surface)] overflow-x-auto">
        <table className="w-full border-collapse text-[0.86rem]">
          <thead>
            <tr>
              <th className="bg-[var(--surface2)] text-[0.68rem] font-bold uppercase tracking-wider text-[var(--ink3)] p-3 border border-[var(--border)] text-left" />
              <th className="bg-[var(--surface2)] text-[0.68rem] font-bold uppercase tracking-wider text-[var(--question)] p-3 border border-[var(--border)] text-center border-b-2 border-b-[var(--questionB)]">
                ❓ Question (?)
              </th>
              <th className="bg-[var(--surface2)] text-[0.68rem] font-bold uppercase tracking-wider text-[var(--affirm)] p-3 border border-[var(--border)] text-center border-b-2 border-b-[var(--affirmB)]">
                ✅ Affirmative (+)
              </th>
              <th className="bg-[var(--surface2)] text-[0.68rem] font-bold uppercase tracking-wider text-[var(--neg)] p-3 border border-[var(--border)] text-center border-b-2 border-b-[var(--negB)]">
                ❌ Negative (−)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i}>
                <td className="font-bold text-[0.72rem] uppercase tracking-wider bg-[var(--surface2)] text-[var(--ink3)] w-[110px] align-middle p-3 border border-[var(--border)]">
                  <span className="block text-[var(--accent)] text-[0.85rem] font-semibold normal-case tracking-normal">
                    {row.tenseName}
                  </span>
                  {row.tenseSub && (
                    <span className="text-[0.65rem] font-medium text-[var(--ink4)] tracking-normal normal-case">
                      {row.tenseSub}
                    </span>
                  )}
                </td>
                <td className="p-3 border border-[var(--border)] align-top bg-[var(--questionL)]">
                  <MatrixCellContent lines={row.question.ro} variant="q" />
                  {row.question.en?.map((e, j) => (
                    <span key={j} className="text-[0.75rem] text-[var(--ink3)] italic block">{e}</span>
                  ))}
                </td>
                <td className="p-3 border border-[var(--border)] align-top bg-[var(--affirmL)]">
                  <MatrixCellContent lines={row.affirmative.ro} variant="a" />
                  {row.affirmative.en?.map((e, j) => (
                    <span key={j} className="text-[0.75rem] text-[var(--ink3)] italic block">{e}</span>
                  ))}
                </td>
                <td className="p-3 border border-[var(--border)] align-top bg-[var(--negL)]">
                  <MatrixCellContent lines={row.negative.ro} variant="n" />
                  {row.negative.en?.map((e, j) => (
                    <span key={j} className="text-[0.75rem] text-[var(--ink3)] italic block">{e}</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
