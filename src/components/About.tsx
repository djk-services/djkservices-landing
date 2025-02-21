
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-accent/10">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeIn">
            <span className="text-primary font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Driving Innovation For Our Clients
            </h2>
            <p className="text-muted-foreground mb-8">
              Backed with over 15 years of combined expertise in app development, cybersecurity, and product innovation, our team specializes in building secure, high-performant digital experiences for a wide variety of audiences. Our passion for technology and commitment to driving value for our clients empower us to create unique solutions that exceed their expectations.
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Work With Us</a>
            </Button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Team collaboration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
