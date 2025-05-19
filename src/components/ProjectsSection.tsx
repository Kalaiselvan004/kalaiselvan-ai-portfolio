
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, CircleUser, Package, Cpu, Lightbulb } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Electricity Cost Calculator",
      description: "A tool that calculates electricity costs based on usage patterns and helps users optimize their energy consumption.",
      tags: ["C++", "Embedded Systems"],
      icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
    },
    {
      title: "Pet Food Dispenser",
      description: "Automatic pet food dispenser with scheduling capabilities and portion control for pet owners.",
      tags: ["Embedded Systems", "IoT"],
      icon: <Package className="h-10 w-10 text-emerald-500" />,
    },
    {
      title: "AI-Based Fish Food Feeder",
      description: "Smart fish feeding system that uses AI to detect fish activity and optimize feeding schedules.",
      tags: ["AI", "C++", "Embedded"],
      icon: <Cpu className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Agro Dehydrator",
      description: "Agricultural dehydrator with smart controls for efficient food preservation and reduced energy usage.",
      tags: ["Electronics", "Agriculture"],
      icon: <CircleUser className="h-10 w-10 text-green-500" />,
    },
    {
      title: "Curriculum Design Tool using n8n AI",
      description: "AI-powered tool that assists in designing curriculum and educational content with customizable workflows.",
      tags: ["AI", "n8n", "Education"],
      icon: <Code className="h-10 w-10 text-purple-500" />,
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
              <CardHeader className="pb-4">
                <div className="mb-4">{project.icon}</div>
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
