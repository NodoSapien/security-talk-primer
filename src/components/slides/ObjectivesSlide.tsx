
import { CheckCircle } from "lucide-react";

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
    </div>
  );
};
