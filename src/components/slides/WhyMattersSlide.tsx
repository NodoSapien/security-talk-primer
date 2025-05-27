
import { Smartphone, Shield, AlertTriangle, ExternalLink } from "lucide-react";

export const WhyMattersSlide = () => {
  const points = [
    {
      icon: Smartphone,
      title: "Dispositivos omnipresentes",
      description: "Usamos smartphones, tablets y PCs para todo"
    },
    {
      icon: AlertTriangle,
      title: "Datos expuestos",
      description: "Datos personales y profesionales expuestos"
    },
    {
      icon: Shield,
      title: "Efecto dominó",
      description: "Un solo dispositivo comprometido puede afectar a toda la vida digital"
    }
  ];

  return (
    <div className="text-white space-y-6 sm:space-y-8 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 sm:mb-12">
        ¿Por qué importa?
      </h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <div 
              key={index}
              className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all text-center"
            >
              <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-300">{point.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{point.description}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-300/20 p-4 sm:p-6 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-300 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
          Recursos de profundización:
        </h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-base sm:text-lg">
          <span>Charla técnica complementaria:</span>
          <a 
            href="https://personal-security-talk.lovable.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-200 underline transition-colors break-all"
          >
            https://personal-security-talk.lovable.app
          </a>
        </div>
      </div>
    </div>
  );
};
