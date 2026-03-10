import type { DialogueData } from "../types";

export const DIALOGUES: DialogueData[] = [
  {
    icon: "☕", title: "At a Café",
    lines: [
      { speaker: "A", ro: "Bună ziua! Aș vrea o cafea, vă rog.", en: "I'd like a coffee, please." },
      { speaker: "B", ro: "Cu lapte sau fără?", en: "With milk or without?" },
      { speaker: "A", ro: "Cu puțin lapte. Cât costă?", en: "With a little milk. How much?" },
      { speaker: "B", ro: "Opt lei.", en: "Eight lei." },
      { speaker: "A", ro: "Pot să plătesc cu cardul?", en: "Can I pay by card?" },
      { speaker: "B", ro: "Sigur! Poftiți.", en: "Sure! Here you go." },
    ],
  },
  {
    icon: "👋", title: "Meeting Someone",
    lines: [
      { speaker: "A", ro: "Salut! Mă cheamă Ana. Tu cum te cheamă?", en: "Hi! I'm Ana. What's your name?" },
      { speaker: "B", ro: "Mă cheamă Mihai. Încântat!", en: "I'm Mihai. Nice to meet you!" },
      { speaker: "A", ro: "De unde ești?", en: "Where are you from?" },
      { speaker: "B", ro: "Sunt din Cluj. Dar tu?", en: "I'm from Cluj. You?" },
      { speaker: "A", ro: "Sunt din Anglia. Sunt aici de două săptămâni.", en: "I'm from England. I've been here for two weeks." },
      { speaker: "B", ro: "Ce bine! Îți place România?", en: "Great! Do you like Romania?" },
      { speaker: "A", ro: "Da, îmi place foarte mult! Oamenii sunt foarte prietenoși.", en: "Yes, very much! People are very friendly." },
    ],
  },
  {
    icon: "🗺️", title: "Asking Directions",
    lines: [
      { speaker: "A", ro: "Scuzați-mă, unde este stația de metrou?", en: "Excuse me, where is the metro?" },
      { speaker: "B", ro: "Mergeți drept, apoi la stânga la semafor.", en: "Go straight, then left at the light." },
      { speaker: "A", ro: "Este departe?", en: "Is it far?" },
      { speaker: "B", ro: "Nu, cinci minute pe jos.", en: "No, five minutes on foot." },
      { speaker: "A", ro: "Mulțumesc frumos!", en: "Thank you very much!" },
      { speaker: "B", ro: "Cu plăcere! Drum bun!", en: "You're welcome! Safe travels!" },
    ],
  },
  {
    icon: "🚕", title: "Taking a Taxi",
    lines: [
      { speaker: "A", ro: "Bună! La aeroport, vă rog.", en: "To the airport, please." },
      { speaker: "B", ro: "Cam 30 de minute. Depinde de trafic.", en: "About 30 minutes. Depends on traffic." },
      { speaker: "A", ro: "Cât costă?", en: "How much?" },
      { speaker: "B", ro: "În jur de 50 de lei.", en: "Around 50 lei." },
      { speaker: "A", ro: "Puteți opri aici, vă rog?", en: "Can you stop here, please?" },
    ],
  },
  {
    icon: "🚑", title: "Not Feeling Well",
    lines: [
      { speaker: "A", ro: "Nu mă simt bine. Mă doare capul.", en: "I don't feel well. My head hurts." },
      { speaker: "B", ro: "Trebuie să mergi la doctor. Ai febră?", en: "You need to see a doctor. Do you have a fever?" },
      { speaker: "A", ro: "Nu știu. Unde este cea mai apropiată farmacie?", en: "I don't know. Where's the nearest pharmacy?" },
      { speaker: "B", ro: "Este pe strada următoare, la colț.", en: "It's on the next street, at the corner." },
    ],
  },
  {
    icon: "📞", title: "Phone Call",
    lines: [
      { speaker: "A", ro: "Alo? Bună, sunt Ana.", en: "Hello? Hi, it's Ana." },
      { speaker: "B", ro: "Salut, Ana! Ce faci? N-am mai vorbit de mult.", en: "Hi Ana! How are you? We haven't talked in a while." },
      { speaker: "A", ro: "Bine, mulțumesc. Te sun pentru că vreau să ne vedem.", en: "Good, thanks. I'm calling because I want to meet up." },
      { speaker: "B", ro: "Super! Când ești liberă?", en: "Great! When are you free?" },
      { speaker: "A", ro: "Sâmbătă după-amiază? La cafeneaua din centru?", en: "Saturday afternoon? At the café downtown?" },
      { speaker: "B", ro: "Perfect! Ne vedem atunci!", en: "Perfect! See you then!" },
    ],
  },
  {
    icon: "🍺", title: "At a Party",
    lines: [
      { speaker: "A", ro: "Hai să bem ceva! Ce bei?", en: "Let's have a drink! What do you drink?" },
      { speaker: "B", ro: "O bere, te rog. Noroc!", en: "A beer, please. Cheers!" },
      { speaker: "A", ro: "Noroc! Ce mai faci? Arăți bine!", en: "Cheers! How are you? You look good!" },
      { speaker: "B", ro: "Mulțumesc! Am fost în vacanță în Grecia.", en: "Thanks! I was on vacation in Greece." },
    ],
  },
  {
    icon: "🛒", title: "At the Market",
    lines: [
      { speaker: "A", ro: "Bună ziua! Aș vrea un kilogram de roșii.", en: "I'd like a kilo of tomatoes." },
      { speaker: "B", ro: "Poftiți. Mai doriți ceva?", en: "Here you go. Anything else?" },
      { speaker: "A", ro: "Da, și niște brânză. Cât e tot?", en: "Yes, and some cheese. How much is everything?" },
      { speaker: "B", ro: "Douăzeci și cinci de lei.", en: "Twenty-five lei." },
      { speaker: "A", ro: "Am numai o bancnotă de 50. Aveți rest?", en: "I only have a 50 note. Do you have change?" },
      { speaker: "B", ro: "Da, sigur. Poftiți!", en: "Yes, sure. Here you are!" },
    ],
  },
  {
    icon: "🍽️", title: "At a Restaurant",
    lines: [
      { speaker: "A", ro: "Bună seara! O masă pentru doi, vă rog.", en: "Good evening! A table for two, please." },
      { speaker: "B", ro: "Poftiți meniul. Ce doriți să comandați?", en: "Here's the menu. What would you like to order?" },
      { speaker: "A", ro: "Aș vrea o ciorbă de burtă și mici cu muștar.", en: "I'd like tripe soup and mici with mustard." },
      { speaker: "B", ro: "Doriți și ceva de băut?", en: "Would you like something to drink?" },
      { speaker: "A", ro: "Apă plată, vă rog. Și un pahar de vin roșu.", en: "Still water, please. And a glass of red wine." },
      { speaker: "B", ro: "Imediat! Poftă bună!", en: "Right away! Enjoy your meal!" },
    ],
  },
  {
    icon: "🏨", title: "At a Hotel",
    lines: [
      { speaker: "A", ro: "Bună ziua! Am o rezervare pe numele Popescu.", en: "Hello! I have a reservation under Popescu." },
      { speaker: "B", ro: "Da, camera 305. Micul dejun este inclus.", en: "Yes, room 305. Breakfast is included." },
      { speaker: "A", ro: "La ce oră este micul dejun?", en: "What time is breakfast?" },
      { speaker: "B", ro: "De la șapte la zece. WiFi-ul e gratuit.", en: "From 7 to 10. WiFi is free." },
      { speaker: "A", ro: "Putem avea și prosoape suplimentare?", en: "Can we have extra towels?" },
      { speaker: "B", ro: "Desigur! Le trimit imediat în cameră.", en: "Of course! I'll send them to the room right away." },
    ],
  },
  {
    icon: "🕐", title: "Making Plans",
    lines: [
      { speaker: "A", ro: "Ce faci sâmbătă? Hai să mergem undeva.", en: "What are you doing Saturday? Let's go somewhere." },
      { speaker: "B", ro: "Bună idee! Unde vrei să mergem?", en: "Good idea! Where do you want to go?" },
      { speaker: "A", ro: "La munte. Dacă e vreme bună.", en: "To the mountains. If the weather's good." },
      { speaker: "B", ro: "Perfect! La ce oră plecăm?", en: "Perfect! What time do we leave?" },
      { speaker: "A", ro: "La opt dimineața. Nu uita geaca!", en: "At eight in the morning. Don't forget the jacket!" },
    ],
  },
  {
    icon: "🏦", title: "At the Bank / Exchange",
    lines: [
      { speaker: "A", ro: "Bună ziua! Vreau să schimb bani.", en: "Hello! I want to exchange money." },
      { speaker: "B", ro: "Ce valută aveți?", en: "What currency do you have?" },
      { speaker: "A", ro: "Am euro. Care este cursul de schimb?", en: "I have euros. What's the exchange rate?" },
      { speaker: "B", ro: "Un euro este patru lei și nouăzeci de bani.", en: "One euro is four lei and ninety bani." },
      { speaker: "A", ro: "Bine. Vreau să schimb 200 de euro.", en: "OK. I want to exchange 200 euros." },
      { speaker: "B", ro: "Poftiți. Semnați aici, vă rog.", en: "Here you go. Sign here, please." },
    ],
  },
  {
    icon: "🚨", title: "Emergency / Lost",
    lines: [
      { speaker: "A", ro: "Vă rog, am nevoie de ajutor! Mi-am pierdut portofelul.", en: "Please, I need help! I lost my wallet." },
      { speaker: "B", ro: "Unde l-ați pierdut?", en: "Where did you lose it?" },
      { speaker: "A", ro: "Cred că în metrou. Ce pot să fac?", en: "I think in the metro. What can I do?" },
      { speaker: "B", ro: "Mergeți la secția de poliție. Este pe strada asta, la dreapta.", en: "Go to the police station. It's on this street, to the right." },
      { speaker: "A", ro: "Mulțumesc! Și pot suna la ambasadă?", en: "Thank you! And can I call the embassy?" },
    ],
  },
  {
    icon: "🏡", title: "Renting an Apartment",
    lines: [
      { speaker: "A", ro: "Bună! Am văzut anunțul pentru apartament. Mai e liber?", en: "Hi! I saw the ad for the apartment. Is it still available?" },
      { speaker: "B", ro: "Da, este. Doriți să-l vedeți?", en: "Yes, it is. Would you like to see it?" },
      { speaker: "A", ro: "Da, cât este chiria pe lună?", en: "Yes, how much is the rent per month?" },
      { speaker: "B", ro: "300 de euro. Utilitățile sunt separate.", en: "300 euros. Utilities are separate." },
      { speaker: "A", ro: "Are mobilat? Și internet?", en: "Is it furnished? And internet?" },
      { speaker: "B", ro: "Da, complet mobilat. Internetul este inclus.", en: "Yes, fully furnished. Internet is included." },
    ],
  },
  {
    icon: "🎉", title: "Small Talk at Dinner",
    lines: [
      { speaker: "A", ro: "Ce lucrezi? Ești din București?", en: "What do you do? Are you from Bucharest?" },
      { speaker: "B", ro: "Sunt inginer. Sunt din Brașov, dar locuiesc aici de cinci ani.", en: "I'm an engineer. I'm from Brașov but I've lived here for five years." },
      { speaker: "A", ro: "Ce bine! Eu sunt profesor de engleză.", en: "Nice! I'm an English teacher." },
      { speaker: "B", ro: "De unde înveți românește?", en: "Where are you learning Romanian?" },
      { speaker: "A", ro: "Singur, cu o aplicație. Și cu prietenii mei români.", en: "By myself, with an app. And with my Romanian friends." },
      { speaker: "B", ro: "Vorbești foarte bine! Felicitări!", en: "You speak very well! Congratulations!" },
    ],
  },
  {
    icon: "🚉", title: "Buying a Train Ticket",
    lines: [
      { speaker: "A", ro: "Bună! Un bilet la Brașov, vă rog.", en: "Hi! A ticket to Brașov, please." },
      { speaker: "B", ro: "Dus sau dus-întors?", en: "One way or round trip?" },
      { speaker: "A", ro: "Dus-întors. La ce oră este următorul tren?", en: "Round trip. What time is the next train?" },
      { speaker: "B", ro: "La ora 14:30. Ajungeți la 17:00. Peronul 3.", en: "At 2:30 PM. You arrive at 5:00 PM. Platform 3." },
      { speaker: "A", ro: "Cât costă biletul?", en: "How much is the ticket?" },
      { speaker: "B", ro: "Șaptezeci de lei. Poftiți biletul.", en: "Seventy lei. Here's your ticket." },
    ],
  },
];