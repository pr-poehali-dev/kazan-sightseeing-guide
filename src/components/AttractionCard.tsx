import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface AttractionProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  year?: string;
  address?: string;
}

const AttractionCard = ({ name, description, imageUrl, year, address }: AttractionProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
        {year && <CardDescription>{year}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0">
        {address && (
          <span className="text-xs text-muted-foreground">{address}</span>
        )}
        <Button variant="outline" size="sm" className="ml-auto">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AttractionCard;
