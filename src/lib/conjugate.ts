import type { MatrixData } from "../types";
import type { VerbConjugation } from "../data/conjugations";

/**
 * Generates a full {3 tenses × 3 forms} MatrixData from a verb conjugation,
 * with all six subject forms inside each cell — and a parallel set of English
 * translations so the existing `<Matrix />` component can show hover tooltips.
 *
 * Romanian generation rules (mechanical, universal across all verbs):
 *
 *   PAST (perfect compus):  am/ai/a/am/ați/au + participle
 *   FUTURE (colloquial):    o să + subjunctive (no pronoun in question/negative)
 *   PRESENT:                inflected verb form (provided in conjugation table)
 */

const PAST_AUX: readonly [string, string, string, string, string, string] =
  ["am", "ai", "a", "am", "ați", "au"];

const PRONOUN: readonly [string, string, string, string, string, string] =
  ["Eu", "Tu", "El", "Noi", "Voi", "Ei"];

const EN_NOM: readonly [string, string, string, string, string, string] =
  ["I", "You", "He", "We", "You", "They"];

const EN_DO: readonly [string, string, string, string, string, string] =
  ["Do I", "Do you", "Does he", "Do we", "Do you", "Do they"];

const EN_DONT: readonly [string, string, string, string, string, string] =
  ["I don't", "You don't", "He doesn't", "We don't", "You don't", "They don't"];

const EN_NOM_LC: readonly [string, string, string, string, string, string] =
  ["I", "you", "he", "we", "you", "they"];

function cap(s: string): string {
  return s.length === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1);
}

export function buildMatrix(verb: VerbConjugation): MatrixData {
  // ─── Romanian rows ──────────────────────────────────────────────
  const futureQ_ro = verb.subjunctive.map((s) => `O să ${s}?`);
  const futureA_ro = verb.subjunctive.map((s, i) => `${PRONOUN[i]} o să ${s}.`);
  const futureN_ro = verb.subjunctive.map((s) => `N-o să ${s}.`);

  const presentQ_ro = verb.present.map((v, i) => `${cap(v)} ${PRONOUN[i].toLowerCase()}?`);
  const presentA_ro = verb.present.map((v, i) => `${PRONOUN[i]} ${v}.`);
  const presentN_ro = verb.present.map((v, i) => `${PRONOUN[i]} nu ${v}.`);

  const pastQ_ro = PAST_AUX.map((aux, i) => `${cap(aux)} ${verb.participle} ${PRONOUN[i].toLowerCase()}?`);
  const pastA_ro = PAST_AUX.map((aux, i) => `${PRONOUN[i]} ${aux} ${verb.participle}.`);
  const pastN_ro = PAST_AUX.map((aux, i) => `${PRONOUN[i]} nu ${aux} ${verb.participle}.`);

  // ─── English translations (hover tooltips) ──────────────────────
  // Future: "Will I speak? / I will speak. / I won't speak."
  const futureQ_en = EN_NOM_LC.map((p) => `Will ${p} ${verb.enBase}?`);
  const futureA_en = EN_NOM.map((p) => `${p} will ${verb.enBase}.`);
  const futureN_en = EN_NOM.map((p) => `${p} won't ${verb.enBase}.`);

  // Present: "Do I speak? / I speak. / I don't speak."
  const presentQ_en = EN_DO.map((d) => `${d} ${verb.enBase}?`);
  const presentA_en = EN_NOM.map((p, i) => {
    const form = i === 2 ? verb.enThirdSing : verb.enBase;  // "He speaks", others use base
    return `${p} ${form}.`;
  });
  const presentN_en = EN_DONT.map((d) => `${d} ${verb.enBase}.`);

  // Past: "Did I speak? / I spoke. / I didn't speak."
  const pastQ_en = EN_NOM_LC.map((p) => `Did ${p} ${verb.enBase}?`);
  const pastA_en = EN_NOM.map((p) => `${p} ${verb.enPast}.`);
  const pastN_en = EN_NOM.map((p) => `${p} didn't ${verb.enBase}.`);

  return {
    title: `${verb.infinitive} — ${verb.meaning} (all six persons)`,
    rows: [
      {
        tenseName: "Future",
        question:    { ro: futureQ_ro,  en: futureQ_en  },
        affirmative: { ro: futureA_ro,  en: futureA_en  },
        negative:    { ro: futureN_ro,  en: futureN_en  },
      },
      {
        tenseName: "Present",
        question:    { ro: presentQ_ro, en: presentQ_en },
        affirmative: { ro: presentA_ro, en: presentA_en },
        negative:    { ro: presentN_ro, en: presentN_en },
      },
      {
        tenseName: "Past",
        question:    { ro: pastQ_ro,    en: pastQ_en    },
        affirmative: { ro: pastA_ro,    en: pastA_en    },
        negative:    { ro: pastN_ro,    en: pastN_en    },
      },
    ],
  };
}
