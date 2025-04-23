import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AttractionCard, { AttractionProps } from "./AttractionCard";
import { ArchitectProps, getArchitectProjects } from "@/data/architects";
import { architectureAttractions } from "@/data/attractions";
import { User, X } from "lucide-react";

const ArchitectCard = ({ id, name, years, description, imageUrl }: ArchitectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const projects = getArchitectProjects(id, architectureAttractions);

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in">
        <div className="flex h-48 overflow-hidden">
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
          {years && <CardDescription>{years}</CardDescription>}
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center pt-0">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <User size={14} />
            <span>{projects.length} {projects.length === 1 ? 'проект' : 
              projects.length >= 2 && projects.length <= 4 ? 'проекта' : 'проектов'}</span>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="ml-auto">
                Посмотреть проекты
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span>Проекты архитектора: {name}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="ml-auto rounded-full h-6 w-6"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={16} />
                  </Button>
                </DialogTitle>
                <DialogDescription>
                  {years} | {description}
                </DialogDescription>
              </DialogHeader>
              {projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  {projects.map((project) => (
                    <AttractionCard key={project.id} {...project} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 my-8">У этого архитектора пока нет доступных проектов</p>
              )}
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
};

export default ArchitectCard;
