
import { AlertTriangle, Mail, Eye, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const PhishingSlide = () => {
  const warnings = [
    "URLs sospechosas",
    "Errores ortográficos", 
    "Solicitud urgente de datos"
  ];

  return (
    <div className="text-white space-y-6 sm:space-y-8 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 sm:mb-12">
        Phishing y engaños
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="p-4 sm:p-6 bg-red-500/20 backdrop-blur-sm rounded-xl border border-red-300/20 relative">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-red-300 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
            Señales de alerta:
          </h3>
          
          {/* Modal trigger button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 text-red-300 hover:text-red-100 hover:bg-red-500/20 p-1 h-auto"
              >
                <Info className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Ejemplo de Email de Phishing</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src="/lovable-uploads/a59c95ec-ab50-44b2-9042-cae714f89f3c.png" 
                  alt="Ejemplo de email de phishing mostrando señales de alerta como remitente sospechoso, urgencia falsa y enlaces dudosos"
                  className="w-full h-auto rounded-lg border"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Este ejemplo muestra las características típicas de un email de phishing: remitente desconocido, 
                  ofertas demasiado buenas para ser verdad, urgencia artificial y enlaces sospechosos.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <ul className="space-y-3 text-base sm:text-lg">
            {warnings.map((warning, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                {warning}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-300/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
              Aprende más sobre Phishing:
            </h3>
            <p className="text-base sm:text-lg mb-3 sm:mb-4">Guía completa de Malwarebytes sobre phishing</p>
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
            >
              <a href="https://www.malwarebytes.com/es/cybersecurity/basics/phishing-email" target="_blank" rel="noopener noreferrer">
                Leer Guía Completa
              </a>
            </Button>
          </div>

          <div className="p-4 sm:p-6 bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-300/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-300 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
              Actividad avanzada:
            </h3>
            <p className="text-base sm:text-lg mb-3 sm:mb-4">Practica Google Dorking seguro con esta herramienta</p>
            <Button 
              asChild
              className="bg-yellow-600 hover:bg-yellow-700 text-white w-full sm:w-auto"
            >
              <a href="https://google-dorking-tool.vercel.app/" target="_blank" rel="noopener noreferrer">
                Herramienta Google Dorking
              </a>
            </Button>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-300/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-300 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
            Curso gratuito:
          </h3>
          <p className="text-base sm:text-lg mb-3 sm:mb-4">IBM Cybersecurity Fundamentals</p>
          <Button 
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto"
          >
            <a href="https://skills.yourlearning.ibm.com/activity/ILB-DNRPWDGQGMMY7GGD" target="_blank" rel="noopener noreferrer">
              Acceder al curso IBM
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
