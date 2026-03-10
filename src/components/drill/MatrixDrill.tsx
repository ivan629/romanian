import { useState, useCallback, useEffect, useRef } from "react";
import { DRILL_VERBS } from "../../data/drillVerbs";
import { useTTS } from "../../hooks/useTTS";
import type { DrillVerb } from "../../types";

const PRONOUNS = ["eu", "tu", "el", "noi", "voi", "ei"] as const;
type Pronoun = typeof PRONOUNS[number];
const TENSES = ["future", "present", "past"] as const;
type Tense = typeof TENSES[number];
const FORMS = ["affirmative", "negative", "question"] as const;
type Form = typeof FORMS[number];

const TENSE_LABELS: Record<Tense, string> = { future: "Viitor", present: "Prezent", past: "Trecut" };
const FORM_LABELS: Record<Form, string> = { affirmative: "✅ Da", negative: "❌ Nu", question: "❓ Întrebare" };
const FORM_COLORS: Record<Form, string> = {
    affirmative: "bg-[#edf7f0] border-[#bddbc9] text-[#2d6a4f]",
    negative: "bg-[#fdf2f2] border-[#e8c5c5] text-[#9b2c2c]",
    question: "bg-[#edf2f7] border-[#c5d8e8] text-[#2d5f8a]",
};

function getConjugation(verb: DrillVerb, tense: Tense, pronoun: Pronoun): string {
    return verb.conjugations[tense][pronoun];
}

function buildSentence(verb: DrillVerb, tense: Tense, pronoun: Pronoun, form: Form): string {
    const conj = getConjugation(verb, tense, pronoun);
    if (form === "affirmative") {
        return `${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${conj}.`;
    }
    if (form === "negative") {
        if (tense === "future" && conj.startsWith("o să")) {
            return `${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} n-${conj}.`;
        }
        if (tense === "past") {
            return `${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} nu ${conj}.`;
        }
        return `${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} nu ${conj}.`;
    }
    // question
    if (tense === "past") {
        const parts = conj.split(" ");
        return `${parts[0]?.charAt(0).toUpperCase()}${parts[0]?.slice(1)} ${parts.slice(1).join(" ")} ${pronoun}?`;
    }
    return `${conj.charAt(0).toUpperCase() + conj.slice(1)} ${pronoun}?`;
}

type DrillMode = "free" | "sprint" | "random";

