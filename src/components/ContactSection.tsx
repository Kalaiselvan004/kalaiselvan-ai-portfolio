
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-muted-foreground">
          Have a question or want to work together? Feel free to reach out to me through any of these channels.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-center">
                  <div className="bg-red-500 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a href="mailto:kalaiselvan.s.ece.2022@snsce.ac.in" className="font-medium hover:text-red-500 transition-colors">
                      kalaiselvan.s.ece.2022@snsce.ac.in
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <a href="tel:+918072256258" className="font-medium hover:text-primary">
                      +91 8072256258
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-medium">Social Profiles</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Kalaiselvan004" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kalaiselvan-s-sns" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Subject" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message" rows={5} required />
              </div>
              <Button type="submit" className="w-full primary-gradient">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
