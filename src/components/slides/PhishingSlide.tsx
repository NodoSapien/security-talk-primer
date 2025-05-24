
import { AlertTriangle, Mail, Eye } from "lucide-react";

export const PhishingSlide = () => {
  const warnings = [
    "URLs sospechosas",
    "Errores ortográficos", 
    "Solicitud urgente de datos"
  ];

  return (
    <div className="text-white space-y-8">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
        Phishing y engaños
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="p-6 bg-red-500/20 backdrop-blur-sm rounded-xl border border-red-300/20">
          <h3 className="text-2xl font-bold mb-4 text-red-300 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            Señales de alerta:
          </h3>
          <ul className="space-y-3 text-lg">
            {warnings.map((warning, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                {warning}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 bg-orange-500/20 backdrop-blur-sm rounded-xl border border-orange-300/20">
          <h3 className="text-2xl font-bold mb-4 text-orange-300 flex items-center gap-2">
            <Mail className="w-6 h-6" />
            Ejemplo de correo falso:
          </h3>
          <div className="bg-black/30 p-4 rounded-lg font-mono text-sm border-l-4 border-red-400">
            <p className="text-red-300">De: seguridad@bancofals0.com</p>
            <p className="text-gray-300 mt-2">¡URGENTE! Su cuenta será suspendida en 24 horas.</p>
            <p className="text-gray-300">Haga clic aquí para verificar: bit.ly/verificar123</p>
          </div>
        </div>

        <div className="p-6 bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-300/20">
          <h3 className="text-2xl font-bold mb-4 text-green-300 flex items-center gap-2">
            <Eye className="w-6 h-6" />
            Consejo:
          </h3>
          <p className="text-lg">Nunca hacer clic sin verificar el remitente</p>
        </div>
      </div>
    </div>
  );
};
