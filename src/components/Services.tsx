
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Smartphone, Brain, Shield, Globe } from "lucide-react";

const services = [
  {
    title: "App Development",
    description: "Building intuitive, scalable mobile and web applications that deliver exceptional user experiences.",
    icon: Smartphone,
  },
  {
    title: "Generative AI Solutions",
    description: "Implementing cutting-edge AI technologies to automate processes and create innovative user experiences.",
    icon: Brain,
  },
  {
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions to protect your digital assets and ensure data privacy.",
    icon: Shield,
  },
  {
    title: "Digital Strategy",
    description: "Strategic technology consulting to align your digital initiatives with business objectives.",
    icon: Globe,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized technology services focusing on modern app development, AI integration, and security
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon size={24} />
                </div>
                <CardTitle className="mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
