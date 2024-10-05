import Hero from "@/components/landing-page/Hero";
import HowBotifyWorks from "@/components/landing-page/HowBotifyWorks";
import Navbar from "@/components/landing-page/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <HowBotifyWorks />
      </main>
    </>
  );
}
