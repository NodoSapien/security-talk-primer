
import { Lock, Shield, CheckCircle, ExternalLink } from "lucide-react";

export const EncryptionSlide = () => {
  const backupRules = [
    "Tres copias de tus datos",
    "Dos medios diferentes (nube + disco externo)", 
    "Una copia fuera de sitio"
  ];

  const threatResources = [
    { name: "IBM X-Force Exchange", url: "https://exchange.xforce.ibmcloud.com/" },
    { name: "CISA", url: "https://www.cisa.gov/" },
    { name: "MITRE", url: "https://www.mitre.org/" }
  ];

  return (
    <div className="text-white space-y-6 sm:space-y-8 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 sm:mb-12">
        Cifrado y copias de seguridad
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <div className="p-4 sm:p-6 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-300/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300 flex items-center gap-2">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
            Cifrado en reposo
          </h3>
          <ul className="space-y-3 text-base sm:text-lg">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <span>BitLocker (Windows Pro)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <span>FileVault (macOS)</span>
            </li>
          </ul>
        </div>

        <div className="p-4 sm:p-6 bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-300/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-300">Regla 3-2-1 de backups</h3>
          <ol className="space-y-3 text-base sm:text-lg list-decimal list-inside">
            {backupRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="bg-cyan-500/20 backdrop-blur-sm rounded-xl border border-cyan-300/20 p-4 sm:p-6 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-300 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
          Consulta datos de amenazas globales:
        </h3>
        <div className="space-y-3">
          {threatResources.map((resource, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 underline transition-colors text-base sm:text-lg break-all"
              >
                {resource.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-300/20 p-4 sm:p-6 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-300 flex items-center gap-2">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
          Actividad práctica:
        </h3>
        <ol className="space-y-2 text-base sm:text-lg list-decimal list-inside">
          <li>Activar FileVault / BitLocker</li>
          <li>Configurar copia automática en la nube</li>
        </ol>
      </div>
    </div>
  );
};
