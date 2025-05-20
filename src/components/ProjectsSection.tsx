
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, CircleUser, Package, Cpu, Lightbulb, FileText } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Electricity Cost Calculator",
      description: "A tool that calculates electricity costs based on usage patterns and helps users optimize their energy consumption.",
      tags: ["C++", "Embedded Systems"],
      icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
      image: "https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Pet Food Dispenser",
      description: "Automatic pet food dispenser with scheduling capabilities and portion control for pet owners.",
      tags: ["Embedded Systems", "IoT"],
      icon: <Package className="h-10 w-10 text-emerald-500" />,
      image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "AI-Based Fish Food Feeder",
      description: "Smart fish feeding system that uses AI to detect fish activity and optimize feeding schedules.",
      tags: ["AI", "C++", "Embedded"],
      icon: <Cpu className="h-10 w-10 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Agro Dehydrator",
      description: "Agricultural dehydrator with smart controls for efficient food preservation and reduced energy usage.",
      tags: ["Electronics", "Agriculture"],
      icon: <CircleUser className="h-10 w-10 text-green-500" />,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Curriculum Design Tool using n8n AI",
      description: "AI-powered tool that assists in designing curriculum and educational content with customizable workflows.",
      tags: ["AI", "n8n", "Education"],
      icon: <Code className="h-10 w-10 text-purple-500" />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60"
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-muted-foreground">
          Here are some of the projects I've worked on, showcasing my skills in embedded systems,
          electronics engineering, and AI integration.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full border-t-4 border-t-primary"
            >
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                  {project.icon}
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-0">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
