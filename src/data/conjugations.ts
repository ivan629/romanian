/**
 * Verb conjugation tables for Romanian.
 *
 * Each verb is fully described by:
 *   • present[6]    — inflected present indicative for [eu, tu, el, noi, voi, ei]
 *   • participle    — past participle (used with am/ai/a/am/ați/au for past tense)
 *   • subjunctive[6]— subjunctive forms (used with "o să" for colloquial future)
 *   • enBase / enThirdSing / enPast — English forms for translation generation
 *
 * Past (perfect compus) and colloquial future are derived mechanically by
 * `lib/conjugate.ts` — the templates are universal across all verbs.
 *
 * Tier reflects approximate frequency; the universal-matrix verb picker can
 * group verbs by tier so users start with the most common.
 */

export interface VerbConjugation {
  readonly infinitive: string;
  readonly meaning: string;
  readonly enBase: string;
  readonly enThirdSing: string;
  readonly enPast: string;
  readonly present: readonly [string, string, string, string, string, string];
  readonly participle: string;
  readonly subjunctive: readonly [string, string, string, string, string, string];
  readonly tier: 1 | 2 | 3;
}

export const CONJUGATIONS: readonly VerbConjugation[] = [
  // ─── Tier 1 — auxiliaries, modals, sensories ────────────────────
  { infinitive: "a fi",     meaning: "to be",          enBase: "be",         enThirdSing: "is",         enPast: "was",
    present: ["sunt", "ești", "este", "suntem", "sunteți", "sunt"],
    participle: "fost",
    subjunctive: ["fiu", "fii", "fie", "fim", "fiți", "fie"],
    tier: 1 },

  { infinitive: "a avea",   meaning: "to have",        enBase: "have",       enThirdSing: "has",        enPast: "had",
    present: ["am", "ai", "are", "avem", "aveți", "au"],
    participle: "avut",
    subjunctive: ["am", "ai", "aibă", "avem", "aveți", "aibă"],
    tier: 1 },

  { infinitive: "a face",   meaning: "to do / make",   enBase: "do",         enThirdSing: "does",       enPast: "did",
    present: ["fac", "faci", "face", "facem", "faceți", "fac"],
    participle: "făcut",
    subjunctive: ["fac", "faci", "facă", "facem", "faceți", "facă"],
    tier: 1 },

  { infinitive: "a merge",  meaning: "to go",          enBase: "go",         enThirdSing: "goes",       enPast: "went",
    present: ["merg", "mergi", "merge", "mergem", "mergeți", "merg"],
    participle: "mers",
    subjunctive: ["merg", "mergi", "meargă", "mergem", "mergeți", "meargă"],
    tier: 1 },

  { infinitive: "a veni",   meaning: "to come",        enBase: "come",       enThirdSing: "comes",      enPast: "came",
    present: ["vin", "vii", "vine", "venim", "veniți", "vin"],
    participle: "venit",
    subjunctive: ["vin", "vii", "vină", "venim", "veniți", "vină"],
    tier: 1 },

  { infinitive: "a vorbi",  meaning: "to speak",       enBase: "speak",      enThirdSing: "speaks",     enPast: "spoke",
    present: ["vorbesc", "vorbești", "vorbește", "vorbim", "vorbiți", "vorbesc"],
    participle: "vorbit",
    subjunctive: ["vorbesc", "vorbești", "vorbească", "vorbim", "vorbiți", "vorbească"],
    tier: 1 },

  { infinitive: "a vrea",   meaning: "to want",        enBase: "want",       enThirdSing: "wants",      enPast: "wanted",
    present: ["vreau", "vrei", "vrea", "vrem", "vreți", "vor"],
    participle: "vrut",
    subjunctive: ["vreau", "vrei", "vrea", "vrem", "vreți", "vrea"],
    tier: 1 },

  { infinitive: "a putea",  meaning: "can / be able",  enBase: "be able to", enThirdSing: "is able to", enPast: "could",
    present: ["pot", "poți", "poate", "putem", "puteți", "pot"],
    participle: "putut",
    subjunctive: ["pot", "poți", "poată", "putem", "puteți", "poată"],
    tier: 1 },

  { infinitive: "a ști",    meaning: "to know (a fact)", enBase: "know",     enThirdSing: "knows",      enPast: "knew",
    present: ["știu", "știi", "știe", "știm", "știți", "știu"],
    participle: "știut",
    subjunctive: ["știu", "știi", "știe", "știm", "știți", "știe"],
    tier: 1 },

  { infinitive: "a vedea",  meaning: "to see",         enBase: "see",        enThirdSing: "sees",       enPast: "saw",
    present: ["văd", "vezi", "vede", "vedem", "vedeți", "văd"],
    participle: "văzut",
    subjunctive: ["văd", "vezi", "vadă", "vedem", "vedeți", "vadă"],
    tier: 1 },

  { infinitive: "a da",     meaning: "to give",        enBase: "give",       enThirdSing: "gives",      enPast: "gave",
    present: ["dau", "dai", "dă", "dăm", "dați", "dau"],
    participle: "dat",
    subjunctive: ["dau", "dai", "dea", "dăm", "dați", "dea"],
    tier: 1 },

  { infinitive: "a lua",    meaning: "to take",        enBase: "take",       enThirdSing: "takes",      enPast: "took",
    present: ["iau", "iei", "ia", "luăm", "luați", "iau"],
    participle: "luat",
    subjunctive: ["iau", "iei", "ia", "luăm", "luați", "ia"],
    tier: 1 },

  // ─── Tier 2 — high-frequency content verbs ────────────────────
  { infinitive: "a lucra",  meaning: "to work",        enBase: "work",       enThirdSing: "works",      enPast: "worked",
    present: ["lucrez", "lucrezi", "lucrează", "lucrăm", "lucrați", "lucrează"],
    participle: "lucrat",
    subjunctive: ["lucrez", "lucrezi", "lucreze", "lucrăm", "lucrați", "lucreze"],
    tier: 2 },

  { infinitive: "a locui",  meaning: "to live (reside)", enBase: "live",     enThirdSing: "lives",      enPast: "lived",
    present: ["locuiesc", "locuiești", "locuiește", "locuim", "locuiți", "locuiesc"],
    participle: "locuit",
    subjunctive: ["locuiesc", "locuiești", "locuiască", "locuim", "locuiți", "locuiască"],
    tier: 2 },

  { infinitive: "a mânca",  meaning: "to eat",         enBase: "eat",        enThirdSing: "eats",       enPast: "ate",
    present: ["mănânc", "mănânci", "mănâncă", "mâncăm", "mâncați", "mănâncă"],
    participle: "mâncat",
    subjunctive: ["mănânc", "mănânci", "mănânce", "mâncăm", "mâncați", "mănânce"],
    tier: 2 },

  { infinitive: "a bea",    meaning: "to drink",       enBase: "drink",      enThirdSing: "drinks",     enPast: "drank",
    present: ["beau", "bei", "bea", "bem", "beți", "beau"],
    participle: "băut",
    subjunctive: ["beau", "bei", "bea", "bem", "beți", "bea"],
    tier: 2 },

  { infinitive: "a citi",   meaning: "to read",        enBase: "read",       enThirdSing: "reads",      enPast: "read",
    present: ["citesc", "citești", "citește", "citim", "citiți", "citesc"],
    participle: "citit",
    subjunctive: ["citesc", "citești", "citească", "citim", "citiți", "citească"],
    tier: 2 },

  { infinitive: "a dormi",  meaning: "to sleep",       enBase: "sleep",      enThirdSing: "sleeps",     enPast: "slept",
    present: ["dorm", "dormi", "doarme", "dormim", "dormiți", "dorm"],
    participle: "dormit",
    subjunctive: ["dorm", "dormi", "doarmă", "dormim", "dormiți", "doarmă"],
    tier: 2 },

  { infinitive: "a spune",  meaning: "to say / tell",  enBase: "say",        enThirdSing: "says",       enPast: "said",
    present: ["spun", "spui", "spune", "spunem", "spuneți", "spun"],
    participle: "spus",
    subjunctive: ["spun", "spui", "spună", "spunem", "spuneți", "spună"],
    tier: 2 },

  { infinitive: "a pleca",  meaning: "to leave",       enBase: "leave",      enThirdSing: "leaves",     enPast: "left",
    present: ["plec", "pleci", "pleacă", "plecăm", "plecați", "pleacă"],
    participle: "plecat",
    subjunctive: ["plec", "pleci", "plece", "plecăm", "plecați", "plece"],
    tier: 2 },

  { infinitive: "a sta",    meaning: "to stay / sit",  enBase: "stay",       enThirdSing: "stays",      enPast: "stayed",
    present: ["stau", "stai", "stă", "stăm", "stați", "stau"],
    participle: "stat",
    subjunctive: ["stau", "stai", "stea", "stăm", "stați", "stea"],
    tier: 2 },

  { infinitive: "a scrie",  meaning: "to write",       enBase: "write",      enThirdSing: "writes",     enPast: "wrote",
    present: ["scriu", "scrii", "scrie", "scriem", "scrieți", "scriu"],
    participle: "scris",
    subjunctive: ["scriu", "scrii", "scrie", "scriem", "scrieți", "scrie"],
    tier: 2 },

  { infinitive: "a înțelege", meaning: "to understand", enBase: "understand", enThirdSing: "understands", enPast: "understood",
    present: ["înțeleg", "înțelegi", "înțelege", "înțelegem", "înțelegeți", "înțeleg"],
    participle: "înțeles",
    subjunctive: ["înțeleg", "înțelegi", "înțeleagă", "înțelegem", "înțelegeți", "înțeleagă"],
    tier: 2 },

  { infinitive: "a deschide", meaning: "to open",      enBase: "open",       enThirdSing: "opens",      enPast: "opened",
    present: ["deschid", "deschizi", "deschide", "deschidem", "deschideți", "deschid"],
    participle: "deschis",
    subjunctive: ["deschid", "deschizi", "deschidă", "deschidem", "deschideți", "deschidă"],
    tier: 2 },

  { infinitive: "a închide", meaning: "to close",      enBase: "close",      enThirdSing: "closes",     enPast: "closed",
    present: ["închid", "închizi", "închide", "închidem", "închideți", "închid"],
    participle: "închis",
    subjunctive: ["închid", "închizi", "închidă", "închidem", "închideți", "închidă"],
    tier: 2 },

  { infinitive: "a cumpăra", meaning: "to buy",        enBase: "buy",        enThirdSing: "buys",       enPast: "bought",
    present: ["cumpăr", "cumperi", "cumpără", "cumpărăm", "cumpărați", "cumpără"],
    participle: "cumpărat",
    subjunctive: ["cumpăr", "cumperi", "cumpere", "cumpărăm", "cumpărați", "cumpere"],
    tier: 2 },

  // ─── Tier 3 — moderate-frequency content verbs ────────────────
  { infinitive: "a învăța", meaning: "to learn",       enBase: "learn",      enThirdSing: "learns",     enPast: "learned",
    present: ["învăț", "înveți", "învață", "învățăm", "învățați", "învață"],
    participle: "învățat",
    subjunctive: ["învăț", "înveți", "învețe", "învățăm", "învățați", "învețe"],
    tier: 3 },

  { infinitive: "a chema",  meaning: "to call",        enBase: "call",       enThirdSing: "calls",      enPast: "called",
    present: ["chem", "chemi", "cheamă", "chemăm", "chemați", "cheamă"],
    participle: "chemat",
    subjunctive: ["chem", "chemi", "cheme", "chemăm", "chemați", "cheme"],
    tier: 3 },

  { infinitive: "a asculta", meaning: "to listen",     enBase: "listen",     enThirdSing: "listens",    enPast: "listened",
    present: ["ascult", "asculți", "ascultă", "ascultăm", "ascultați", "ascultă"],
    participle: "ascultat",
    subjunctive: ["ascult", "asculți", "asculte", "ascultăm", "ascultați", "asculte"],
    tier: 3 },

  { infinitive: "a ajunge", meaning: "to arrive",      enBase: "arrive",     enThirdSing: "arrives",    enPast: "arrived",
    present: ["ajung", "ajungi", "ajunge", "ajungem", "ajungeți", "ajung"],
    participle: "ajuns",
    subjunctive: ["ajung", "ajungi", "ajungă", "ajungem", "ajungeți", "ajungă"],
    tier: 3 },

  { infinitive: "a plăti",  meaning: "to pay",         enBase: "pay",        enThirdSing: "pays",       enPast: "paid",
    present: ["plătesc", "plătești", "plătește", "plătim", "plătiți", "plătesc"],
    participle: "plătit",
    subjunctive: ["plătesc", "plătești", "plătească", "plătim", "plătiți", "plătească"],
    tier: 3 },

  { infinitive: "a suna",   meaning: "to phone",       enBase: "phone",      enThirdSing: "phones",     enPast: "phoned",
    present: ["sun", "suni", "sună", "sunăm", "sunați", "sună"],
    participle: "sunat",
    subjunctive: ["sun", "suni", "sune", "sunăm", "sunați", "sune"],
    tier: 3 },
];
