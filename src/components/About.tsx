import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-accent/10">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
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

        <div className="text-center mb-16">
          <span className="text-primary font-medium">Our Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Meet Our Founders</h2>
        </div>

        <Carousel opts={{ align: "start" }} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <Card className="p-6">
                <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-2">David Smith</h3>
                    <p className="text-primary font-medium mb-4">Chief Executive Officer</p>
                    <p className="text-muted-foreground">
                      David is a veteran operator with over a decade of experience leading product and engineering teams across multiple industries. A former U.S. Navy servicemember, he brings disciplined execution and cross-functional leadership to every venture. David earned his Computer Engineering and Mathematics degree cum laude from the University of Florida and an MBA from Harvard Business School. With his experience scaling platforms to millions of users and navigating regulated markets, David combines technical depth with strategic insight to build products that win.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 aspect-square md:aspect-auto md:h-[400px]">
                    <img 
                      src="/lovable-uploads/03e291b6-b3a1-41a1-a11a-9d98b916e43f.png" 
                      className="size-full object-cover rounded-lg"
                      alt="David Smith, CEO"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card className="p-6">
                <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-2">Jon-Kyle Smith</h3>
                    <p className="text-primary font-medium mb-4">Chief Technology Officer</p>
                    <p className="text-muted-foreground">
                      A visionary tech leader with expertise in cybersecurity and scalable architectures,
                      Jon-Kyle oversees our technical strategy and innovation initiatives.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 aspect-square md:aspect-auto md:h-[400px]">
                    <img 
                      src="/lovable-uploads/71006c49-1b09-4104-9c7e-571b567b68c2.png" 
                      className="size-full object-cover rounded-lg"
                      style={{ objectPosition: '30%' }}
                      alt="Jon-Kyle Smith, CTO"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12" />
          <CarouselNext className="right-0 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};
