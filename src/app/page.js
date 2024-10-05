import Hero from "@/components/landing-page/header/Hero";
import HowBotifyWorks from "@/components/landing-page/main/HowBotifyWorks";
import Navbar from "@/components/landing-page/header/Navbar";
import WhyChooseBotify from "@/components/landing-page/main/WhyChooseBotify";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <HowBotifyWorks />
        <WhyChooseBotify />
      </main>
    </>
  );
}
