import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
import { architectureAttractions, artAttractions, landmarkAttractions } from "@/data/attractions";

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          <CategorySection 
            id="architecture"
            title="Памятники архитектуры" 
            description="Уникальные архитектурные сооружения Казани, отражающие богатое историческое и культурное наследие города"
            attractions={architectureAttractions}
            iconName="landmark"
            accentColor="primary"
          />
          
          <CategorySection 
            id="art"
            title="Арт-объекты" 
            description="Современные и исторические скульптуры, памятники и инсталляции, украшающие улицы и площади Казани"
            attractions={artAttractions}
            iconName="palette"
            accentColor="secondary"
          />
          
          <CategorySection 
            id="landmarks"
            title="Знаковые места" 
            description="Особые локации и достопримечательности, которые стали символами Казани и обязательны к посещению"
            attractions={landmarkAttractions}
            iconName="map-pin"
            accentColor="accent"
          />
        </div>
        
        <footer className="mt-20 text-center text-gray-500 text-sm">
          <p>© 2023 Достопримечательности Казани. Все права защищены.</p>
        </footer>
      </main>
    </div>
  );
};

export default IndexPage;
