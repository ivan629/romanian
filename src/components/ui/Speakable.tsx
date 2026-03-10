import { useCallback, type MouseEvent } from "react";
import { useTTS } from "../../hooks/useTTS";

interface SpeakableProps {
  text: string;
  children?: React.ReactNode;
  className?: string;
  stopPropagation?: boolean;
}

export function Speakable({ text, children, className = "", stopPropagation = false }: SpeakableProps) {
  const speak = useTTS();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      if (stopPropagation) e.stopPropagation();
      speak(text, e.currentTarget);
    },
    [text, speak, stopPropagation]
  );

  return (
    <span
      className={`speakable cursor-pointer inline-flex items-center gap-[3px] rounded-[3px] px-1 -mx-1 transition-all duration-[120ms] hover:bg-[var(--goldL)] ${className}`}
      onClick={handleClick}
    >
      {children ?? text}
    </span>
  );
}
