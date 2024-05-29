import About from "../ui/About";
import ActionSection from "../ui/ActionSection";
import Brand from "../ui/Brand";
import Faq from "../ui/Faq";
import Hero from "../ui/Hero";
import Support from "../ui/Support";

function Home() {
  return (
    <div>
      <Hero />
      <Brand />
      <About />
      <ActionSection />
      <Support />
      <Faq />
    </div>
  );
}

export default Home;
