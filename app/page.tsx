import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Speakers from "./components/Speakers";
import Features from "./components/Features";
import Expectations from "./components/Expectations";
import Registration from "./components/Registration";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Speakers />
      <Features />
      <Expectations />
      <Registration />
      <Footer />
    </main>
  );
}
