
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
    <div className="text-white space-y-6 sm:space-y-8 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 sm:mb-12">
        Redes domésticas seguras
      </h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-6 sm:mb-8">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div key={index} className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-blue-500/20 rounded-full">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-300">{tip.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{tip.description}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-300/20 p-4 sm:p-6 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-300 flex items-center gap-2">
          <Wifi className="w-5 h-5 sm:w-6 sm:h-6" />
          Actividad práctica:
        </h3>
        <ol className="space-y-2 text-base sm:text-lg list-decimal list-inside">
          <li>Buscar modelo de tu router o caja de internet</li>
          <li>Descargar app del router para configurar desde móvil</li>
        </ol>
      </div>
    </div>
  );
};
