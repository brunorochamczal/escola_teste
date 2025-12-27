import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Award,
  Heart,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Trophy,
  Target,
} from "lucide-react";

const bannerImages = [
  {
    src: "images/banner1.jpg",
    title: "Educação que Transforma",
    subtitle: "Preparando seu filho para um futuro brilhante",
  },
  {
    src: "images/banner2.jpg",
    title: "Aprendizado com Alegria",
    subtitle: "Ambiente acolhedor e estimulante para o desenvolvimento",
  },
  {
    src: "images/banner3.jpg",
    title: "Excelência em Ensino",
    subtitle: "Metodologia moderna com professores qualificados",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Banner Rotativo */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-muted">
        {bannerImages.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner.src}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="container">
                <div className="max-w-2xl text-white space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {banner.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90">
                    {banner.subtitle}
                  </p>
                  <div className="flex gap-4">
                    <Link href="/contato">
                      <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                        Agende uma Visita
                      </Button>
                    </Link>
                    <Link href="/educacao-basica">
                      <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                        Saiba Mais
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controles do Banner */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a Escola Excelência?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma educação completa que desenvolve não apenas o conhecimento acadêmico, 
              mas também as habilidades socioemocionais essenciais para o futuro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Metodologia Moderna",
                description: "Ensino inovador que estimula o pensamento crítico e a criatividade dos alunos.",
              },
              {
                icon: Users,
                title: "Professores Qualificados",
                description: "Equipe pedagógica experiente e comprometida com o desenvolvimento de cada estudante.",
              },
              {
                icon: Award,
                title: "Infraestrutura Completa",
                description: "Salas modernas, biblioteca, laboratórios e espaços esportivos de qualidade.",
              },
              {
                icon: Heart,
                title: "Ambiente Acolhedor",
                description: "Espaço seguro e inclusivo que valoriza o bem-estar e a felicidade das crianças.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Valores e Benefícios */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Uma educação que vai além da sala de aula
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Na Escola Excelência, acreditamos que cada criança é única e merece uma educação 
                personalizada que respeite seu ritmo e potencialize suas habilidades. Nossa abordagem 
                pedagógica integra conhecimento acadêmico, desenvolvimento socioemocional e valores éticos.
              </p>
              
              <div className="space-y-4">
                {[
                  "Acompanhamento individualizado do desenvolvimento",
                  "Atividades extracurriculares diversificadas",
                  "Parceria constante entre escola e família",
                  "Preparação para os desafios do futuro",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link href="/educacao-basica">
                <Button size="lg" className="mt-8">
                  Conheça Nossa Metodologia
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="images/classroom.jpg"
                alt="Sala de aula moderna"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="images/library.jpg"
                alt="Biblioteca"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Sparkles, number: "25+", label: "Anos de Experiência" },
              { icon: Users, number: "800+", label: "Alunos Matriculados" },
              { icon: Trophy, number: "50+", label: "Prêmios Conquistados" },
              { icon: Target, number: "98%", label: "Satisfação das Famílias" },
            ].map((stat, index) => (
              <div key={index} className="space-y-3">
                <stat.icon className="h-10 w-10 mx-auto" />
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-sm md:text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça parte da nossa comunidade educacional
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma visita e conheça pessoalmente nossa estrutura, metodologia e equipe. 
            Será um prazer receber você e sua família!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Agendar Visita
              </Button>
            </Link>
            <Link href="/eventos">
              <Button size="lg" variant="outline">
                Ver Próximos Eventos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
