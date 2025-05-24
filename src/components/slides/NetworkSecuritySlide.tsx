
import { Wifi, Shield, Users, CheckCircle } from "lucide-react";

export const NetworkSecuritySlide = () => {
  const tips = [
    {
      title: "Contraseña del router",
      description: "Cambiar la clave por defecto",
      icon: Shield
    },
    {
      title: "Firmware actualizado", 
      description: "Revisar en \"Administración\" del router",
      icon: CheckCircle
    },
    {
      title: "Red de invitados",
      description: "Aísla dispositivos de visitas",
      icon: Users
    }
  ];

  return (
    <div className="text-white space-y-8">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
        Redes domésticas seguras
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-300">{tip.title}</h3>
              <p className="text-gray-300">{tip.description}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-300/20 p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">
          <Wifi className="w-6 h-6" />
          Actividad práctica:
        </h3>
        <ol className="space-y-2 text-lg list-decimal list-inside">
          <li>Acceder a 192.168.1.1 (o IP propia)</li>
          <li>Cambiar credenciales y crear red de invitados</li>
        </ol>
      </div>
    </div>
  );
};
