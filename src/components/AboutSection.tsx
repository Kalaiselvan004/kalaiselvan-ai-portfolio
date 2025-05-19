
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  const strengths = [
    { name: "Problem-solving", icon: "🧩" },
    { name: "Teamwork", icon: "👥" },
    { name: "Leadership", icon: "🚀" },
    { name: "Communication", icon: "💬" },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate electronics engineer and student of BE-ECE at SNS College of Engineering, 
              with a deep interest in C/C++ programming, embedded systems, and AI-driven projects. 
              I enjoy creating innovative solutions that bridge hardware and software to solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed">
              My goal is to develop embedded systems and AI solutions that are not only technically sound 
              but also user-friendly and accessible. I believe in continuous learning and am always 
              exploring new technologies to enhance my skills.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">My Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              {strengths.map((strength) => (
                <Card key={strength.name} className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardContent className="flex items-center p-6">
                    <span className="text-3xl mr-4">{strength.icon}</span>
                    <span className="font-medium">{strength.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <Card className={cn(
                "transition-all hover:shadow-md relative overflow-hidden",
                "border-l-4 border-primary"
              )}>
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium">Bachelor of Engineering in Electronics and Communication</h4>
                  <p className="text-muted-foreground">SNS College of Engineering</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
