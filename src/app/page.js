import Hero from "@/components/landing-page/header/Hero";
import HowBotifyWorks from "@/components/landing-page/main/HowBotifyWorks";
import Navbar from "@/components/landing-page/header/Navbar";

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
