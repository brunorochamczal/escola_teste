import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">Escola Excelência</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Educação de qualidade que transforma vidas e constrói futuros brilhantes.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <span className="hover:underline cursor-pointer">Início</span>
                </Link>
              </li>
              <li>
                <Link href="/eventos">
                  <span className="hover:underline cursor-pointer">Eventos</span>
                </Link>
              </li>
              <li>
                <Link href="/educacao-basica">
                  <span className="hover:underline cursor-pointer">Educação Básica</span>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <span className="hover:underline cursor-pointer">Contato</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>(00) 0000-00000</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Rua da Educação, 000<br />Cidade - ESTADO</span>
              </li>
            </ul>
          </div>

          {/* Horário de Atendimento */}
          <div>
            <h3 className="font-semibold mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Segunda a Sexta</li>
              <li className="font-medium text-primary-foreground">7h às 18h</li>
              <li className="mt-3">Sábados</li>
              <li className="font-medium text-primary-foreground">8h às 12h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Escola Excelência. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
