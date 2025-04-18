
import { cn } from "@/lib/utils";

const logos = "/logos";

const clients = [
  {
    name: "American Express",
    logo: `${logos}/amex.svg`,
  },
  {
    name: "Disney",
    logo: `${logos}/disney.png`,
  },
  {
    name: "Capital One",
    logo: `${logos}/capitalone.png`,
  },
  {
    name: "ReliaQuest",
    logo: `${logos}/reliaquest.png`,
  },
  {
    name: "Twitch",
    logo: `${logos}/twitch.svg`,
  }
];

export const Clients = () => {
  return (
    <div className="w-full bg-muted/30 py-12 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground mb-8">Trusted by Top Industry Leaders</p>
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex items-center space-x-16 px-4">
            {clients.map((client) => (
              <div key={client.name} className="flex-shrink-0">
                <img src={client.logo} alt={client.name} className="w-32 h-12 object-contain" />
              </div>
            ))}
          </div>
          
          {/* Create a duplicate set of logos for continuous scrolling effect */}
          <div className="animate-marquee flex items-center space-x-16 px-4">
            {clients.map((client) => (
              <div key={`${client.name}-repeat`} className="flex-shrink-0">
                <img src={client.logo} alt={client.name} className="w-32 h-12 object-contain" />
              </div>
            ))}
          </div> 
        </div>
      </div>
    </div>
  );
};
