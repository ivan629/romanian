# Romanian Study

A clean, print-friendly Romanian language study guide built around Dmitry Petrov's
Polyglot 16 framework. Sixteen lessons, thirty-two core verbs, five hundred-plus
vocabulary words, sixteen real-life dialogues, and a 32-day pacing schedule.

Designed for **sit-down studying with a notebook**. No games, no drills you have
to click through — just well-organised pages you can read, write notes in the
margins, and print.

## Features

- **Universal hover tooltips.** Every Romanian word and phrase has English + an
  English-friendly pronunciation guide on hover. Click to hear it spoken (uses
  the browser's built-in Romanian voice — install one if you don't already have it).
- **Apple-system typography.** SF Pro for body text, ui-serif New York for
  display, SF Mono for Romanian text. No web fonts — fast, native, crisp.
- **Print-friendly.** A dedicated print stylesheet strips the chrome so you can
  print any lesson on plain paper for handwritten study.
- **Self-tests.** Each lesson ends with collapsible Q&A — try translating, then
  click to reveal the Romanian.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build it

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

The build is fully static — drop the `dist/` folder on any web host
(GitHub Pages, Netlify, Vercel, an S3 bucket, even open `dist/index.html`
directly in a browser).

## Structure

```
src/
├── App.tsx                  composes the page in lesson order
├── main.tsx                 React entry point
├── types.ts                 shared TypeScript types
├── styles/globals.css       Apple design tokens, RO tooltip styles, print CSS
├── lib/
│   ├── pronounce.ts         auto-generates a pronunciation guide for any Romanian word
│   └── tts.ts               browser SpeechSynthesis hook (ro-RO voice)
├── components/
│   ├── RO.tsx               the universal Romanian-text wrapper
│   ├── Layout.tsx           Nav, Hero, Footer
│   ├── Matrix.tsx           read-only 9-cell verb matrix display
│   ├── ui.tsx               every reusable building block (LessonSection, DataTable, …)
│   └── lessons/             one file per lesson cluster
└── data/                    every piece of content lives here, separately from layout
```

## Mult succes!
