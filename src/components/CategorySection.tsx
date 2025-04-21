import { useState } from "react";
import AttractionCard, { AttractionProps } from "@/components/AttractionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Landmark, Palette, Grid, List } from "lucide-react";

type IconName = "map-pin" | "landmark" | "palette";

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  attractions: AttractionProps[];
  iconName: IconName;
  accentColor: string;
}

const CategorySection = ({ 
  id,
  title, 
  description, 
  attractions,
  iconName,
  accentColor
}: CategorySectionProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const getIcon = (name: IconName) => {
    switch (name) {
      case "map-pin":
        return <MapPin className="h-5 w-5" />;
      case "landmark":
        return <Landmark className="h-5 w-5" />;
      case "palette":
        return <Palette className="h-5 w-5" />;
    }
  };
  
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
  };
  
  return (
    <section id={id} className="scroll-mt-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className={`p-2 rounded-full ${colorClasses[accentColor as keyof typeof colorClasses]}`}>
              {getIcon(iconName)}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          </div>
          <p className="text-gray-600 max-w-2xl">{description}</p>
        </div>
        
        <div className="flex items-center bg-slate-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-md transition-colors ${
              viewMode === "grid" ? "bg-white shadow" : "hover:bg-slate-200"
            }`}
            aria-label="Вид сеткой"
          >
            <Grid size={18} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-md transition-colors ${
              viewMode === "list" ? "bg-white shadow" : "hover:bg-slate-200"
            }`}
            aria-label="Вид списком"
          >
            <List size={18} />
          </button>
        </div>
      </div>
      
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.id} {...attraction} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {attractions.map((attraction) => (
            <div 
              key={attraction.id} 
              className="flex flex-col md:flex-row gap-4 bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="w-full md:w-64 h-48 md:h-auto">
                <img 
                  src={attraction.imageUrl} 
                  alt={attraction.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="flex-1 p-4">
                <h3 className="text-lg font-bold mb-1">{attraction.name}</h3>
                {attraction.year && <p className="text-sm text-gray-500 mb-2">{attraction.year}</p>}
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                {attraction.address && (
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    <span>{attraction.address}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CategorySection;
