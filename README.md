# Rahat Shifa Khana — Premium Hero Website

React + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    Header.tsx        sticky glass nav + CTAs
    Hero.tsx           full-viewport hero, split-word headline, portrait, trust stats
    FloatingCards.tsx  the 4 glass cards floating around the hero portrait
    AnimatedCounter.tsx  count-up number used in the trust stats
    About.tsx          founder story + timeline
    Treatments.tsx     6 treatment/system cards
    Diagnostics.tsx     9-step diagnostic timeline
    SOPMSSection.tsx    SOPMS explainer with animated circular diagram
    Courses.tsx         Tibi Refresher Course pricing card
    Schedule.tsx        clinic + online class timetable
    Contact.tsx         address, phone/WhatsApp, map placeholder
    Footer.tsx
  content.ts           all copy/data lives here — edit this file to change text
  App.tsx              composes the page
```

## Things to swap in before shipping

1. **Portrait photo** — the hero and About section currently use a placeholder
   monogram (`RR`) instead of a real photo of Hakim Rehmat Ali Rahat. Search
   for the comment `placeholder portrait` in `Hero.tsx` and `About.tsx` and
   replace the placeholder `div` with an `<img>` pointing at the real photo.
2. **Google Map** — `Contact.tsx` has a placeholder where a map should go.
   Replace the placeholder `div` with an `<iframe>` embed for
   "Madina Green Valley, Faisalabad, Pakistan".
3. **Trust stat numbers** — the four stats in `content.ts` (`TRUST_STATS`) are
   built from what's confirmed (founded 1992, 6-month course, 9-step method,
   3 systems of medicine). If you have a real "years of experience" or
   "consultations completed" figure, swap it in there.

## Notes

This project was authored by hand in a sandboxed environment without network
access, so `npm install` / a full TypeScript build could not be run here to
verify it compiles. The code follows standard Vite + React + TS conventions
and was checked for structural (brace/paren) balance, but please run
`npm install && npm run dev` as your first step and flag anything that errors.
