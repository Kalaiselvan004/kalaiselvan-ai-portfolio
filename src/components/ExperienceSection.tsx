
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Experience & <span className="text-gradient">Achievements</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Internship */}
          <Card className="hover:shadow-md transition-all border-l-4 border-l-theme-blue">
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <Briefcase className="h-8 w-8 text-theme-blue mt-1" />
              <div>
                <CardTitle className="text-xl">Internship at Prime Solutions</CardTitle>
                <CardDescription>Embedded Systems & Electronics</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Gained hands-on experience with embedded systems, electronic components, and 
                manufacturing processes. Worked on practical applications and developed insights 
                into industry standards and best practices.
              </p>
            </CardContent>
          </Card>

          {/* Paper Presentation */}
          <Card className="hover:shadow-md transition-all border-l-4 border-l-theme-purple">
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <GraduationCap className="h-8 w-8 text-theme-purple mt-1" />
              <div>
                <CardTitle className="text-xl">ICCSICE'24 Paper Presentation</CardTitle>
                <CardDescription>May 7, 2024 • Karpagam College</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Presented at the International Conference on Information and Communication 
                Engineering, showcasing research and insights in the field of electronics and 
                communication engineering.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Social Work & Certifications */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-theme-blue mr-3"></div>
                  <span>Certification in C Programming</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-theme-blue mr-3"></div>
                  <span>Certification in C++ Programming</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-theme-blue mr-3"></div>
                  <span>Additional relevant certifications</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Social Work</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">Active NSS member involved in community service initiatives.</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-theme-purple mr-3"></div>
                  <span>Community outreach programs</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-theme-purple mr-3"></div>
                  <span>Helping people in need</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-theme-purple mr-3"></div>
                  <span>Environmental awareness initiatives</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
