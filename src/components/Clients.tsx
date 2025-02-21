
import { cn } from "@/lib/utils";

const clients = [
  {
    name: "American Express",
    logo: "/amex-logo.svg",
  },
  {
    name: "Disney",
    logo: "/disney-logo.svg",
  },
  {
    name: "Capital One",
    logo: "/capital-one-logo.svg",
  },
  {
    name: "ReliaQuest",
    logo: "/reliaquest-logo.svg",
  },
  {
    name: "Twitch",
    logo: "/twitch-logo.svg",
  },
];

export const Clients = () => {
  return (
    <div className="w-full bg-muted/30 py-12">
      <div className="container max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground mb-8">Trusted by industry leaders</p>
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex items-center space-x-16 px-4">
            {clients.map((client) => (
              <div key={client.name} className="flex-shrink-0">
                {/* Fallback to placeholder while waiting for logos */}
                <div className="w-32 h-12 bg-muted-foreground/10 rounded flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="animate-marquee flex items-center space-x-16 px-4" aria-hidden="true">
            {clients.map((client) => (
              <div key={`${client.name}-duplicate`} className="flex-shrink-0">
                {/* Fallback to placeholder while waiting for logos */}
                <div className="w-32 h-12 bg-muted-foreground/10 rounded flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
