import { useLanguage } from "../context/Language";

interface LangOption {
  code: string;
  label: string;
}

/**
 * Tooltip translation targets. Codes are MyMemory-compatible (ISO 639-1
 * with regional suffixes for zh / pt). Labels in each language’s own script
 * so users can spot their language without reading English.
 */
const LANGS: LangOption[] = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "bg", label: "Български" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "hi", label: "हिन्दी" },
  { code: "hu", label: "Magyar" },
  { code: "it", label: "Italiano" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "pt-br", label: "Português" },
  { code: "ru", label: "Русский" },
  { code: "tr", label: "Türkçe" },
  { code: "uk", label: "Українська" },
  { code: "zh-cn", label: "中文" },
];

export function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  return (
    <div>
      <label
        htmlFor="ro-target-lang"
        className="block font-mono text-[9.5px] uppercase tracking-[0.18em] text-[var(--ink-4)] mb-2"
      >
        Translate tooltips
      </label>
      <div className="relative">
        <select
          id="ro-target-lang"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          aria-label="Translate tooltips to"
          className="
            appearance-none w-full bg-[var(--surface)] hover:bg-[var(--surface-2)]
            text-[var(--ink-2)] text-[12.5px] font-medium
            border border-[var(--border)] rounded-md
            py-2 pl-3 pr-8 cursor-pointer transition-colors
            focus:outline-none focus:border-[var(--accent)]
          "
        >
          {LANGS.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--ink-3)]"
        >
          <path
            d="M2 3.5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
