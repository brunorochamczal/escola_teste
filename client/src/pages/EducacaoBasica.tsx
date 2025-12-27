import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Microscope,
  Palette,
  Music,
  Dumbbell,
  Globe,
  Calculator,
  CheckCircle2,
} from "lucide-react";

export default function EducacaoBasica() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Educação Básica de Excelência
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Nossa proposta pedagógica integra conhecimento acadêmico, desenvolvimento 
              socioemocional e formação de valores, preparando estudantes para os desafios 
              do século XXI.
            </p>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Nossa Metodologia Pedagógica
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Adotamos uma abordagem educacional moderna e humanizada, que coloca o aluno 
              no centro do processo de aprendizagem e valoriza suas potencialidades individuais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Aprendizagem Ativa</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Estimulamos a participação ativa dos alunos através de projetos, 
                    experimentos e atividades práticas que tornam o aprendizado significativo 
                    e duradouro.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Ensino Personalizado</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Respeitamos o ritmo e as características individuais de cada estudante, 
                    oferecendo acompanhamento próximo e estratégias diferenciadas de ensino.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Formação Integral</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Desenvolvemos competências cognitivas, socioemocionais e éticas, 
                    preparando cidadãos conscientes, críticos e comprometidos com a sociedade.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Microscope className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Tecnologia Educacional</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Integramos recursos tecnológicos ao processo educativo, preparando 
                    os alunos para o mundo digital e desenvolvendo competências do futuro.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Níveis de Ensino */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Níveis de Ensino
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                title: "Educação Infantil",
                age: "3 a 5 anos",
                description:
                  "Fase fundamental para o desenvolvimento integral da criança. Trabalhamos com atividades lúdicas que estimulam a criatividade, a socialização e a construção da autonomia, respeitando o universo infantil e promovendo descobertas através do brincar.",
                highlights: [
                  "Desenvolvimento da linguagem oral e escrita",
                  "Exploração sensorial e motora",
                  "Socialização e convivência em grupo",
                  "Estímulo à curiosidade e imaginação",
                ],
              },
              {
                title: "Ensino Fundamental I",
                age: "6 a 10 anos",
                description:
                  "Período de consolidação da alfabetização e letramento. Desenvolvemos o raciocínio lógico-matemático, a compreensão leitora e a expressão escrita, além de introduzir conceitos científicos e culturais que ampliam a visão de mundo dos estudantes.",
                highlights: [
                  "Alfabetização e letramento",
                  "Raciocínio lógico-matemático",
                  "Iniciação científica",
                  "Desenvolvimento da leitura crítica",
                ],
              },
              {
                title: "Ensino Fundamental II",
                age: "11 a 14 anos",
                description:
                  "Aprofundamento dos conhecimentos e preparação para novos desafios. Incentivamos o pensamento crítico, a argumentação e a autonomia nos estudos, trabalhando com projetos interdisciplinares que conectam diferentes áreas do conhecimento.",
                highlights: [
                  "Aprofundamento nas disciplinas",
                  "Desenvolvimento do pensamento crítico",
                  "Projetos interdisciplinares",
                  "Orientação vocacional inicial",
                ],
              },
            ].map((level, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{level.title}</h3>
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {level.age}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {level.description}
                      </p>
                      <div className="space-y-2">
                        {level.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas do Conhecimento */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Áreas do Conhecimento
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Oferecemos um currículo completo e equilibrado que contempla todas as áreas 
            essenciais para a formação integral dos estudantes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Calculator, name: "Matemática" },
              { icon: BookOpen, name: "Língua Portuguesa" },
              { icon: Globe, name: "Ciências Humanas" },
              { icon: Microscope, name: "Ciências da Natureza" },
              { icon: Music, name: "Artes" },
              { icon: Dumbbell, name: "Educação Física" },
              { icon: Globe, name: "Língua Inglesa" },
              { icon: Palette, name: "Atividades Criativas" },
            ].map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    <area.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold">{area.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Infraestrutura Completa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/classroom.jpg"
                  alt="Salas de aula modernas"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Salas de Aula Modernas</h3>
              <p className="text-muted-foreground">
                Ambientes climatizados e equipados com recursos tecnológicos que facilitam 
                o aprendizado e tornam as aulas mais dinâmicas e interativas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/library.jpg"
                  alt="Biblioteca"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Biblioteca Completa</h3>
              <p className="text-muted-foreground">
                Acervo diversificado com milhares de títulos, espaço de leitura aconchegante 
                e programas de incentivo à leitura que desenvolvem o gosto pelos livros.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/sports.jpg"
                  alt="Espaços esportivos"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Espaços Esportivos</h3>
              <p className="text-muted-foreground">
                Quadras poliesportivas, piscina e áreas de recreação que promovem a prática 
                de atividades físicas e o desenvolvimento de habilidades motoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Venha conhecer nossa escola!
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Agende uma visita e veja de perto como trabalhamos para oferecer a melhor 
              educação para seu filho.
            </p>
            <a href="/contato">
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Agendar Visita
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
