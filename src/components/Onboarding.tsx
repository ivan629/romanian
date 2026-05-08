import { useCallback, useEffect, useState } from "react";
import { useTTS } from "../lib/tts";
import { pronounce } from "../lib/pronounce";
import { ONBOARDING_COGNATES } from "../data/cognates";
import { RO } from "./RO";

/**
 * Five-minute first-contact flow.
 *
 * Goal: get the user to speak a Romanian sentence aloud within 5 minutes of
 * arrival. Research finding (Duolingo's own A/B testing): time-to-first-success
 * in onboarding is the strongest predictor of week-2 retention.
 *
 * The five steps are calibrated to take roughly one minute each:
 *
 *   1. Hook         — promise + cognate spotlight: "you already understand"
 *   2. Cognates     — listen-and-recognise reel (instant comprehension win)
 *   3. First verb   — `eu vorbesc` introduced with audio
 *   4. First cell   — user speaks a sentence aloud, hears it back
 *   5. Reveal       — show the textbook system; offer the start
 *
 * Triggered once per browser via a single localStorage flag. The full
 * textbook material loads in the background; this is purely an entry rite.
 */

const SEEN_KEY = "ro-study-onboarding-seen";

function hasSeenOnboarding(): boolean {
  try {
    return localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markOnboardingSeen(): void {
  try {
    localStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* private browsing / quota — degrade silently */
  }
}

interface OnboardingProps {
  /** Called when the user completes or skips. Parent dismounts the overlay. */
  readonly onComplete: () => void;
}

type Step = 1 | 2 | 3 | 4 | 5;

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState<Step>(1);
  const [step4Revealed, setStep4Revealed] = useState(false);
  const speak = useTTS();

  const next = useCallback(() => {
    setStep((s) => (s < 5 ? ((s + 1) as Step) : s));
  }, []);

  const finish = useCallback(() => {
    markOnboardingSeen();
    onComplete();
  }, [onComplete]);

  const revealStep4 = useCallback(() => {
    setStep4Revealed(true);
    window.setTimeout(() => speak("Eu vorbesc."), 200);
  }, [speak]);

  // Keyboard: Space/Enter advance, Esc skip. Step 4 has a two-stage
  // interaction — first reveal the answer, then advance.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        if (step === 4 && !step4Revealed) {
          revealStep4();
          return;
        }
        if (step < 5) next();
        else finish();
      } else if (e.code === "Escape") {
        finish();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, step4Revealed, next, finish, revealStep4]);

  // Lock body scroll while overlay is up.
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg)] overflow-y-auto">
      <div className="min-h-full flex flex-col">
        <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[var(--border)]">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-3)]">
            5 minutes to your first sentence
          </span>
          <button
            onClick={finish}
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-4)] hover:text-[var(--ink-2)] transition-colors"
          >
            Skip
          </button>
        </header>

        <main className="flex-1 flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-[680px]">
            {step === 1 && <StepHook onNext={next} />}
            {step === 2 && <StepCognates onNext={next} />}
            {step === 3 && <StepFirstVerb onNext={next} />}
            {step === 4 && (
              <StepFirstCell
                onNext={next}
                revealed={step4Revealed}
                onReveal={revealStep4}
              />
            )}
            {step === 5 && <StepReveal onComplete={finish} />}
          </div>
        </main>

        <footer className="px-6 md:px-12 py-5 border-t border-[var(--border)]">
          <StepDots current={step} />
        </footer>
      </div>
    </div>
  );
}

/** Hook for App.tsx — returns whether onboarding should be shown right now. */
export function useShouldShowOnboarding(): [boolean, () => void] {
  const [show, setShow] = useState<boolean>(() => !hasSeenOnboarding());
  const dismiss = useCallback(() => setShow(false), []);
  return [show, dismiss];
}

// ─── Steps ──────────────────────────────────────────────────────

