import { useCallback, useEffect, useRef } from "react";

/**
 * Speech synthesis for Romanian.
 * Uses the browser's built-in `ro-RO` voice when available.
 */
export function useTTS() {
  const activeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    // Trigger voice list load (some browsers need this).
    window.speechSynthesis.getVoices();
    const handler = () => window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = handler;
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  return useCallback((text: string, element?: HTMLElement | null) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const synth = window.speechSynthesis;
    synth.cancel();

    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ro-RO";
    u.rate = 0.85;
    u.pitch = 1;

    const voices = synth.getVoices();
    const ro =
      voices.find((v) => v.lang === "ro-RO") ??
      voices.find((v) => v.lang.startsWith("ro"));
    if (ro) u.voice = ro;

    if (activeRef.current) activeRef.current.classList.remove("playing");
    if (element) {
      element.classList.add("playing");
      activeRef.current = element;
      const clear = () => {
        element.classList.remove("playing");
        if (activeRef.current === element) activeRef.current = null;
      };
      u.onend = clear;
      u.onerror = clear;
    }
    synth.speak(u);
  }, []);
}
