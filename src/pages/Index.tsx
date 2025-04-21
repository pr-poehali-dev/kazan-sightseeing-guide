import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
import { Button } from "@/components/ui/button";
import { architectureAttractions, artAttractions, landmarkAttractions } from "@/data/attractions";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Герой-секция */}
      <section className="relative h-[70vh] bg-gradient-to-r from-primary to-secondary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/3/38/Kazan_aerial_view_08-2016_img2.jpg"
          alt="Казань" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Достопримечательности Казани</h1>
          <p className="text-xl text-white mb-8">Откройте для себя удивительную столицу Татарстана — город, где Восток встречается с Западом</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
              Начать путешествие
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20" size="lg">
              Узнать больше о Казани
            </Button>
          </div>
        </div>
      </section>
      
      {/* Содержание */}
      <main className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Добро пожаловать в Казань!</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Казань — город с тысячелетней историей, в котором гармонично сочетаются культуры и традиции Востока и Запада, 
            ислама и христианства. Исследуйте архитектурные памятники, уникальные арт-объекты и знаковые места этого удивительного города.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-muted p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <span className="text-4xl mb-2 block">🏛️</span>
            <h3 className="text-xl font-bold mb-2">Памятники архитектуры</h3>
            <p className="text-muted-foreground mb-4">Исторические здания и сооружения с богатой историей</p>
            <a href="#architecture" className="text-primary hover:underline">Исследовать →</a>
          </div>
          
          <div className="bg-muted p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <span className="text-4xl mb-2 block">🎨</span>
            <h3 className="text-xl font-bold mb-2">Арт объекты</h3>
            <p className="text-muted-foreground mb-4">Скульптуры, памятники и другие объекты современного искусства</p>
            <a href="#art" className="text-primary hover:underline">Исследовать →</a>
          </div>
          
          <div className="bg-muted p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <span className="text-4xl mb-2 block">📍</span>
            <h3 className="text-xl font-bold mb-2">Знаковые места</h3>
            <p className="text-muted-foreground mb-4">Особые локации, обязательные к посещению в Казани</p>
            <a href="#landmarks" className="text-primary hover:underline">Исследовать →</a>
          </div>
        </div>
        
        <CategorySection 
          id="architecture" 
          title="Памятники архитектуры" 
          description="Казань богата историческими зданиями различных эпох и стилей, от древнего Кремля до современных сооружений."
          items={architectureAttractions}
          icon="🏛️"
          color="text-primary"
        />
        
        <CategorySection 
          id="art" 
          title="Арт объекты" 
          description="В городе можно найти множество интересных арт-объектов и скульптур, отражающих историю и культуру Татарстана."
          items={artAttractions}
          icon="🎨"
          color="text-secondary"
        />
        
        <CategorySection 
          id="landmarks" 
          title="Знаковые места" 
          description="Эти места стали символами Казани и обязательны к посещению для каждого туриста."
          items={landmarkAttractions}
          icon="📍"
          color="text-accent"
        />
      </main>
      
      {/* Футер */}
      <footer className="bg-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">© 2023 Казань Тур. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-primary">О нас</a>
              <a href="#" className="text-gray-600 hover:text-primary">Контакты</a>
              <a href="#" className="text-gray-600 hover:text-primary">Карта сайта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
