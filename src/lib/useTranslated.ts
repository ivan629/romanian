import { useCallback, useState } from "react";
import { useLanguage } from "../context/Language";
import { translate, getCachedTranslation } from "./translate";

/**
 * Returns:
 *   - `display`: the best string to show right now (synchronous read of cache; falls back to source)
 *   - `trigger`: call when the user is about to see this — fetches translation if missing
 *
 * Designed to fire only on user interaction (hover / focus), so we don't blow
 * through the API quota on initial render of a page that has hundreds of phrases.
 */
export function useTranslated(
  text: string | undefined,
  source: "en" | "ro"
): { display: string | undefined; trigger: () => void } {
  const { lang } = useLanguage();
  const [, force] = useState(0);

  // Read cached value synchronously; this also handles the lang === source case.
  const cached =
    text === undefined ? undefined : getCachedTranslation(text, source, lang);

  const display = cached ?? text;

  const trigger = useCallback(() => {
    if (!text || lang === source) return;
    if (getCachedTranslation(text, source, lang)) return;
    translate(text, source, lang).then(() => {
      // re-render the consuming component once the cache is populated
      force((n) => n + 1);
    });
  }, [text, source, lang]);

  return { display, trigger };
}
