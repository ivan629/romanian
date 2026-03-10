import { Speakable } from "../ui";
import { NAV_LINKS } from "../../data/schedule";

// ─── Nav ───────────────────────────────────────────────────────

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-white/[0.92] backdrop-blur-[16px] border-b border-[var(--border)] h-[50px] flex items-center px-8 gap-8">
      <div className="font-serif font-bold text-[1.05rem] text-[var(--accent)] whitespace-nowrap tracking-tight">
        🇷🇴 Polyglot Romanian
      </div>
      <div className="flex gap-px overflow-x-auto flex-1 scrollbar-hide max-md:hidden">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[var(--ink3)] no-underline text-[0.7rem] font-semibold py-1.5 px-2.5 rounded-md whitespace-nowrap transition-all tracking-wider uppercase hover:text-[var(--accent)] hover:bg-[var(--accentL)]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center py-24 px-8 bg-gradient-to-b from-white to-[var(--bg)]">
      <div className="inline-flex items-center gap-2 text-[0.7rem] font-semibold text-[var(--gold)] uppercase tracking-[0.15em] mb-8 py-2 px-5 bg-[var(--goldL)] border border-[#ede0c4] rounded-full">
        Dmitry Petrov's Polyglot 16 Framework
      </div>
      <h1 className="font-serif text-[clamp(2.8rem,5.5vw,4.2rem)] font-light text-[var(--ink)] leading-[1.15] tracking-tight mb-4">
        Speak <em className="italic font-semibold text-[var(--accent)]">Romanian</em>
        <br />
        in 16 Lessons
      </h1>
      <p className="text-[1.05rem] text-[var(--ink2)] max-w-[560px] mb-10 font-normal leading-[1.7]">
        Every lesson, every matrix, every verb, every phrase. From zero to confident conversation. 500+ words, 32 core verbs, 14 real-life dialogues, and a day-by-day study plan.
      </p>
      <div className="max-w-[520px] text-left p-5 border-l-[3px] border-[var(--gold)] bg-[var(--surface)] rounded-r-lg shadow-[var(--shadow2)]">
        <p className="font-serif italic text-[1rem] text-[var(--ink2)] leading-[1.6]">
          "Freedom before correctness: first learn to speak a foreign language, then learn to speak it correctly."
        </p>
        <cite className="block mt-2 not-italic text-[0.75rem] text-[var(--ink3)] tracking-wider">
          — Dmitry Petrov, polyglot (30+ languages)
        </cite>
      </div>
      <div className="inline-flex items-center gap-1.5 mt-8 py-2 px-4.5 rounded-full bg-[var(--greenL)] border border-[#bddbc9] text-[0.72rem] font-semibold text-[var(--green)] cursor-pointer transition-all hover:bg-[#d8eddd]">
        <Speakable text="Bună ziua! Bine ați venit la cursul de limba română!">
          🔊 Click any Romanian word to hear it
        </Speakable>
      </div>
    </div>
  );
}

// ─── Footer ────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="text-center py-12 px-8 border-t border-[var(--border)] text-[var(--ink3)] text-[0.82rem]">
      <div className="text-[2rem] mb-2">🇷🇴</div>
      <p>
        <b>Polyglot Romanian</b> — 16+ Lessons · 32 Verbs · 500+ Vocabulary · 14 Dialogues
      </p>
      <p className="mt-3 text-[var(--ink4)]">Mult succes!</p>
    </footer>
  );
}
