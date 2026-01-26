import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load components that are below the fold
const Problem = lazy(() => import("./components/Problem"));
const Solution = lazy(() => import("./components/Solution"));
const Speakers = lazy(() => import("./components/Speakers"));
const Features = lazy(() => import("./components/Features"));
const Expectations = lazy(() => import("./components/Expectations"));
const Registration = lazy(() => import("./components/Registration"));
const Footer = lazy(() => import("./components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-screen" />}>
        <Problem />
        <Solution />
        <Speakers />
        <Features />
        <Expectations />
        <Registration />
        <Footer />
      </Suspense>
    </main>
  );
}
