import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary py-4 px-6 md:px-10 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <img src="/logo-b.svg" alt="Лого" className="w-10 h-10" />
        <h1 className="text-2xl font-bold text-primary-foreground">Казань Тур</h1>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#architecture" className="text-primary-foreground hover:text-white transition">
          Памятники архитектуры
        </a>
        <a href="#art" className="text-primary-foreground hover:text-white transition">
          Арт объекты
        </a>
        <a href="#landmarks" className="text-primary-foreground hover:text-white transition">
          Знаковые места
        </a>
      </nav>
      <Button variant="outline" className="hidden md:flex bg-white text-primary hover:bg-primary-foreground">
        О городе
      </Button>
      <Button variant="outline" className="md:hidden bg-white text-primary">
        ≡
      </Button>
    </header>
  );
};

export default Header;
