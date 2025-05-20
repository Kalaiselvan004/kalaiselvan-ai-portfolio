
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Computer, Github, Database, FileText, Tool, Wrench, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SkillsSection() {
  const programmingSkills = [
    { name: "C", level: 90 },
    { name: "C++", level: 85 },
  ];

  const toolSkills = [
    { name: "Microsoft Office", icon: <FileText className="h-5 w-5" />, category: "Tools" },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, category: "Tools" },
    { name: "Canva", icon: <Computer className="h-5 w-5" />, category: "Tools" },
    { name: "n8n", icon: <Database className="h-5 w-5" />, category: "Tools" },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Code className="h-6 w-6 mr-2 text-theme-blue" />
              Programming Languages
            </h3>
            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6 mt-12 flex items-center">
              <Computer className="h-6 w-6 mr-2 text-theme-purple" />
              Languages Spoken
            </h3>
            <div className="space-y-4">
              {languages.map((language) => (
                <div key={language.name} className="flex justify-between items-center">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-sm px-3 py-1 bg-secondary rounded-full">{language.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Tools & Software</h3>
            <div className="grid grid-cols-2 gap-4">
              {toolSkills.map((tool) => (
                <Card 
                  key={tool.name} 
                  className={cn(
                    "transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer",
                    "border-t-4 border-t-theme-indigo"
                  )}
                >
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      {tool.icon}
                    </div>
                    <div>
                      <div className="font-medium">{tool.name}</div>
                      <div className="text-sm text-muted-foreground">{tool.category}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>General Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-theme-blue mr-3"></div>
                    <span>PCB Design & Circuit Layout</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-theme-blue mr-3"></div>
                    <span>Electronic Component Selection</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-theme-blue mr-3"></div>
                    <span>Soldering & Assembly</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-theme-blue mr-3"></div>
                    <span>Hardware Testing & Troubleshooting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
