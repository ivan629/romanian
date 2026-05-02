import { useCallback, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { useTTS } from "../lib/tts";
import { pronounce } from "../lib/pronounce";
import { useTranslated } from "../lib/useTranslated";

interface ROProps {
  /** The Romanian text. Used for TTS, pronunciation, and (if no children) display. */
  text: string;
  /** Optional English meaning — also serves as the canonical source for translation. */
  en?: string;
  /** Optional pronunciation override; otherwise auto-generated. */
  pron?: string;
  /** Optional custom children for display. Defaults to `text`. */
  children?: ReactNode;
  /** Hide the underline / tooltip styling — useful when nesting. */
  bare?: boolean;
  /** What to actually speak, if different from the visible text. */
  speakAs?: string;
  className?: string;
}

/**
 * `<RO />` — wraps Romanian text with:
 *   • dotted underline on hover
 *   • tooltip showing meaning (in selected target language) + pronunciation
 *   • click → TTS
 *
 * Translation is lazy: the first time the user hovers or focuses a phrase,
 * we fetch from MyMemory and cache forever in localStorage.
 */
export function RO({
  text,
  en,
  pron,
  children,
  bare = false,
  speakAs,
  className = "",
}: ROProps) {
  const speak = useTTS();
  const ref = useRef<HTMLSpanElement>(null);
  const [tapped, setTapped] = useState(false);

  // Translation source preference: English meaning if we have it, else the Romanian itself.
  const englishTranslation = useTranslated(en, "en");
  const romanianTranslation = useTranslated(en ? undefined : text, "ro");
  const meaning = en ? englishTranslation.display : romanianTranslation.display;

  const triggerTranslation = useCallback(() => {
    englishTranslation.trigger();
    romanianTranslation.trigger();
  }, [englishTranslation, romanianTranslation]);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      const isTouch = window.matchMedia?.("(hover: none)").matches ?? false;
      if (isTouch && !tapped) {
        setTapped(true);
        setTimeout(() => setTapped(false), 2400);
      }
      triggerTranslation();
      speak(speakAs ?? text, e.currentTarget);
    },
    [speak, text, speakAs, tapped, triggerTranslation]
  );

  if (bare) {
    return (
      <span
        ref={ref}
        onClick={handleClick}
        className={`cursor-pointer ${className}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            speak(speakAs ?? text, ref.current);
          }
        }}
      >
        {children ?? text}
      </span>
    );
  }

  const pronunciation = pron ?? pronounce(text);

  return (
    <span
      ref={ref}
      onClick={handleClick}
      onMouseEnter={triggerTranslation}
      onFocus={triggerTranslation}
      onTouchStart={triggerTranslation}
      className={`ro ${tapped ? "show-tip" : ""} ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          triggerTranslation();
          speak(speakAs ?? text, ref.current);
        }
      }}
      aria-label={meaning ? `${text}, meaning ${meaning}` : text}
    >
      {children ?? text}
      <span className="ro-tip" role="tooltip">
        {meaning && <span className="ro-tip-en">{meaning}</span>}
        {meaning && pronunciation && <span className="ro-tip-divider" />}
        {pronunciation && <span className="ro-tip-pron">{pronunciation}</span>}
      </span>
    </span>
  );
}