function StepHook({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center fade-in">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--gold)] mb-4">
        Step 1 of 5
      </div>
      <h1 className="font-display text-[2.4rem] md:text-[3.2rem] text-[var(--ink)] tracking-tight leading-[1.05] mb-6">
        You already understand more Romanian than you think.
      </h1>
      <p className="text-[var(--ink-2)] text-[1.05rem] leading-[1.65] max-w-[520px] mx-auto mb-8">
        Five minutes from now, you will have spoken a real Romanian sentence aloud —
        in the past, present, or future, your choice.
      </p>
      <p className="text-[var(--ink-3)] text-[0.95rem] italic mb-10 max-w-[480px] mx-auto">
        No grammar lecture. No vocabulary list. Just the structural skeleton — three tenses,
        three forms, any verb. Master that and you can already say almost anything.
      </p>
      <button
        onClick={onNext}
        className="font-mono text-[12px] uppercase tracking-[0.14em] py-3 px-7 bg-[var(--ink)] text-[var(--surface)] rounded-[var(--radius)] hover:opacity-90 transition-opacity"
      >
        Show me · Space
      </button>
    </div>
  );
}

function StepCognates({ onNext }: { onNext: () => void }) {
  return (
    <div className="fade-in">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--gold)] mb-3 text-center">
        Step 2 of 5 · Free vocabulary
      </div>
      <h2 className="font-display text-[2rem] md:text-[2.4rem] text-[var(--ink)] tracking-tight leading-[1.1] mb-3 text-center">
        Tap each one. Listen. Notice.
      </h2>
      <p className="text-[var(--ink-3)] text-[0.95rem] mb-8 text-center max-w-[480px] mx-auto">
        Romanian is a Romance language. Thousands of words are nearly identical to English.
        You just stole twenty-four of them, free.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
        {ONBOARDING_COGNATES.map((c) => (
          <div
            key={c.ro}
            className="border border-[var(--border)] rounded-[var(--radius)] py-3 px-3 hover:bg-[var(--surface-2)] transition-colors text-center"
          >
            <div className="font-display text-[1.05rem] text-[var(--ink)]">
              <RO text={c.ro} en={c.en} />
            </div>
            <div className="font-mono text-[10px] text-[var(--ink-4)] uppercase tracking-[0.1em] mt-1">
              {c.en}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={onNext}
          className="font-mono text-[12px] uppercase tracking-[0.14em] py-3 px-7 bg-[var(--ink)] text-[var(--surface)] rounded-[var(--radius)] hover:opacity-90 transition-opacity"
        >
          Continue · Space
        </button>
      </div>
    </div>
  );
}

function StepFirstVerb({ onNext }: { onNext: () => void }) {
  return (
    <div className="fade-in text-center">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--gold)] mb-3">
        Step 3 of 5 · Your first verb
      </div>
      <h2 className="font-display text-[2rem] md:text-[2.4rem] text-[var(--ink)] tracking-tight leading-[1.1] mb-8">
        One verb. Three tenses. Already a system.
      </h2>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] py-8 px-6 my-6 shadow-[var(--shadow-1)]">
        <div className="font-display text-[1.6rem] text-[var(--ink)] mb-1">a vorbi</div>
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-3)] mb-8">
          to speak
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[520px] mx-auto">
          {[
            { ro: "Eu o să vorbesc.", en: "I will speak.", label: "Future"  },
            { ro: "Eu vorbesc.",       en: "I speak.",      label: "Present" },
            { ro: "Eu am vorbit.",     en: "I spoke.",      label: "Past"    },
          ].map((row) => (
            <div
              key={row.ro}
              className="border border-[var(--border)] rounded-[var(--radius)] py-4 px-3 hover:bg-[var(--surface-2)] transition-colors"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ink-4)] mb-2">
                {row.label}
              </div>
              <div className="font-display text-[1.05rem] text-[var(--ink)]">
                <RO text={row.ro} en={row.en} />
              </div>
              <div className="font-mono text-[0.8rem] text-[var(--ink-3)] mt-2">
                {pronounce(row.ro)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[var(--ink-3)] text-[0.92rem] italic mb-6 max-w-[480px] mx-auto">
        Notice the pattern. <b>O să</b> for future, the verb alone for present,
        <b> am</b> + participle for past. That's the entire system.
      </p>

      <button
        onClick={onNext}
        className="font-mono text-[12px] uppercase tracking-[0.14em] py-3 px-7 bg-[var(--ink)] text-[var(--surface)] rounded-[var(--radius)] hover:opacity-90 transition-opacity"
      >
        Now you · Space
      </button>
    </div>
  );
}

