import { Nav, Hero, Footer } from "./components/layout/Layout";
import { MatrixDrill } from "./components/drill/MatrixDrill";
import {
  LessonRules, Lesson0, Lesson1, Lesson2, Lesson3,
  Lesson4, Lesson5, Lesson6, Lesson7, Lesson8,
  Lesson9, Lesson10, Lesson11, Lesson12,
  Lesson13, Lesson14, Lesson15, Lesson16, Lesson17,
  VocabularySection, DialoguesSection, ScheduleSection, AboutMeSection,
} from "./components/lessons";

export default function App() {
  return (
      <>
        <Nav />
        <Hero />
        <main className="max-w-[960px] mx-auto px-8 pb-24 max-md:px-4">
          <LessonRules />
          <Lesson0 />
          <Lesson1 />
          <Lesson2 />
          <Lesson3 />
          <MatrixDrill />
          <Lesson4 />
          <Lesson5 />
          <Lesson6 />
          <Lesson7 />
          <Lesson8 />
          <Lesson9 />
          <Lesson10 />
          <Lesson11 />
          <Lesson12 />
          <Lesson13 />
          <Lesson14 />
          <Lesson15 />
          <Lesson16 />
          <Lesson17 />
          <VocabularySection />
          <DialoguesSection />
          <ScheduleSection />
          <AboutMeSection />
        </main>
        <Footer />
      </>
  );
}