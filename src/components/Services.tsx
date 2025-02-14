
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Computer, Globe, Users, ChartBar } from "lucide-react";

const services = [
  {
    title: "Digital Strategy",
    description: "Develop comprehensive digital transformation strategies tailored to your business goals.",
    icon: Globe,
  },
  {
    title: "Technology Implementation",
    description: "Expert implementation of cutting-edge technologies to enhance your operations.",
    icon: Computer,
  },
  {
    title: "Team Augmentation",
    description: "Skilled technology professionals to supplement your existing teams.",
    icon: Users,
  },
  {
    title: "Performance Analytics",
    description: "Data-driven insights to measure and optimize your technology investments.",
    icon: ChartBar,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology consulting services to drive your business forward
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
