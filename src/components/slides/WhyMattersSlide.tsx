
import { AlertTriangle, Smartphone, Shield } from "lucide-react";

export const WhyMattersSlide = () => {
  const points = [
    {
      icon: Smartphone,
      text: "Usamos smartphones, tablets y PCs para todo"
    },
    {
      icon: AlertTriangle,
      text: "Datos personales y profesionales expuestos"
    },
    {
      icon: Shield,
      text: "Un solo dispositivo comprometido puede afectar a toda la vida digital"
    }
  ];

  return (
    <div className="text-white space-y-8">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
        ¿Por qué importa?
      </h2>
      
      <div className="grid gap-8 max-w-4xl mx-auto">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <div 
              key={index}
              className="flex items-center gap-6 p-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="p-4 bg-white/10 rounded-full">
                <Icon className="w-12 h-12 text-blue-400" />
              </div>
              <span className="text-2xl">{point.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};
