import { AttractionProps } from "@/components/AttractionCard";

export interface ArchitectProps {
  id: string;
  name: string;
  years: string;
  description: string;
  imageUrl: string;
  projects: string[]; // Массив ID проектов
}

export const architects: ArchitectProps[] = [
  {
    id: "arch-1",
    name: "Николай Фёдорович Алфёров",
    years: "1827–1896",
    description: "Казанский архитектор, представитель русского стиля. Работал в Казани во второй половине XIX века. Автор значимых проектов церковной и гражданской архитектуры.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/N_F_Alferov_photo.jpg/640px-N_F_Alferov_photo.jpg",
    projects: ["arch2", "arch3"]
  },
  {
    id: "arch-2",
    name: "Варфоломей Иванович Петонди",
    years: "1794–1868",
    description: "Архитектор итальянского происхождения, работавший в Казани. Автор множества зданий в стиле классицизма, в том числе зданий Казанского университета.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/%D0%92._%D0%98._%D0%9F%D0%B5%D1%82%D0%BE%D0%BD%D0%B4%D0%B8.jpg/640px-%D0%92._%D0%98._%D0%9F%D0%B5%D1%82%D0%BE%D0%BD%D0%B4%D0%B8.jpg",
    projects: ["arch1", "arch4"]
  },
  {
    id: "arch-3",
    name: "Иван Егорович Старов",
    years: "1745–1808",
    description: "Русский архитектор, представитель классицизма. Работал над проектами в Казани. Один из создателей архитектурного облика исторического центра города.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Starov_I.E.jpg/640px-Starov_I.E.jpg",
    projects: ["arch5"]
  }
];

// Функция для получения информации об архитекторе по ID
export const getArchitectById = (id: string): ArchitectProps | undefined => {
  return architects.find(architect => architect.id === id);
};

// Функция для получения проектов архитектора по его ID
export const getArchitectProjects = (architectId: string, attractions: AttractionProps[]): AttractionProps[] => {
  const architect = getArchitectById(architectId);
  if (!architect) return [];
  
  return attractions.filter(attraction => architect.projects.includes(attraction.id));
};
