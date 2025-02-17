
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-6 bg-gradient-to-b from-background to-accent/10">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8 animate-fadeIn">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Leading Tech Innovation
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            Expert Solutions in AI, Cybersecurity, and Consumer Experiences
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We specialize in crafting unique, professional applications, leveraging the latest advances in generative AI and cybersecurity, for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" asChild>
              <a href="#contact">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
