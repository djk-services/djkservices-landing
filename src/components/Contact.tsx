
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New Request From ${formData.company}`);
    const body = encodeURIComponent(
      `You have a new request from ${formData.firstName} ${formData.lastName}:\n\n${formData.message}`
    );
    
    const mailtoLink = `mailto:David.djkservices@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    toast({
      title: "Email client opened",
      description: "Your message has been prepared in your default email client.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="animate-fadeIn">
            <span className="text-primary font-medium">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-muted-foreground">
              Ready to transform your business with us? Get in touch with our team of experts to discuss your project.
            </p>
          </div>
          <Card className="animate-fadeIn">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input 
                    placeholder="Last Name" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  placeholder="Company" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
                <Textarea 
                  placeholder="Your message" 
                  className="min-h-[120px]"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
