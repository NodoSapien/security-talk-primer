
import { Shield, CheckCircle } from "lucide-react";

export const AntivirusSlide = () => {
  return (
    <div className="text-white space-y-8">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
        Antivirus incorporado
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-300/20">
          <h3 className="text-2xl font-bold mb-4 text-blue-300">Windows Defender (Windows 10/11)</h3>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Se activa por defecto
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Ejecuta análisis rápidos y completos
            </li>
          </ul>
        </div>

        <div className="p-6 bg-cyan-500/20 backdrop-blur-sm rounded-xl border border-cyan-300/20">
          <h3 className="text-2xl font-bold mb-4 text-cyan-300">XProtect (macOS)</h3>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Protección básica integrada
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-300/20 p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Actividad práctica:
        </h3>
        <ol className="space-y-2 text-lg list-decimal list-inside">
          <li>Abrir "Seguridad de Windows" / "Preferencias de Seguridad"</li>
          <li>Iniciar un análisis completo</li>
        </ol>
      </div>
    </div>
  );
};
