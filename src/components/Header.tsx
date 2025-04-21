import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className="relative">
      {/* Hero background */}
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Kazan_aerial_view_08-2016.jpg/1920px-Kazan_aerial_view_08-2016.jpg" 
          alt="Панорама Казани" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 animate-fade-in">
            Достопримечательности Казани
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl animate-fade-in animation-delay-100">
            Откройте для себя красоту и богатое наследие столицы Татарстана
          </p>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className={`sticky top-0 z-10 bg-white/90 backdrop-blur-sm shadow transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary">Казань</span>
            </div>
            
            <div className="flex space-x-1 md:space-x-4">
              <a href="#architecture" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                Архитектура
              </a>
              <a href="#art" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                Арт-объекты
              </a>
              <a href="#landmarks" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                Знаковые места
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
