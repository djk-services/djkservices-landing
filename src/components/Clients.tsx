
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
        <div className="relative w-full overflow-hidden">
          <div className="flex">
            <div className="animate-marquee flex items-center space-x-16 px-4">
              {clients.map((client, index) => (
                <div key={`${client.name}-${index}`} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
              ))}
            </div>
            <div className="animate-marquee flex items-center space-x-16 px-4">
              {clients.map((client, index) => (
                <div key={`${client.name}-second-${index}`} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