export function MatrixDrill() {
    const speak = useTTS();
    const [mode, setMode] = useState<DrillMode>("free");
    const [verbIdx, setVerbIdx] = useState(0);
    const [pronoun, setPronoun] = useState<Pronoun>("eu");
    const [tense, setTense] = useState<Tense>("present");
    const [form, setForm] = useState<Form>("affirmative");
    const [revealed, setRevealed] = useState(false);
    const [sprintStep, setSprintStep] = useState(0);
    const [sprintDone, setSprintDone] = useState(false);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const sentenceRef = useRef<HTMLDivElement>(null);

    const verb = DRILL_VERBS[verbIdx]!;
    const sentence = buildSentence(verb, tense, pronoun, form);

    // Sprint sequence: all 9 cells for current verb
    const SPRINT_SEQ: { tense: Tense; form: Form }[] = [
        { tense: "present", form: "affirmative" },
        { tense: "present", form: "negative" },
        { tense: "present", form: "question" },
        { tense: "past", form: "affirmative" },
        { tense: "past", form: "negative" },
        { tense: "past", form: "question" },
        { tense: "future", form: "affirmative" },
        { tense: "future", form: "negative" },
        { tense: "future", form: "question" },
    ];

    const handleSpeak = useCallback(() => {
        speak(sentence, sentenceRef.current);
    }, [speak, sentence]);

    const nextRandom = useCallback(() => {
        setVerbIdx(Math.floor(Math.random() * DRILL_VERBS.length));
        setPronoun(PRONOUNS[Math.floor(Math.random() * PRONOUNS.length)]!);
        setTense(TENSES[Math.floor(Math.random() * TENSES.length)]!);
        setForm(FORMS[Math.floor(Math.random() * FORMS.length)]!);
        setRevealed(false);
    }, []);

    const nextSprint = useCallback(() => {
        const next = sprintStep + 1;
        if (next >= SPRINT_SEQ.length) {
            setSprintDone(true);
            return;
        }
        setSprintStep(next);
        setTense(SPRINT_SEQ[next]!.tense);
        setForm(SPRINT_SEQ[next]!.form);
        setRevealed(false);
    }, [sprintStep, SPRINT_SEQ]);

    const startSprint = useCallback(() => {
        setSprintStep(0);
        setSprintDone(false);
        setTense(SPRINT_SEQ[0]!.tense);
        setForm(SPRINT_SEQ[0]!.form);
        setRevealed(false);
        setMode("sprint");
    }, [SPRINT_SEQ]);

    const handleReveal = useCallback(() => {
        setRevealed(true);
        speak(sentence, sentenceRef.current);
    }, [speak, sentence]);

    const handleNext = useCallback(() => {
        if (mode === "sprint") nextSprint();
        else if (mode === "random") nextRandom();
    }, [mode, nextSprint, nextRandom]);

    const handleGotIt = useCallback(() => {
        setScore(s => s + 1);
        setTotal(t => t + 1);
        handleNext();
    }, [handleNext]);

    const handleStruggles = useCallback(() => {
        setTotal(t => t + 1);
        handleNext();
    }, [handleNext]);

    // Auto-speak on cell change in free mode
    useEffect(() => {
        if (mode === "free" && sentenceRef.current) {
            speak(sentence, sentenceRef.current);
        }
    }, [tense, form, pronoun, verbIdx, mode]);

    return (
        <div id="drill" className="my-12 scroll-mt-16">
            {/* Header */}
            <div className="inline-flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[var(--accent)] text-white text-[0.72rem] font-bold flex items-center justify-center">⚡</div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--accent2)]">Interactive Practice</span>
            </div>
            <h2 className="font-serif text-[1.75rem] font-normal text-[var(--ink)] tracking-tight mb-2">Matrix Drill Machine</h2>
            <p className="text-[var(--ink2)] mb-6 max-w-[720px]">
                Petrov says: <b>drill each verb through all 9 cells, 20–30 seconds per verb, 5× daily</b>. This tool does exactly that. Pick a verb, pick a mode, and go.
            </p>

            {/* Mode Selector */}
            <div className="flex gap-2 mb-6 flex-wrap">
                {(["free", "sprint", "random"] as DrillMode[]).map(m => (
                    <button
                        key={m}
                        onClick={() => {
                            setMode(m);
                            setRevealed(m === "free");
                            setScore(0);
                            setTotal(0);
                            setSprintDone(false);
                            setSprintStep(0);
                            if (m === "random") nextRandom();
                            if (m === "sprint") {
                                setTense("present");
                                setForm("affirmative");
                            }
                        }}
                        className={`py-2 px-4 rounded-lg text-[0.82rem] font-semibold border transition-all ${
                            mode === m
                                ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-md"
                                : "bg-white text-[var(--ink2)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        }`}
                    >
                        {m === "free" ? "🎹 Free Play" : m === "sprint" ? "⚡ 9-Cell Sprint" : "🎲 Random Test"}
                    </button>
                ))}
            </div>

            {/* Verb Selector */}
            <div className="mb-4">
                <label className="text-[0.72rem] font-bold uppercase tracking-wider text-[var(--ink3)] block mb-1.5">Choose Verb</label>
                <div className="flex gap-1.5 flex-wrap">
                    {DRILL_VERBS.map((v, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setVerbIdx(i);
                                setRevealed(mode === "free");
                                setSprintStep(0);
                                setSprintDone(false);
                                if (mode === "sprint") { setTense("present"); setForm("affirmative"); }
                            }}
                            className={`py-1 px-2.5 rounded-md text-[0.76rem] font-mono border transition-all ${
                                verbIdx === i
                                    ? "bg-[var(--gold)] text-white border-[var(--gold)] font-bold"
                                    : "bg-white text-[var(--ink2)] border-[var(--border)] hover:border-[var(--gold)]"
                            }`}
                        >
                            {v.infinitive}
                        </button>
                    ))}
                </div>
            </div>

            {/* Current Verb Display */}
            <div className="bg-gradient-to-r from-[var(--goldL)] to-[var(--accentL)] border border-[#ede0c4] rounded-xl p-5 mb-4">
                <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-serif text-[1.6rem] font-semibold text-[var(--accent)]">{verb.infinitive}</span>
                    <span className="text-[var(--ink3)] text-[0.88rem]">— {verb.meaning}</span>
                </div>
            </div>

            {/* Pronoun Selector */}
            {mode === "free" && (
                <div className="mb-4">
                    <label className="text-[0.72rem] font-bold uppercase tracking-wider text-[var(--ink3)] block mb-1.5">Pronoun</label>
                    <div className="flex gap-1.5">
                        {PRONOUNS.map(p => (
                            <button
                                key={p}
                                onClick={() => setPronoun(p)}
                                className={`py-1.5 px-3.5 rounded-lg text-[0.84rem] font-mono font-semibold border transition-all ${
                                    pronoun === p
                                        ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                                        : "bg-white text-[var(--ink2)] border-[var(--border)] hover:border-[var(--accent)]"
                                }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* The 9-Cell Grid — Free Mode */}
            {mode === "free" && (
                <div className="rounded-xl overflow-hidden border border-[var(--border2)] shadow-[var(--shadow2)] bg-white mb-6">
                    <table className="w-full border-collapse">
                        <thead>
                        <tr>
                            <th className="bg-[var(--surface2)] p-2.5 border border-[var(--border)] text-[0.68rem] font-bold uppercase tracking-wider text-[var(--ink3)] w-[90px]" />
                            {FORMS.map(f => (
                                <th key={f} className={`p-2.5 border border-[var(--border)] text-[0.72rem] font-bold uppercase tracking-wider ${FORM_COLORS[f]}`}>
                                    {FORM_LABELS[f]}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {TENSES.map(t => (
                            <tr key={t}>
                                <td className="bg-[var(--surface2)] p-2.5 border border-[var(--border)] font-bold text-[0.78rem] text-[var(--accent)]">
                                    {TENSE_LABELS[t]}
                                </td>
                                {FORMS.map(f => {
                                    const s = buildSentence(verb, t, pronoun, f);
                                    const isActive = tense === t && form === f;
                                    return (
                                        <td
                                            key={f}
                                            onClick={() => {
                                                setTense(t);
                                                setForm(f);
                                                speak(s, sentenceRef.current);
                                            }}
                                            className={`p-3 border border-[var(--border)] font-mono text-[0.84rem] cursor-pointer transition-all hover:bg-[var(--goldL)] ${
                                                isActive ? "bg-[var(--goldL)] ring-2 ring-[var(--gold)] ring-inset font-bold" : ""
                                            }`}
                                        >
                                            <span className={`${isActive ? "text-[var(--gold)]" : "text-[var(--ink)]"}`}>{s}</span>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Sprint & Random Mode — Card View */}
            {(mode === "sprint" || mode === "random") && !sprintDone && (
                <div className="mb-6">
                    {mode === "sprint" && (
                        <div className="flex gap-1 mb-4">
                            {SPRINT_SEQ.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-2 flex-1 rounded-full transition-all ${
                                        i < sprintStep ? "bg-[var(--green)]" : i === sprintStep ? "bg-[var(--gold)]" : "bg-[var(--border)]"
                                    }`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Challenge Card */}
                    <div className={`rounded-xl border-2 p-8 text-center ${FORM_COLORS[form]} transition-all`}>
                        <div className="text-[0.72rem] font-bold uppercase tracking-wider opacity-70 mb-1">
                            {TENSE_LABELS[tense]} · {FORM_LABELS[form]} · <span className="text-[var(--accent)]">{pronoun}</span>
                        </div>
                        <div className="font-serif text-[1.4rem] text-[var(--ink)] mb-2">
                            "{verb.meaning}" — <span className="text-[var(--accent)]">{pronoun}</span>
                        </div>
                        <div className="text-[0.82rem] text-[var(--ink3)] mb-4">
                            {form === "affirmative" && `Say: "${pronoun} ___" (${verb.meaning})`}
                            {form === "negative" && `Say: "${pronoun} nu ___" (${verb.meaning})`}
                            {form === "question" && `Ask: "___ ${pronoun}?" (${verb.meaning})`}
                        </div>

                        {!revealed ? (
                            <button
                                onClick={handleReveal}
                                className="py-3 px-8 rounded-xl bg-[var(--accent)] text-white font-bold text-[0.92rem] border-none cursor-pointer transition-all hover:bg-[#152d4a] shadow-lg"
                            >
                                🔊 Reveal & Listen
                            </button>
                        ) : (
                            <div className="animate-[fadeUp_0.3s_ease_both]">
                                <div
                                    ref={sentenceRef}
                                    onClick={handleSpeak}
                                    className="speakable inline-block font-mono text-[1.5rem] font-bold text-[var(--gold)] cursor-pointer py-2 px-4 rounded-lg bg-white/60 mb-4 transition-all hover:bg-[var(--goldL)]"
                                >
                                    {sentence}
                                </div>
                                <div className="flex gap-3 justify-center mt-2">
                                    <button
                                        onClick={handleGotIt}
                                        className="py-2.5 px-6 rounded-lg bg-[var(--green)] text-white font-bold text-[0.86rem] cursor-pointer transition-all hover:bg-[#1e5438]"
                                    >
                                        ✅ Got it!
                                    </button>
                                    <button
                                        onClick={handleStruggles}
                                        className="py-2.5 px-6 rounded-lg bg-[var(--red)] text-white font-bold text-[0.86rem] cursor-pointer transition-all hover:bg-[#7a1f1f]"
                                    >
                                        🔄 Repeat later
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {total > 0 && (
                        <div className="mt-3 text-center text-[0.82rem] text-[var(--ink3)]">
                            Score: <b className="text-[var(--green)]">{score}</b> / {total}
                            {total > 0 && <span className="ml-2">({Math.round((score / total) * 100)}%)</span>}
                        </div>
                    )}
                </div>
            )}

            {/* Sprint Complete */}
            {mode === "sprint" && sprintDone && (
                <div className="rounded-xl border-2 border-[#bddbc9] bg-[#edf7f0] p-8 text-center mb-6">
                    <div className="text-[2.5rem] mb-2">🎉</div>
                    <h3 className="font-serif text-[1.4rem] text-[var(--green)] mb-1">Sprint Complete!</h3>
                    <p className="text-[var(--ink2)] mb-1">
                        <b>{verb.infinitive}</b> — all 9 cells drilled for "{pronoun}"
                    </p>
                    <p className="text-[var(--ink3)] text-[0.86rem] mb-4">
                        Score: <b>{score}</b>/{total} ({total > 0 ? Math.round((score / total) * 100) : 0}%)
                    </p>
                    <div className="flex gap-3 justify-center">
                        <button
                            onClick={() => {
                                const next = (verbIdx + 1) % DRILL_VERBS.length;
                                setVerbIdx(next);
                                startSprint();
                            }}
                            className="py-2.5 px-6 rounded-lg bg-[var(--accent)] text-white font-bold text-[0.86rem] cursor-pointer transition-all hover:bg-[#152d4a]"
                        >
                            ⚡ Next Verb
                        </button>
                        <button
                            onClick={() => { startSprint(); setScore(0); setTotal(0); }}
                            className="py-2.5 px-6 rounded-lg bg-white text-[var(--accent)] font-bold text-[0.86rem] border border-[var(--accent)] cursor-pointer transition-all hover:bg-[var(--accentL)]"
                        >
                            🔄 Repeat This Verb
                        </button>
                    </div>
                </div>
            )}

            {/* Active Sentence Display — Free mode */}
            {mode === "free" && (
                <div className="bg-white border border-[var(--border2)] rounded-xl p-6 text-center shadow-[var(--shadow2)]">
                    <div className="text-[0.72rem] font-bold uppercase tracking-wider text-[var(--ink3)] mb-1">
                        {TENSE_LABELS[tense]} · {FORM_LABELS[form]}
                    </div>
                    <div
                        ref={sentenceRef}
                        onClick={handleSpeak}
                        className="speakable inline-block font-mono text-[1.6rem] font-bold text-[var(--gold)] cursor-pointer py-2 px-4 rounded-lg transition-all hover:bg-[var(--goldL)]"
                    >
                        {sentence}
                    </div>
                    <div className="text-[0.82rem] text-[var(--ink3)] mt-1">Click to hear · Click any cell above</div>
                </div>
            )}

            {/* Drill Tips */}
            <div className="mt-6 bg-gradient-to-br from-[#edfaf0] to-[#edf4fa] border border-[#bddbc9] rounded-lg p-5">
                <h4 className="text-[var(--green)] mb-1.5 text-[0.82rem] font-bold">💡 How to Drill (Petrov Method)</h4>
                <ol className="text-[0.84rem] text-[var(--ink2)] list-decimal pl-4 space-y-1">
                    <li>Pick a verb. Use <b>⚡ Sprint</b> to run through all 9 cells.</li>
                    <li>Say the sentence OUT LOUD before revealing. Then listen and compare.</li>
                    <li>Do <b>5 verbs</b> in one session. Takes ~5 minutes.</li>
                    <li>Repeat <b>5× per day</b>: morning, commute, lunch, afternoon, evening.</li>
                    <li>After 2–3 days, you'll conjugate without thinking. That's <b>automatism</b>.</li>
                </ol>
            </div>
        </div>
    );
}