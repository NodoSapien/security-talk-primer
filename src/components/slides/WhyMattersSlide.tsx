
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
    <div className="text-white space-y-8">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
        ¿Por qué importa?
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <div 
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all text-center"
            >
              <Icon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-300">{point.title}</h3>
              <p className="text-gray-300">{point.description}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-300/20 p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-purple-300 flex items-center gap-2">
          <ExternalLink className="w-6 h-6" />
          Recursos de profundización:
        </h3>
        <div className="flex items-center gap-3 text-lg">
          <span>Charla técnica complementaria:</span>
          <a 
            href="https://personal-security-talk.lovable.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-200 underline transition-colors"
          >
            https://personal-security-talk.lovable.app
          </a>
        </div>
      </div>
    </div>
  );
};
