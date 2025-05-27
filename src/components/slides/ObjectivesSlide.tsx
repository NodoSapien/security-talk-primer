
import { CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ObjectivesSlide = () => {
  const objectives = [
    "Comprender amenazas más comunes",
    "Conocer medidas básicas de protección",
    "Aprender a usar herramientas incluidas en el sistema operativo",
    "Discutir buenas prácticas de forma práctica"
  ];

  return (
    <div className="text-white space-y-6 sm:space-y-8 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 sm:mb-12">
        Objetivos de la sesión
      </h2>
      
      <div className="grid gap-4 sm:gap-6 max-w-4xl mx-auto">
        {objectives.map((objective, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all"
          >
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 flex-shrink-0" />
            <span className="text-lg sm:text-xl">{objective}</span>
          </div>
        ))}
      </div>

      <div className="bg-cyan-500/20 backdrop-blur-sm rounded-xl border border-cyan-300/20 p-4 sm:p-6 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-300 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
          Actividad extra:
        </h3>
        <p className="text-base sm:text-lg mb-3 sm:mb-4">Explora la página web de conceptos básicos de seguridad</p>
        <Button 
          asChild
          className="bg-cyan-600 hover:bg-cyan-700 text-white w-full sm:w-auto"
        >
          <a href="https://security-basics.vercel.app/" target="_blank" rel="noopener noreferrer">
            Visitar Security Basics
          </a>
        </Button>
      </div>
    </div>
  );
};
