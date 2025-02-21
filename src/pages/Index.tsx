
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Clients />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
