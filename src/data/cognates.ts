import type { PhraseItem } from "../types";

/**
 * English ↔ Romanian cognates for the onboarding flow.
 *
 * The strongest cognates a beginner can decode without any prior Romanian
 * exposure, organised across multiple semantic domains so the recognition
 * win generalises (Pan & Rickard's "varied contexts" finding):
 *
 *   • Concept/abstraction (-ție, -tate suffixes — direct Latin parallels)
 *   • Concrete objects & places
 *   • Adjectives (recognisable across Romance languages)
 *   • Day-one domain words (food, tech, media)
 *
 * 24 entries — enough variety without overwhelming the 90-second slot.
 */
export const ONBOARDING_COGNATES: readonly PhraseItem[] = [
  // Concepts & abstractions — recognisable suffix patterns
  { ro: "informație",    en: "information" },
  { ro: "televiziune",   en: "television" },
  { ro: "universitate",  en: "university" },
  { ro: "comunicație",   en: "communication" },
  { ro: "conversație",   en: "conversation" },
  { ro: "naționalitate", en: "nationality" },

  // Concrete objects & places
  { ro: "restaurant",    en: "restaurant" },
  { ro: "telefon",       en: "telephone" },
  { ro: "hotel",         en: "hotel" },
  { ro: "aeroport",      en: "airport" },
  { ro: "bancă",         en: "bank" },
  { ro: "supermarket",   en: "supermarket" },

  // Adjectives — recognisable across Romance languages
  { ro: "important",     en: "important" },
  { ro: "interesant",    en: "interesting" },
  { ro: "modern",        en: "modern" },
  { ro: "natural",       en: "natural" },
  { ro: "fantastic",     en: "fantastic" },
  { ro: "perfect",       en: "perfect" },

  // Day-one domain words
  { ro: "muzică",        en: "music" },
  { ro: "film",          en: "film / movie" },
  { ro: "cafea",         en: "coffee" },
  { ro: "salată",        en: "salad" },
  { ro: "doctor",        en: "doctor" },
  { ro: "internet",      en: "internet" },
];
