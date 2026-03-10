import type { DialogueData } from "../types";

export const DIALOGUES: DialogueData[] = [
  {
    icon: "☕", title: "At a Café",
    lines: [
      { speaker: "A", ro: "Bună ziua! Aș vrea o cafea, vă rog.", en: "I'd like a coffee, please." },
      { speaker: "B", ro: "Cu lapte sau fără?", en: "With milk or without?" },
      { speaker: "A", ro: "Cu puțin lapte. Cât costă?", en: "With a little milk. How much?" },
      { speaker: "B", ro: "Opt lei.", en: "Eight lei." },
    ],
  },
  {
    icon: "👋", title: "Meeting Someone",
    lines: [
      { speaker: "A", ro: "Salut! Mă cheamă Ana. Tu cum te cheamă?", en: "Hi! I'm Ana. What's your name?" },
      { speaker: "B", ro: "Mă cheamă Mihai. Încântat!", en: "I'm Mihai. Nice to meet you!" },
      { speaker: "A", ro: "De unde ești?", en: "Where are you from?" },
      { speaker: "B", ro: "Sunt din Cluj. Dar tu?", en: "I'm from Cluj. You?" },
    ],
  },
  {
    icon: "🗺️", title: "Asking Directions",
    lines: [
      { speaker: "A", ro: "Scuzați-mă, unde este stația de metrou?", en: "Excuse me, where is the metro?" },
      { speaker: "B", ro: "Mergeți drept, apoi la stânga la semafor.", en: "Go straight, then left at the light." },
      { speaker: "A", ro: "Este departe?", en: "Is it far?" },
      { speaker: "B", ro: "Nu, cinci minute pe jos.", en: "No, five minutes on foot." },
    ],
  },
  {
    icon: "🚕", title: "Taking a Taxi",
    lines: [
      { speaker: "A", ro: "Bună! La aeroport, vă rog.", en: "To the airport, please." },
      { speaker: "B", ro: "Cam 30 de minute.", en: "About 30 minutes." },
      { speaker: "A", ro: "Cât costă?", en: "How much?" },
      { speaker: "B", ro: "În jur de 50 de lei.", en: "Around 50 lei." },
    ],
  },
  {
    icon: "🚑", title: "Not Feeling Well",
    lines: [
      { speaker: "A", ro: "Nu mă simt bine. Mă doare capul.", en: "I don't feel well. My head hurts." },
      { speaker: "B", ro: "Trebuie să mergi la doctor. Ai febră?", en: "You need to see a doctor. Do you have a fever?" },
      { speaker: "A", ro: "Nu știu. Unde este cea mai apropiată farmacie?", en: "I don't know. Where's the nearest pharmacy?" },
    ],
  },
  {
    icon: "📞", title: "Phone Call",
    lines: [
      { speaker: "A", ro: "Alo? Bună, sunt Ana.", en: "Hello? Hi, it's Ana." },
      { speaker: "B", ro: "Salut! Ce faci? N-am mai vorbit de mult.", en: "Hi! We haven't talked in a while." },
    ],
  },
  {
    icon: "🍺", title: "At a Party",
    lines: [
      { speaker: "A", ro: "Hai să bem ceva! Ce bei?", en: "Let's have a drink! What do you drink?" },
      { speaker: "B", ro: "O bere, te rog. Noroc!", en: "A beer, please. Cheers!" },
    ],
  },
  {
    icon: "🛒", title: "At the Market",
    lines: [
      { speaker: "A", ro: "Bună ziua! Aș vrea un kilogram de roșii.", en: "I'd like a kilo of tomatoes." },
      { speaker: "B", ro: "Poftiți. Mai doriți ceva?", en: "Here you go. Anything else?" },
      { speaker: "A", ro: "Da, și niște brânză. Cât e tot?", en: "Yes, and some cheese. How much is everything?" },
      { speaker: "B", ro: "Douăzeci și cinci de lei.", en: "Twenty-five lei." },
    ],
  },
  {
    icon: "🍽️", title: "At a Restaurant",
    lines: [
      { speaker: "A", ro: "Bună seara! O masă pentru doi, vă rog.", en: "Good evening! A table for two, please." },
      { speaker: "B", ro: "Poftiți meniul. Ce doriți să comandați?", en: "Here's the menu. What would you like to order?" },
      { speaker: "A", ro: "Aș vrea o ciorbă de burtă și mici cu muștar.", en: "I'd like tripe soup and mici with mustard." },
      { speaker: "B", ro: "Doriți și ceva de băut?", en: "Would you like something to drink?" },
      { speaker: "A", ro: "Apă plată, vă rog.", en: "Still water, please." },
    ],
  },
  {
    icon: "🏨", title: "At a Hotel",
    lines: [
      { speaker: "A", ro: "Bună ziua! Am o rezervare pe numele Popescu.", en: "Hello! I have a reservation under Popescu." },
      { speaker: "B", ro: "Da, camera 305. Micul dejun este inclus.", en: "Yes, room 305. Breakfast is included." },
      { speaker: "A", ro: "La ce oră este micul dejun?", en: "What time is breakfast?" },
      { speaker: "B", ro: "De la șapte la zece.", en: "From 7 to 10." },
    ],
  },
  {
    icon: "🕐", title: "Making Plans",
    lines: [
      { speaker: "A", ro: "Ce faci sâmbătă? Hai să mergem undeva.", en: "What are you doing Saturday? Let's go somewhere." },
      { speaker: "B", ro: "Bună idee! Unde vrei să mergem?", en: "Good idea! Where do you want to go?" },
      { speaker: "A", ro: "La munte. Dacă e vreme bună.", en: "To the mountains. If the weather's good." },
    ],
  },
];
