import type { VocabSection, PhraseItem } from "../types";

export const VOCAB_SECTIONS: VocabSection[] = [
  {
    icon: "👤",
    label: "People & Family",
    items: [
      { ro: "om", en: "person" }, { ro: "femeie", en: "woman" }, { ro: "bărbat", en: "man" },
      { ro: "copil", en: "child" }, { ro: "prieten", en: "friend(m)" }, { ro: "familie", en: "family" },
      { ro: "mamă", en: "mother" }, { ro: "tată", en: "father" }, { ro: "frate", en: "brother" },
      { ro: "soră", en: "sister" }, { ro: "soț/soție", en: "husband/wife" }, { ro: "bunic/bunică", en: "grandpa/ma" },
    ],
  },
  {
    icon: "🏠",
    label: "Home & Objects",
    items: [
      { ro: "casă", en: "house" }, { ro: "cameră", en: "room" }, { ro: "masă", en: "table" },
      { ro: "pat", en: "bed" }, { ro: "ușă", en: "door" }, { ro: "cheie", en: "key" },
      { ro: "telefon", en: "phone" }, { ro: "apă", en: "water" },
    ],
  },
  {
    icon: "🩺",
    label: "Body & Health",
    items: [
      { ro: "cap", en: "head" }, { ro: "ochi", en: "eye(s)" }, { ro: "nas", en: "nose" },
      { ro: "gură", en: "mouth" }, { ro: "ureche", en: "ear" }, { ro: "mână", en: "hand" },
      { ro: "picior", en: "leg/foot" }, { ro: "inimă", en: "heart" }, { ro: "stomac", en: "stomach" },
      { ro: "spate", en: "back" }, { ro: "dinți", en: "teeth" }, { ro: "deget", en: "finger" },
    ],
  },
  {
    icon: "🍽️",
    label: "Food & Drink",
    items: [
      { ro: "pâine", en: "bread" }, { ro: "carne", en: "meat" }, { ro: "lapte", en: "milk" },
      { ro: "cafea", en: "coffee" }, { ro: "bere", en: "beer" }, { ro: "vin", en: "wine" },
      { ro: "ciorbă", en: "sour soup" }, { ro: "mici", en: "grilled sausages" },
      { ro: "sarmale", en: "cabbage rolls" }, { ro: "brânză", en: "cheese" },
      { ro: "ouă", en: "eggs" }, { ro: "legume", en: "vegetables" },
    ],
  },
  {
    icon: "🏙️",
    label: "City & Travel",
    items: [
      { ro: "oraș", en: "city" }, { ro: "stradă", en: "street" }, { ro: "magazin", en: "store" },
      { ro: "gară", en: "station" }, { ro: "aeroport", en: "airport" }, { ro: "metrou", en: "metro" },
      { ro: "bilet", en: "ticket" }, { ro: "spital", en: "hospital" },
      { ro: "farmacie", en: "pharmacy" }, { ro: "piață", en: "market" },
    ],
  },
];

export const SURVIVAL_PHRASES: PhraseItem[] = [
  { ro: "Bună ziua!", en: "Good day!" },
  { ro: "Mulțumesc!", en: "Thank you!" },
  { ro: "Vă rog.", en: "Please." },
  { ro: "Scuzați-mă.", en: "Excuse me." },
  { ro: "Îmi pare rău.", en: "I'm sorry." },
  { ro: "Cât costă?", en: "How much?" },
  { ro: "Pot să plătesc cu cardul?", en: "Can I pay by card?" },
  { ro: "Nota, vă rog.", en: "The check, please." },
];

export const HEALTH_PHRASES: PhraseItem[] = [
  { ro: "Mă doare capul.", en: "My head hurts." },
  { ro: "Mă doare stomacul.", en: "My stomach hurts." },
  { ro: "Mă dor dinții.", en: "My teeth hurt. (plural = dor!)" },
  { ro: "Am febră.", en: "I have a fever." },
  { ro: "Am nevoie de un doctor.", en: "I need a doctor." },
];

