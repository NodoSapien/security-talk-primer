
import { AlertTriangle, Mail, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

        <div className="p-6 bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-300/20">
          <h3 className="text-2xl font-bold mb-4 text-green-300 flex items-center gap-2">
            <Eye className="w-6 h-6" />
            Consejo:
          </h3>
          <p className="text-lg">Nunca hacer clic sin verificar el remitente</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-300/20">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">
              <ExternalLink className="w-6 h-6" />
              Actividad avanzada:
            </h3>
            <p className="text-lg mb-4">Practica Google Dorking seguro con esta herramienta</p>
            <Button 
              asChild
              className="bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              <a href="https://google-dorking-tool.vercel.app/" target="_blank" rel="noopener noreferrer">
                Herramienta Google Dorking
              </a>
            </Button>
          </div>

          <div className="p-6 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-300/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
              <ExternalLink className="w-6 h-6" />
              Curso gratuito:
            </h3>
            <p className="text-lg mb-4">IBM Cybersecurity Fundamentals</p>
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <a href="https://skills.yourlearning.ibm.com/activity/ILB-DNRPWDGQGMMY7GGD" target="_blank" rel="noopener noreferrer">
                Acceder al curso IBM
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
