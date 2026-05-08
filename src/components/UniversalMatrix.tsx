import { useMemo, useState } from "react";
import { Matrix } from "./Matrix";
import { CONJUGATIONS, type VerbConjugation } from "../data/conjugations";
import { buildMatrix } from "../lib/conjugate";

/**
 * Universal Matrix — pick any verb from the list, see its full conjugation
 * matrix instantly. Same render pattern as the hand-written full matrices
 * (MATRIX_LUCRA_FULL, MATRIX_FACE_FULL) — no new visual primitives.
 *
 * The picker is grouped by tier so the most common verbs surface first.
 * Default selection: `a vorbi` — the canonical first verb in the textbook.
 */
export function UniversalMatrix({
  defaultVerb = "a vorbi",
}: { readonly defaultVerb?: string }) {
  const [infinitive, setInfinitive] = useState<string>(defaultVerb);

  const verb = useMemo<VerbConjugation>(() => {
    return CONJUGATIONS.find((v) => v.infinitive === infinitive) ?? CONJUGATIONS[0];
  }, [infinitive]);

  const matrixData = useMemo(() => buildMatrix(verb), [verb]);

  return (
    <div>
      <VerbPicker selected={infinitive} onSelect={setInfinitive} />
      <Matrix data={matrixData} />
    </div>
  );
}

// ─── Picker ─────────────────────────────────────────────────────

function VerbPicker({
  selected, onSelect,
}: { readonly selected: string; readonly onSelect: (v: string) => void }) {
  const grouped = useMemo(() => {
    const out: Record<1 | 2 | 3, VerbConjugation[]> = { 1: [], 2: [], 3: [] };
    for (const v of CONJUGATIONS) out[v.tier].push(v);
    return out;
  }, []);

  const TIER_LABEL: Record<1 | 2 | 3, string> = {
    1: "Essential",
    2: "Common",
    3: "Useful",
  };

  return (
    <div className="my-6">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-3)] mb-3">
        Pick a verb
      </div>
      {([1, 2, 3] as const).map((tier) => (
        <div key={tier} className="mb-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ink-4)] mb-2">
            {TIER_LABEL[tier]}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {grouped[tier].map((v) => {
              const active = v.infinitive === selected;
              return (
                <button
                  key={v.infinitive}
                  onClick={() => onSelect(v.infinitive)}
                  className={`font-mono text-[12px] py-1.5 px-3 rounded-[var(--radius)] border transition-colors ${
                    active
                      ? "bg-[var(--ink)] text-[var(--surface)] border-[var(--ink)]"
                      : "border-[var(--border)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]"
                  }`}
                  title={v.meaning}
                >
                  {v.infinitive}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
