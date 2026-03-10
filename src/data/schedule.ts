import type { PrincipleItem, ScheduleItem } from "../types";

export const PETROV_PRINCIPLES: PrincipleItem[] = [
  { num: "1", title: "Remove the Fear", description: "Romanian is phonetic, Romance-based, full of cognates. The barrier is emotional, not intellectual." },
  { num: "2", title: "Freedom Before Correctness", description: "Speak from minute one. Wrong endings don't matter yet. Communication first, perfection later." },
  { num: "3", title: "The Multiplication Table", description: "Rows = 3 Tenses. Columns = 3 Forms. Master 9 cells → thousands of sentences." },
  { num: "4", title: "Automatism", description: "Drill until structures fire without thinking. Like knowing 7×8 = 56 instantly." },
  { num: "5", title: "High-Frequency Focus", description: "300 words = 90% of speech. 30 verbs = all daily actions. Focus only on these." },
  { num: "6", title: "Contextual Learning", description: "Every word in real sentences. Never isolated flashcards. Always in context." },
  { num: "7", title: "Regularity Over Volume", description: "5 min × 5/day beats 1 hour × 1/week. Short frequent bursts wire the brain." },
];

export const LIBERATING_TRUTHS: PrincipleItem[] = [
  { num: "1", title: "You Already Speak a Language", description: "Your brain already has the machinery. We're just installing new software." },
  { num: "2", title: "Romanian Is Easy for English Speakers", description: "It's Romance (like French, Spanish). Thousands of cognates: informație, situație, televiziune. It's phonetic — no silent letters." },
  { num: "3", title: "Mistakes Are the Method", description: "Wrong Romanian is infinitely better than no Romanian. Every mistake is a micro-lesson." },
];

export const KEY_PATTERNS: PrincipleItem[] = [
  { num: "?", title: "Question", description: "Invert or use rising intonation. Vorbesc eu?" },
  { num: "+", title: "Affirmative", description: "Subject + verb. Eu vorbesc." },
  { num: "−", title: "Negative", description: "Add NU before the verb. Eu nu vorbesc." },
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  { days: "Days 1–2", task: "L0+L1: Warm-up. 5 special characters. Sounds aloud." },
  { days: "Days 3–4", task: "L2: Pronouns + 10 question words. Demonstratives. \"Pe.\"" },
  { days: "Days 5–6", task: "L3: THE MATRIX. Drill 5× daily, 5 min each." },
  { days: "Days 7–8", task: "L4: A fi — all forms until automatic." },
  { days: "Days 9–10", task: "L5: A avea + \"îmi place\" + participles." },
  { days: "Days 11–13", task: "L6: 32 verbs. Drill 10/day through matrix." },
  { days: "Days 14–15", task: "L7: Articles + gender + vocative + genitive." },
  { days: "Days 16–17", task: "L8: Adjectives + possessives. Describe 10 things." },
  { days: "Days 18–19", task: "L9: All numbers 0–100. Teens! Days, months, time." },
  { days: "Days 20–21", task: "L10–11: Prepositions + modals + \"Hai să…\"" },
  { days: "Days 22–23", task: "L12: Imperfect. \"Când eram mic…\"" },
  { days: "Days 24–25", task: "L13–14: Commands + subjunctive." },
  { days: "Days 26–28", task: "L15–16: Conditionals, reflexives, fillers, idioms." },
  { days: "Days 29–30", task: "Dialogues: Read all 14 aloud. Both roles." },
  { days: "Days 31–32", task: "Review: Grand Self-Test. Write \"About Me.\" Done!" },
];

export const DAILY_PRACTICE: PrincipleItem[] = [
  { num: "☀️", title: "Morning (5 min)", description: "5 verbs through the 9-cell matrix aloud." },
  { num: "🌤️", title: "Midday (5 min)", description: "Review 20 vocab words in sentences." },
  { num: "🌅", title: "Afternoon (5 min)", description: "Read one dialogue aloud. Both roles." },
  { num: "🌙", title: "Evening (5 min)", description: "Write 5 sentences about your day." },
];

export const NAV_LINKS = [
  { href: "#rules", label: "7 Rules" },
  { href: "#L0", label: "L0 Mindset" },
  { href: "#L1", label: "L1 Sounds" },
  { href: "#L2", label: "L2 Pronouns" },
  { href: "#L3", label: "L3 Matrix" },
  { href: "#L4", label: "L4 A Fi" },
  { href: "#L5", label: "L5 A Avea" },
  { href: "#L6", label: "L6 30 Verbs" },
  { href: "#L7", label: "L7 Articles" },
  { href: "#L8", label: "L8 Adjectives" },
  { href: "#L9", label: "L9 Numbers" },
  { href: "#L10", label: "L10 Prepositions" },
  { href: "#L11", label: "L11 Modals" },
  { href: "#L12", label: "L12 Imperfect" },
  { href: "#L13", label: "L13 Commands" },
  { href: "#L14", label: "L14 Să" },
  { href: "#L15", label: "L15 Conditionals" },
  { href: "#L16", label: "L16 Advanced" },
  { href: "#L17", label: "L17 Review" },
  { href: "#vocab", label: "Vocab" },
  { href: "#dialogues", label: "Dialogues" },
  { href: "#schedule", label: "Schedule" },
];
