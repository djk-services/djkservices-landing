
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">TechConsult</h1>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <Button asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