export const ADVERBS: VocabSection["items"] = [
  { ro: "bine", en: "well" }, { ro: "rău", en: "badly" }, { ro: "repede", en: "fast" },
  { ro: "încet", en: "slowly" }, { ro: "mult", en: "much" }, { ro: "puțin", en: "a little" },
  { ro: "foarte", en: "very" }, { ro: "deja", en: "already" }, { ro: "încă", en: "still/yet" },
  { ro: "aproape", en: "almost" },
];

export const COLORS: VocabSection["items"] = [
  { ro: "alb/albă", en: "white" }, { ro: "negru/neagră", en: "black" },
  { ro: "roșu/roșie", en: "red" }, { ro: "albastru", en: "blue" },
  { ro: "verde", en: "green" }, { ro: "galben", en: "yellow" },
];

export const CONJUNCTIONS: VocabSection["items"] = [
  { ro: "și", en: "and" }, { ro: "sau", en: "or" }, { ro: "dar", en: "but" },
  { ro: "pentru că", en: "because" }, { ro: "dacă", en: "if" }, { ro: "că", en: "that" },
  { ro: "deci", en: "so/therefore" }, { ro: "deși", en: "although" },
];

export const TIME_EXPRESSIONS: VocabSection["items"] = [
  { ro: "azi", en: "today" }, { ro: "ieri", en: "yesterday" }, { ro: "mâine", en: "tomorrow" },
  { ro: "acum", en: "now" }, { ro: "întotdeauna", en: "always" }, { ro: "niciodată", en: "never" },
  { ro: "dimineață", en: "morning" }, { ro: "după-amiază", en: "afternoon" },
  { ro: "seară", en: "evening" }, { ro: "noapte", en: "night" },
];

export const DAYS: VocabSection["items"] = [
  { ro: "luni", en: "Monday" }, { ro: "marți", en: "Tuesday" }, { ro: "miercuri", en: "Wednesday" },
  { ro: "joi", en: "Thursday" }, { ro: "vineri", en: "Friday" },
  { ro: "sâmbătă", en: "Saturday" }, { ro: "duminică", en: "Sunday" },
];

export const MONTHS: VocabSection["items"] = [
  { ro: "ianuarie", en: "January" }, { ro: "februarie", en: "February" },
  { ro: "martie", en: "March" }, { ro: "aprilie", en: "April" },
  { ro: "mai", en: "May" }, { ro: "iunie", en: "June" },
  { ro: "iulie", en: "July" }, { ro: "august", en: "August" },
  { ro: "septembrie", en: "September" }, { ro: "octombrie", en: "October" },
  { ro: "noiembrie", en: "November" }, { ro: "decembrie", en: "December" },
];

export const COGNATES: VocabSection["items"] = [
  { ro: "informație", en: "information" }, { ro: "situație", en: "situation" },
  { ro: "educație", en: "education" }, { ro: "televiziune", en: "television" },
  { ro: "natură", en: "nature" }, { ro: "cultură", en: "culture" },
  { ro: "muzică", en: "music" }, { ro: "universitate", en: "university" },
  { ro: "restaurant", en: "restaurant" }, { ro: "hotel", en: "hotel" },
  { ro: "calitate", en: "quality" }, { ro: "apartament", en: "apartment" },
];

export const NOUNS_WITH_ARTICLES: VocabSection["items"] = [
  { ro: "om → omul", en: "man" }, { ro: "femeie → femeia", en: "woman" },
  { ro: "casă → casa", en: "house" }, { ro: "carte → cartea", en: "book" },
  { ro: "copil → copilul", en: "child" }, { ro: "apă → apa", en: "water" },
  { ro: "mașină → mașina", en: "car" }, { ro: "oraș → orașul", en: "city" },
];
