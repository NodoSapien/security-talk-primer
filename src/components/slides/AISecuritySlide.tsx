
import { Brain, Lock, Shield } from "lucide-react";

export const AISecuritySlide = () => {
  return (
    <div className="text-white space-y-6 sm:space-y-8 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 sm:mb-12">
        Seguridad de datos al usar IA
      </h2>
      
      <div className="grid gap-6 sm:gap-8 max-w-5xl mx-auto">
        <div className="p-4 sm:p-6 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-300/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-300 flex items-center gap-2">
            <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
            Modelos Locales
          </h3>
          <p className="text-base sm:text-lg leading-relaxed">
            Ejecutar modelos de IA localmente exige asegurar los datos de entrenamiento y resultados. 
            El cifrado y el control de acceso evitan fugas y accesos no autorizados.
          </p>
        </div>

        <div className="p-4 sm:p-6 bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-300/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-300 flex items-center gap-2">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
            Gemini Educativo
          </h3>
          <p className="text-base sm:text-lg leading-relaxed">
            En la versión estudiantil de Gemini para UCAB: <strong>Tus conversaciones no se usan para mejorar nuestros modelos.</strong> 
            Sin embargo, siempre verifica las respuestas ya que Gemini puede cometer errores.
          </p>
        </div>
      </div>

      <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-300/20 p-4 sm:p-6 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300 flex items-center gap-2">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
          Buenas prácticas:
        </h3>
        <ul className="space-y-2 text-base sm:text-lg list-disc list-inside">
          <li>No compartir información confidencial con IA pública</li>
          <li>Revisar políticas de privacidad de servicios de IA</li>
          <li>Considerar modelos locales para datos sensibles</li>
          <li>Verificar siempre las respuestas de IA</li>
        </ul>
      </div>
    </div>
  );
};
