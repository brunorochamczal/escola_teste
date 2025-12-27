import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Events() {
  const { data: events, isLoading } = trpc.events.list.useQuery();

  const formatEventDate = (date: Date) => {
    return format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  };

  const formatEventTime = (date: Date) => {
    return format(new Date(date), "HH:mm", { locale: ptBR });
  };

  const getCategoryColor = (category?: string) => {
    const colors: Record<string, string> = {
      Acadêmico: "bg-blue-100 text-blue-800 border-blue-200",
      Cultural: "bg-purple-100 text-purple-800 border-purple-200",
      Esportivo: "bg-green-100 text-green-800 border-green-200",
      Educacional: "bg-orange-100 text-orange-800 border-orange-200",
    };
    return colors[category || ""] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Eventos Escolares
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Acompanhe a agenda de atividades, celebrações e eventos especiais da 
              Escola Excelência. Momentos inesquecíveis que enriquecem a experiência educacional.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 md:py-16">
        <div className="container">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : events && events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {event.imageUrl && (
                    <div className="h-48 overflow-hidden bg-muted">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold leading-tight">
                        {event.title}
                      </h3>
                      {event.category && (
                        <Badge
                          variant="outline"
                          className={getCategoryColor(event.category)}
                        >
                          {event.category}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium">
                          {formatEventDate(event.eventDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{formatEventTime(event.eventDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Escola Excelência</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhum evento programado</h3>
              <p className="text-muted-foreground">
                Em breve divulgaremos novos eventos. Fique atento!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-accent/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Participe dos nossos eventos
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Os eventos escolares são momentos importantes para fortalecer os laços entre 
              escola, família e comunidade. Contamos com a presença e participação de todos!
            </p>
            <p className="text-muted-foreground">
              Para mais informações sobre os eventos, entre em contato conosco pelo telefone 
              <span className="font-semibold text-foreground"> (11) 3456-7890</span> ou pelo 
              e-mail <span className="font-semibold text-foreground">eventos@escolaexcelencia.com.br</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
