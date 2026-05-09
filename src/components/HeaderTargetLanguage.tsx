import { useTranslation } from "react-i18next";
import { useTargetLanguage } from "../context/TargetLanguage";

/**
 * Compact target-language chip rendered in the page header (top-right).
 *
 * Shows the currently active learning language with a small grid icon
 * hint. Clicking the chip navigates to the language-picker home page
 * (URL `/`) — the picker is a real route, not a modal.
 *
 * Always visible while the user is inside a language. Even with only one
 * language registered, the chip provides a discoverable way back to the
 * home page (especially on mobile, where the sidebar brand link is
 * collapsed behind the menu toggle).
 */
export function HeaderTargetLanguage() {
  const { t } = useTranslation();
  const { module, goHome } = useTargetLanguage();

  return (
    <div className="flex items-center gap-2.5">
      <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[var(--ink-4)] hidden sm:inline">
        {t("header_target_language_label")}
      </span>
      <button
        type="button"
        onClick={goHome}
        aria-label={t("header_target_language_button_aria")}
        className="
          group cursor-pointer
          bg-transparent hover:bg-[var(--surface-2)]
          text-[var(--ink)] font-medium
          text-[12.5px] tracking-tight
          border border-[var(--border)] hover:border-[var(--ink-3)]
          rounded-md
          py-1.5 pl-3 pr-2.5
          transition-colors
          focus:outline-none focus:border-[var(--accent,var(--gold))]
          flex items-center gap-2
        "
      >
        <span>{module.label}</span>
        {/* 4-square grid glyph — implies "browse all" / home */}
        <svg
          aria-hidden="true"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          className="text-[var(--ink-3)] group-hover:text-[var(--ink-2)] transition-colors"
        >
          <rect x="0.5" y="0.5" width="4" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="6.5" y="0.5" width="4" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="0.5" y="6.5" width="4" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="6.5" y="6.5" width="4" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>
    </div>
  );
}
