
import { Shield, CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AntivirusSlide = () => {
  return (
    <div className="text-white space-y-6 sm:space-y-8 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 sm:mb-12 leading-tight">
        Importancia de antivirus y software seguro
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <div className="p-4 sm:p-6 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-300/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">Software Seguro</h3>
          <ul className="space-y-2 text-base sm:text-lg">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span>Evitar software pirata</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span>Descargar de fuentes oficiales</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span>Verificar firmas digitales</span>
            </li>
          </ul>
        </div>

        <div className="p-4 sm:p-6 bg-cyan-500/20 backdrop-blur-sm rounded-xl border border-cyan-300/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-300">Alternativas Código Abierto</h3>
          <ul className="space-y-2 text-base sm:text-lg">
            <li className="flex items-center gap-2">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span>ClamAV (antivirus gratuito)</span>
            </li>
            <li className="flex items-center gap-2">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span>LibreOffice vs MS Office</span>
            </li>
            <li className="flex items-center gap-2">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span>GIMP vs Photoshop</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-300/20 p-4 sm:p-6 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-300 flex items-center gap-2">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
          Actividad práctica:
        </h3>
        <ol className="space-y-2 text-base sm:text-lg list-decimal list-inside mb-3 sm:mb-4">
          <li>Verificar fuentes de descarga de software</li>
          <li>Revisar alternativas open source para herramientas comunes</li>
          <li>Abrir VirusTotal para revisar un archivo</li>
        </ol>
        <Button 
          asChild
          className="bg-yellow-600 hover:bg-yellow-700 text-white w-full sm:w-auto"
        >
          <a href="https://www.virustotal.com/" target="_blank" rel="noopener noreferrer">
            Abrir VirusTotal
          </a>
        </Button>
      </div>
    </div>
  );
};
