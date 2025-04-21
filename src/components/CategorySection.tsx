import { ReactNode } from "react";
import { AttractionProps } from "./AttractionCard";
import AttractionCard from "./AttractionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  items: AttractionProps[];
  icon?: ReactNode;
  color?: string;
}

const CategorySection = ({ id, title, description, items, icon, color = "bg-primary" }: CategorySectionProps) => {
  return (
    <section id={id} className="py-10 px-4 md:px-10 scroll-mt-20">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          {icon && <span className="text-2xl">{icon}</span>}
          <h2 className={`text-2xl md:text-3xl font-bold ${color}`}>{title}</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      </div>
      
      <Tabs defaultValue="grid" className="mb-6">
        <TabsList className="mx-auto w-fit">
          <TabsTrigger value="grid">Сетка</TabsTrigger>
          <TabsTrigger value="list">Список</TabsTrigger>
        </TabsList>
        
        <TabsContent value="grid" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <AttractionCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="list" className="mt-6">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-4 border rounded-lg p-4 hover:shadow-md transition-shadow">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full md:w-40 h-32 object-cover rounded-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="flex-1">
                  <h3 className="font-bold">{item.name}</h3>
                  {item.year && <p className="text-sm text-muted-foreground">{item.year}</p>}
                  <p className="text-sm mt-2">{item.description}</p>
                  {item.address && <p className="text-xs mt-2 text-muted-foreground">{item.address}</p>}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default CategorySection;
