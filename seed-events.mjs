import { drizzle } from "drizzle-orm/mysql2";
import { events } from "./drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

const sampleEvents = [
  {
    title: "Feira de Ciências 2025",
    description: "Apresentação dos projetos científicos desenvolvidos pelos alunos durante o ano letivo. Venha conhecer as inovações e descobertas dos nossos estudantes!",
    eventDate: new Date("2025-05-15T14:00:00"),
    category: "Acadêmico",
    imageUrl: "/images/science-fair.jpg"
  },
  {
    title: "Festival de Artes",
    description: "Exposição de trabalhos artísticos, apresentações musicais e teatrais. Um dia dedicado à celebração da criatividade e talento dos nossos alunos.",
    eventDate: new Date("2025-06-20T15:00:00"),
    category: "Cultural",
    imageUrl: "/images/arts-festival.jpg"
  },
  {
    title: "Olimpíadas Escolares",
    description: "Competições esportivas entre as turmas com diversas modalidades: futebol, vôlei, basquete, atletismo e muito mais!",
    eventDate: new Date("2025-08-10T09:00:00"),
    category: "Esportivo",
    imageUrl: "/images/sports-day.jpg"
  },
  {
    title: "Semana do Meio Ambiente",
    description: "Atividades educativas sobre sustentabilidade, reciclagem e preservação ambiental. Palestras, oficinas e plantio de árvores.",
    eventDate: new Date("2025-06-05T08:00:00"),
    category: "Educacional",
    imageUrl: "/images/environment-week.jpg"
  },
  {
    title: "Festa Junina",
    description: "Tradicional festa junina com comidas típicas, quadrilha, brincadeiras e muita diversão para toda a família!",
    eventDate: new Date("2025-06-28T18:00:00"),
    category: "Cultural",
    imageUrl: "/images/festa-junina.jpg"
  }
];

try {
  await db.insert(events).values(sampleEvents);
  console.log("✅ Eventos de exemplo inseridos com sucesso!");
} catch (error) {
  console.error("❌ Erro ao inserir eventos:", error);
}

process.exit(0);
