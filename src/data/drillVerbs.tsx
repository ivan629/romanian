import type { DrillVerb } from "../types";

export const DRILL_VERBS: DrillVerb[] = [
    {
        infinitive: "a vorbi", meaning: "to speak",
        conjugations: {
            future: { eu: "o să vorbesc", tu: "o să vorbești", el: "o să vorbească", noi: "o să vorbim", voi: "o să vorbiți", ei: "o să vorbească" },
            present: { eu: "vorbesc", tu: "vorbești", el: "vorbește", noi: "vorbim", voi: "vorbiți", ei: "vorbesc" },
            past: { eu: "am vorbit", tu: "ai vorbit", el: "a vorbit", noi: "am vorbit", voi: "ați vorbit", ei: "au vorbit" },
        },
    },
    {
        infinitive: "a lucra", meaning: "to work",
        conjugations: {
            future: { eu: "o să lucrez", tu: "o să lucrezi", el: "o să lucreze", noi: "o să lucrăm", voi: "o să lucrați", ei: "o să lucreze" },
            present: { eu: "lucrez", tu: "lucrezi", el: "lucrează", noi: "lucrăm", voi: "lucrați", ei: "lucrează" },
            past: { eu: "am lucrat", tu: "ai lucrat", el: "a lucrat", noi: "am lucrat", voi: "ați lucrat", ei: "au lucrat" },
        },
    },
    {
        infinitive: "a face", meaning: "to do / make",
        conjugations: {
            future: { eu: "o să fac", tu: "o să faci", el: "o să facă", noi: "o să facem", voi: "o să faceți", ei: "o să facă" },
            present: { eu: "fac", tu: "faci", el: "face", noi: "facem", voi: "faceți", ei: "fac" },
            past: { eu: "am făcut", tu: "ai făcut", el: "a făcut", noi: "am făcut", voi: "ați făcut", ei: "au făcut" },
        },
    },
    {
        infinitive: "a fi", meaning: "to be",
        conjugations: {
            future: { eu: "o să fiu", tu: "o să fii", el: "o să fie", noi: "o să fim", voi: "o să fiți", ei: "o să fie" },
            present: { eu: "sunt", tu: "ești", el: "este", noi: "suntem", voi: "sunteți", ei: "sunt" },
            past: { eu: "am fost", tu: "ai fost", el: "a fost", noi: "am fost", voi: "ați fost", ei: "au fost" },
        },
    },
    {
        infinitive: "a avea", meaning: "to have",
        conjugations: {
            future: { eu: "o să am", tu: "o să ai", el: "o să aibă", noi: "o să avem", voi: "o să aveți", ei: "o să aibă" },
            present: { eu: "am", tu: "ai", el: "are", noi: "avem", voi: "aveți", ei: "au" },
            past: { eu: "am avut", tu: "ai avut", el: "a avut", noi: "am avut", voi: "ați avut", ei: "au avut" },
        },
    },
    {
        infinitive: "a merge", meaning: "to go",
        conjugations: {
            future: { eu: "o să merg", tu: "o să mergi", el: "o să meargă", noi: "o să mergem", voi: "o să mergeți", ei: "o să meargă" },
            present: { eu: "merg", tu: "mergi", el: "merge", noi: "mergem", voi: "mergeți", ei: "merg" },
            past: { eu: "am mers", tu: "ai mers", el: "a mers", noi: "am mers", voi: "ați mers", ei: "au mers" },
        },
    },
    {
        infinitive: "a veni", meaning: "to come",
        conjugations: {
            future: { eu: "o să vin", tu: "o să vii", el: "o să vină", noi: "o să venim", voi: "o să veniți", ei: "o să vină" },
            present: { eu: "vin", tu: "vii", el: "vine", noi: "venim", voi: "veniți", ei: "vin" },
            past: { eu: "am venit", tu: "ai venit", el: "a venit", noi: "am venit", voi: "ați venit", ei: "au venit" },
        },
    },
    {
        infinitive: "a vrea", meaning: "to want",
        conjugations: {
            future: { eu: "o să vreau", tu: "o să vrei", el: "o să vrea", noi: "o să vrem", voi: "o să vreți", ei: "o să vrea" },
            present: { eu: "vreau", tu: "vrei", el: "vrea", noi: "vrem", voi: "vreți", ei: "vor" },
            past: { eu: "am vrut", tu: "ai vrut", el: "a vrut", noi: "am vrut", voi: "ați vrut", ei: "au vrut" },
        },
    },
    {
        infinitive: "a putea", meaning: "can / to be able",
        conjugations: {
            future: { eu: "o să pot", tu: "o să poți", el: "o să poată", noi: "o să putem", voi: "o să puteți", ei: "o să poată" },
            present: { eu: "pot", tu: "poți", el: "poate", noi: "putem", voi: "puteți", ei: "pot" },
            past: { eu: "am putut", tu: "ai putut", el: "a putut", noi: "am putut", voi: "ați putut", ei: "au putut" },
        },
    },
    {
        infinitive: "a ști", meaning: "to know",
        conjugations: {
            future: { eu: "o să știu", tu: "o să știi", el: "o să știe", noi: "o să știm", voi: "o să știți", ei: "o să știe" },
            present: { eu: "știu", tu: "știi", el: "știe", noi: "știm", voi: "știți", ei: "știu" },
            past: { eu: "am știut", tu: "ai știut", el: "a știut", noi: "am știut", voi: "ați știut", ei: "au știut" },
        },
    },
    {
        infinitive: "a vedea", meaning: "to see",
        conjugations: {
            future: { eu: "o să văd", tu: "o să vezi", el: "o să vadă", noi: "o să vedem", voi: "o să vedeți", ei: "o să vadă" },
            present: { eu: "văd", tu: "vezi", el: "vede", noi: "vedem", voi: "vedeți", ei: "văd" },
            past: { eu: "am văzut", tu: "ai văzut", el: "a văzut", noi: "am văzut", voi: "ați văzut", ei: "au văzut" },
        },
    },
    {
        infinitive: "a da", meaning: "to give",
        conjugations: {
            future: { eu: "o să dau", tu: "o să dai", el: "o să dea", noi: "o să dăm", voi: "o să dați", ei: "o să dea" },
            present: { eu: "dau", tu: "dai", el: "dă", noi: "dăm", voi: "dați", ei: "dau" },
            past: { eu: "am dat", tu: "ai dat", el: "a dat", noi: "am dat", voi: "ați dat", ei: "au dat" },
        },
    },
    {
        infinitive: "a lua", meaning: "to take",
        conjugations: {
            future: { eu: "o să iau", tu: "o să iei", el: "o să ia", noi: "o să luăm", voi: "o să luați", ei: "o să ia" },
            present: { eu: "iau", tu: "iei", el: "ia", noi: "luăm", voi: "luați", ei: "iau" },
            past: { eu: "am luat", tu: "ai luat", el: "a luat", noi: "am luat", voi: "ați luat", ei: "au luat" },
        },
    },
    {
        infinitive: "a mânca", meaning: "to eat",
        conjugations: {
            future: { eu: "o să mănânc", tu: "o să mănânci", el: "o să mănânce", noi: "o să mâncăm", voi: "o să mâncați", ei: "o să mănânce" },
            present: { eu: "mănânc", tu: "mănânci", el: "mănâncă", noi: "mâncăm", voi: "mâncați", ei: "mănâncă" },
            past: { eu: "am mâncat", tu: "ai mâncat", el: "a mâncat", noi: "am mâncat", voi: "ați mâncat", ei: "au mâncat" },
        },
    },
    {
        infinitive: "a bea", meaning: "to drink",
        conjugations: {
            future: { eu: "o să beau", tu: "o să bei", el: "o să bea", noi: "o să bem", voi: "o să beți", ei: "o să bea" },
            present: { eu: "beau", tu: "bei", el: "bea", noi: "bem", voi: "beți", ei: "beau" },
            past: { eu: "am băut", tu: "ai băut", el: "a băut", noi: "am băut", voi: "ați băut", ei: "au băut" },
        },
    },
    {
        infinitive: "a dormi", meaning: "to sleep",
        conjugations: {
            future: { eu: "o să dorm", tu: "o să dormi", el: "o să doarmă", noi: "o să dormim", voi: "o să dormiți", ei: "o să doarmă" },
            present: { eu: "dorm", tu: "dormi", el: "doarme", noi: "dormim", voi: "dormiți", ei: "dorm" },
            past: { eu: "am dormit", tu: "ai dormit", el: "a dormit", noi: "am dormit", voi: "ați dormit", ei: "au dormit" },
        },
    },
    {
        infinitive: "a citi", meaning: "to read",
        conjugations: {
            future: { eu: "o să citesc", tu: "o să citești", el: "o să citească", noi: "o să citim", voi: "o să citiți", ei: "o să citească" },
            present: { eu: "citesc", tu: "citești", el: "citește", noi: "citim", voi: "citiți", ei: "citesc" },
            past: { eu: "am citit", tu: "ai citit", el: "a citit", noi: "am citit", voi: "ați citit", ei: "au citit" },
        },
    },
    {
        infinitive: "a scrie", meaning: "to write",
        conjugations: {
            future: { eu: "o să scriu", tu: "o să scrii", el: "o să scrie", noi: "o să scriem", voi: "o să scrieți", ei: "o să scrie" },
            present: { eu: "scriu", tu: "scrii", el: "scrie", noi: "scriem", voi: "scrieți", ei: "scriu" },
            past: { eu: "am scris", tu: "ai scris", el: "a scris", noi: "am scris", voi: "ați scris", ei: "au scris" },
        },
    },
    {
        infinitive: "a locui", meaning: "to live (reside)",
        conjugations: {
            future: { eu: "o să locuiesc", tu: "o să locuiești", el: "o să locuiască", noi: "o să locuim", voi: "o să locuiți", ei: "o să locuiască" },
            present: { eu: "locuiesc", tu: "locuiești", el: "locuiește", noi: "locuim", voi: "locuiți", ei: "locuiesc" },
            past: { eu: "am locuit", tu: "ai locuit", el: "a locuit", noi: "am locuit", voi: "ați locuit", ei: "au locuit" },
        },
    },
    {
        infinitive: "a înțelege", meaning: "to understand",
        conjugations: {
            future: { eu: "o să înțeleg", tu: "o să înțelegi", el: "o să înțeleagă", noi: "o să înțelegem", voi: "o să înțelegeți", ei: "o să înțeleagă" },
            present: { eu: "înțeleg", tu: "înțelegi", el: "înțelege", noi: "înțelegem", voi: "înțelegeți", ei: "înțeleg" },
            past: { eu: "am înțeles", tu: "ai înțeles", el: "a înțeles", noi: "am înțeles", voi: "ați înțeles", ei: "au înțeles" },
        },
    },
    {
        infinitive: "a cumpăra", meaning: "to buy",
        conjugations: {
            future: { eu: "o să cumpăr", tu: "o să cumperi", el: "o să cumpere", noi: "o să cumpărăm", voi: "o să cumpărați", ei: "o să cumpere" },
            present: { eu: "cumpăr", tu: "cumperi", el: "cumpără", noi: "cumpărăm", voi: "cumpărați", ei: "cumpără" },
            past: { eu: "am cumpărat", tu: "ai cumpărat", el: "a cumpărat", noi: "am cumpărat", voi: "ați cumpărat", ei: "au cumpărat" },
        },
    },
    {
        infinitive: "a pleca", meaning: "to leave",
        conjugations: {
            future: { eu: "o să plec", tu: "o să pleci", el: "o să plece", noi: "o să plecăm", voi: "o să plecați", ei: "o să plece" },
            present: { eu: "plec", tu: "pleci", el: "pleacă", noi: "plecăm", voi: "plecați", ei: "pleacă" },
            past: { eu: "am plecat", tu: "ai plecat", el: "a plecat", noi: "am plecat", voi: "ați plecat", ei: "au plecat" },
        },
    },
    {
        infinitive: "a sta", meaning: "to stay / sit",
        conjugations: {
            future: { eu: "o să stau", tu: "o să stai", el: "o să stea", noi: "o să stăm", voi: "o să stați", ei: "o să stea" },
            present: { eu: "stau", tu: "stai", el: "stă", noi: "stăm", voi: "stați", ei: "stau" },
            past: { eu: "am stat", tu: "ai stat", el: "a stat", noi: "am stat", voi: "ați stat", ei: "au stat" },
        },
    },
    {
        infinitive: "a învăța", meaning: "to learn / teach",
        conjugations: {
            future: { eu: "o să învăț", tu: "o să înveți", el: "o să învețe", noi: "o să învățăm", voi: "o să învățați", ei: "o să învețe" },
            present: { eu: "învăț", tu: "înveți", el: "învață", noi: "învățăm", voi: "învățați", ei: "învață" },
            past: { eu: "am învățat", tu: "ai învățat", el: "a învățat", noi: "am învățat", voi: "ați învățat", ei: "au învățat" },
        },
    },
    {
        infinitive: "a plăti", meaning: "to pay",
        conjugations: {
            future: { eu: "o să plătesc", tu: "o să plătești", el: "o să plătească", noi: "o să plătim", voi: "o să plătiți", ei: "o să plătească" },
            present: { eu: "plătesc", tu: "plătești", el: "plătește", noi: "plătim", voi: "plătiți", ei: "plătesc" },
            past: { eu: "am plătit", tu: "ai plătit", el: "a plătit", noi: "am plătit", voi: "ați plătit", ei: "au plătit" },
        },
    },
    {
        infinitive: "a deschide", meaning: "to open",
        conjugations: {
            future: { eu: "o să deschid", tu: "o să deschizi", el: "o să deschidă", noi: "o să deschidem", voi: "o să deschideți", ei: "o să deschidă" },
            present: { eu: "deschid", tu: "deschizi", el: "deschide", noi: "deschidem", voi: "deschideți", ei: "deschid" },
            past: { eu: "am deschis", tu: "ai deschis", el: "a deschis", noi: "am deschis", voi: "ați deschis", ei: "au deschis" },
        },
    },
    {
        infinitive: "a închide", meaning: "to close",
        conjugations: {
            future: { eu: "o să închid", tu: "o să închizi", el: "o să închidă", noi: "o să închidem", voi: "o să închideți", ei: "o să închidă" },
            present: { eu: "închid", tu: "închizi", el: "închide", noi: "închidem", voi: "închideți", ei: "închid" },
            past: { eu: "am închis", tu: "ai închis", el: "a închis", noi: "am închis", voi: "ați închis", ei: "au închis" },
        },
    },
    {
        infinitive: "a spune", meaning: "to say / tell",
        conjugations: {
            future: { eu: "o să spun", tu: "o să spui", el: "o să spună", noi: "o să spunem", voi: "o să spuneți", ei: "o să spună" },
            present: { eu: "spun", tu: "spui", el: "spune", noi: "spunem", voi: "spuneți", ei: "spun" },
            past: { eu: "am spus", tu: "ai spus", el: "a spus", noi: "am spus", voi: "ați spus", ei: "au spus" },
        },
    },
    {
        infinitive: "a ajunge", meaning: "to arrive",
        conjugations: {
            future: { eu: "o să ajung", tu: "o să ajungi", el: "o să ajungă", noi: "o să ajungem", voi: "o să ajungeți", ei: "o să ajungă" },
            present: { eu: "ajung", tu: "ajungi", el: "ajunge", noi: "ajungem", voi: "ajungeți", ei: "ajung" },
            past: { eu: "am ajuns", tu: "ai ajuns", el: "a ajuns", noi: "am ajuns", voi: "ați ajuns", ei: "au ajuns" },
        },
    },
    {
        infinitive: "a chema", meaning: "to call / be named",
        conjugations: {
            future: { eu: "o să chem", tu: "o să chemi", el: "o să cheme", noi: "o să chemăm", voi: "o să chemați", ei: "o să cheme" },
            present: { eu: "chem", tu: "chemi", el: "cheamă", noi: "chemăm", voi: "chemați", ei: "cheamă" },
            past: { eu: "am chemat", tu: "ai chemat", el: "a chemat", noi: "am chemat", voi: "ați chemat", ei: "au chemat" },
        },
    },
    {
        infinitive: "a suna", meaning: "to call (phone)",
        conjugations: {
            future: { eu: "o să sun", tu: "o să suni", el: "o să sune", noi: "o să sunăm", voi: "o să sunați", ei: "o să sune" },
            present: { eu: "sun", tu: "suni", el: "sună", noi: "sunăm", voi: "sunați", ei: "sună" },
            past: { eu: "am sunat", tu: "ai sunat", el: "a sunat", noi: "am sunat", voi: "ați sunat", ei: "au sunat" },
        },
    },
    {
        infinitive: "a asculta", meaning: "to listen",
        conjugations: {
            future: { eu: "o să ascult", tu: "o să asculți", el: "o să asculte", noi: "o să ascultăm", voi: "o să ascultați", ei: "o să asculte" },
            present: { eu: "ascult", tu: "asculți", el: "ascultă", noi: "ascultăm", voi: "ascultați", ei: "ascultă" },
            past: { eu: "am ascultat", tu: "ai ascultat", el: "a ascultat", noi: "am ascultat", voi: "ați ascultat", ei: "au ascultat" },
        },
    },
    {
        infinitive: "a iubi", meaning: "to love",
        conjugations: {
            future: { eu: "o să iubesc", tu: "o să iubești", el: "o să iubească", noi: "o să iubim", voi: "o să iubiți", ei: "o să iubească" },
            present: { eu: "iubesc", tu: "iubești", el: "iubește", noi: "iubim", voi: "iubiți", ei: "iubesc" },
            past: { eu: "am iubit", tu: "ai iubit", el: "a iubit", noi: "am iubit", voi: "ați iubit", ei: "au iubit" },
        },
    },
];