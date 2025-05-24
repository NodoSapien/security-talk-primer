
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
    <div className="text-white space-y-8">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
        Objetivos de la sesión
      </h2>
      
      <div className="grid gap-6 max-w-4xl mx-auto">
        {objectives.map((objective, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all"
          >
            <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
            <span className="text-xl">{objective}</span>
          </div>
        ))}
      </div>

      <div className="bg-cyan-500/20 backdrop-blur-sm rounded-xl border border-cyan-300/20 p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-cyan-300 flex items-center gap-2">
          <ExternalLink className="w-6 h-6" />
          Actividad extra:
        </h3>
        <p className="text-lg mb-4">Explora la página web de conceptos básicos de seguridad</p>
        <Button 
          asChild
          className="bg-cyan-600 hover:bg-cyan-700 text-white"
        >
          <a href="https://security-basics.vercel.app/" target="_blank" rel="noopener noreferrer">
            Visitar Security Basics
          </a>
        </Button>
      </div>
    </div>
  );
};
