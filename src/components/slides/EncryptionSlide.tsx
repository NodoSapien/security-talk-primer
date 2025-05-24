
import { Lock, Shield, CheckCircle } from "lucide-react";

export const EncryptionSlide = () => {
  const backupRules = [
    "Tres copias de tus datos",
    "Dos medios diferentes (nube + disco externo)", 
    "Una copia fuera de sitio"
  ];

  return (
    <div className="text-white space-y-8">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
        Cifrado y copias de seguridad
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-300/20">
          <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
            <Lock className="w-6 h-6" />
            Cifrado en reposo
          </h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              BitLocker (Windows Pro)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              FileVault (macOS)
            </li>
          </ul>
        </div>

        <div className="p-6 bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-300/20">
          <h3 className="text-2xl font-bold mb-4 text-green-300">Regla 3-2-1 de backups</h3>
          <ol className="space-y-3 text-lg list-decimal list-inside">
            {backupRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-300/20 p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Actividad práctica:
        </h3>
        <ol className="space-y-2 text-lg list-decimal list-inside">
          <li>Activar FileVault / BitLocker</li>
          <li>Configurar copia automática en la nube</li>
        </ol>
      </div>
    </div>
  );
};
