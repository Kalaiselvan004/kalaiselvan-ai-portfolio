
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-24" id="home">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="container mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="text-primary font-semibold mb-2">Electronics Engineer & Embedded Systems Specialist</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">Kalaiselvan S</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-muted-foreground">
              Creating innovative embedded solutions at the intersection of hardware and software.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="primary-gradient" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className={cn(
              "relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden",
              "border-4 border-white dark:border-gray-800 shadow-xl",
              "bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
            )}>
              {/* Profile image placeholder - replace with actual image URL when available */}
              <div className="flex items-center justify-center h-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="8" r="5"></circle>
                  <path d="M20 21v-2a7 7 0 0 0-14 0v2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
