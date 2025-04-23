import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { name: "Архитектура", href: "#architecture" },
    { name: "Архитекторы", href: "#architects" },
    { name: "Арт-объекты", href: "#art" },
    { name: "Знаковые места", href: "#landmarks" }
  ];
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="relative">
        {/* Hero Image */}
        <div className="absolute inset-0 h-[60vh] -z-10 overflow-hidden">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Kazan_Kremlin_P8210059_2200.jpg/1280px-Kazan_Kremlin_P8210059_2200.jpg" 
            alt="Панорама Казани" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        </div>
        
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative">
          <a href="/" className="font-bold text-xl text-white transition-colors duration-300">
            Казань<span className="text-primary">Гид</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-primary-light"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="text-gray-800 hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
        
        {/* Hero content */}
        <div className="container mx-auto px-4 pt-24 pb-32 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Достопримечательности Казани
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in opacity-90">
            Откройте для себя уникальное сочетание Востока и Запада, истории и современности в третьей столице России
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => {
                document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Исследовать город
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              onClick={() => {
                document.getElementById("architects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Знаменитые архитекторы
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