function StepFirstCell({
  onNext, revealed, onReveal,
}: {
  onNext: () => void;
  revealed: boolean;
  onReveal: () => void;
}) {
  const target = "Eu vorbesc.";
  return (
    <div className="fade-in text-center">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--gold)] mb-3">
        Step 4 of 5 · Your first sentence
      </div>
      <h2 className="font-display text-[2rem] md:text-[2.4rem] text-[var(--ink)] tracking-tight leading-[1.1] mb-3">
        Say it aloud.
      </h2>
      <p className="text-[var(--ink-3)] text-[0.95rem] mb-8 max-w-[440px] mx-auto">
        How would you say <i>"I speak."</i> in Romanian — present tense, eu form?
      </p>

      <div className="my-10">
        {!revealed ? (
          <button
            onClick={onReveal}
            className="font-mono text-[12px] uppercase tracking-[0.14em] py-4 px-9 bg-[var(--ink)] text-[var(--surface)] rounded-[var(--radius)] hover:opacity-90 transition-opacity"
          >
            I said it · reveal
          </button>
        ) : (
          <div className="fade-in">
            <div className="font-display text-[2.4rem] text-[var(--affirm)] tracking-tight mb-2">
              <RO text={target} en="I speak." />
            </div>
            <div className="font-mono text-[0.92rem] text-[var(--ink-3)] mb-3">
              {pronounce(target)}
            </div>
          </div>
        )}
      </div>

      {revealed && (
        <button
          onClick={onNext}
          className="font-mono text-[12px] uppercase tracking-[0.14em] py-3 px-7 bg-[var(--ink)] text-[var(--surface)] rounded-[var(--radius)] hover:opacity-90 transition-opacity fade-in"
        >
          Yes — what's next? · Space
        </button>
      )}
    </div>
  );
}

function StepReveal({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="fade-in text-center">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--gold)] mb-3">
        Step 5 of 5 · The system
      </div>
      <h2 className="font-display text-[2.2rem] md:text-[2.8rem] text-[var(--ink)] tracking-tight leading-[1.05] mb-6">
        You just generated a Romanian sentence.
      </h2>
      <p className="text-[var(--ink-2)] text-[1.05rem] leading-[1.65] max-w-[520px] mx-auto mb-3">
        Three tenses. Three forms. Six subjects. Any verb.
      </p>
      <p className="text-[var(--ink-3)] text-[0.95rem] mb-10 max-w-[480px] mx-auto">
        The textbook ahead of you teaches the system. Lesson 1 — The Matrix — is the
        place to look first. Five minutes a day for thirty days. By Day 30 you can
        ask, state, or deny anything in past, present, or future.
      </p>

      <div className="grid grid-cols-3 gap-2 max-w-[440px] mx-auto mb-10 text-[0.85rem] font-mono">
        {(["Future", "Present", "Past"] as const).map((tense) => (
          <div key={tense} className="border border-[var(--border)] rounded-[var(--radius)] py-3 px-2 bg-[var(--surface-2)]">
            <div className="text-[var(--ink-4)] text-[10px] uppercase tracking-[0.12em] mb-2">{tense}</div>
            <div className="space-y-1 text-[var(--ink-2)] text-[0.78rem]">
              <div className="text-[var(--question)]">? question</div>
              <div className="text-[var(--affirm)]">+ statement</div>
              <div className="text-[var(--neg)]">− negation</div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onComplete}
        className="font-mono text-[12px] uppercase tracking-[0.14em] py-4 px-9 bg-[var(--ink)] text-[var(--surface)] rounded-[var(--radius)] hover:opacity-90 transition-opacity"
      >
        Open the textbook · Space
      </button>
    </div>
  );
}

// ─── Step indicator ─────────────────────────────────────────────

function StepDots({ current }: { current: Step }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          className={`h-[2px] transition-all duration-300 ${
            n === current ? "w-8 bg-[var(--ink)]" : n < current ? "w-3 bg-[var(--ink-3)]" : "w-3 bg-[var(--border)]"
          }`}
        />
      ))}
    </div>
  );
}
