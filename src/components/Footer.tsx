
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn(
      "bg-gray-900 text-white py-12",
      "dark:bg-gray-950 dark:text-gray-200"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Kalaiselvan S</h3>
            <p className="text-gray-400 mt-1">Electronics Engineer & AI Enthusiast</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} Kalaiselvan S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
