
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await emailjs.send(
        'service_u55ss8c', // Replace with your EmailJS service ID
        'template_m07j39h', // Replace with your EmailJS template ID
        {
          to_email: 'David.djkservices@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          subject: `New Request From ${formData.company}`,
        },
        'Gce6x2knbo2FzwQZe' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
