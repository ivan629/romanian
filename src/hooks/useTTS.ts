import { useCallback, useEffect, useRef } from "react";

export function useTTS() {
  const activeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () =>
        window.speechSynthesis.getVoices();
    }
  }, []);

  const speak = useCallback((text: string, element?: HTMLElement | null) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ro-RO";
    utterance.rate = 0.82;
    utterance.pitch = 1;

    const voices = window.speechSynthesis.getVoices();
    const roVoice = voices.find((v) => v.lang.startsWith("ro"));
    if (roVoice) utterance.voice = roVoice;

    // Handle active class
    if (activeRef.current) {
      activeRef.current.classList.remove("playing");
    }

    if (element) {
      element.classList.add("playing");
      activeRef.current = element;
      utterance.onend = () => {
        element.classList.remove("playing");
        activeRef.current = null;
      };
      utterance.onerror = () => {
        element.classList.remove("playing");
        activeRef.current = null;
      };
    }

    window.speechSynthesis.speak(utterance);
  }, []);

  return speak;
}
