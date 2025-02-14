
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
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
              Ready to transform your business with technology? Get in touch with our team of experts to discuss your project.
            </p>
          </div>
          <Card className="animate-fadeIn">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input placeholder="Company" />
                <Textarea placeholder="Your message" className="min-h-[120px]" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
