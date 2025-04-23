import { User } from "lucide-react";
import { architects } from "@/data/architects";
import ArchitectCard from "./ArchitectCard";

interface ArchitectsSectionProps {
  id: string;
}

const ArchitectsSection = ({ id }: ArchitectsSectionProps) => {
  return (
    <section id={id} className="scroll-mt-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-full bg-tertiary/10 text-tertiary">
              <User className="h-5 w-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Знаменитые архитекторы</h2>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Выдающиеся зодчие, чьё творчество определило уникальный архитектурный облик Казани, сочетающий восточные и европейские традиции
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {architects.map((architect) => (
          <ArchitectCard key={architect.id} {...architect} />
        ))}
      </div>
    </section>
  );
};

export default ArchitectsSection;
