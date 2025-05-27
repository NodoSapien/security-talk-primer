
import { Key, Shield, CheckCircle } from "lucide-react";

export const PasswordsSlide = () => {
  return (
    <div className="text-white space-y-6 sm:space-y-8 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 sm:mb-12">
        Contraseñas y MFA
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <div className="space-y-4 sm:space-y-6">
          <div className="p-4 sm:p-6 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-300/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">Contraseña fuerte</h3>
            <p className="text-base sm:text-lg">≥12 caracteres, mezcla de letras, números y símbolos</p>
          </div>

          <div className="p-4 sm:p-6 bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-300/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-300">Gestor integrado</h3>
            <ul className="space-y-2 text-base sm:text-lg">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span>Llavero de Apple (iOS/macOS)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span>Administrador de contraseñas de Chrome/Edge</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-300/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-300">Autenticación multifactor (MFA)</h3>
          <ul className="space-y-3 text-base sm:text-lg">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <span>SMS o app (Google Authenticator, Authy)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-300/20 p-4 sm:p-6 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-300 flex items-center gap-2">
          <Key className="w-5 h-5 sm:w-6 sm:h-6" />
          Actividad práctica:
        </h3>
        <ol className="space-y-2 text-base sm:text-lg list-decimal list-inside">
          <li>Crear contraseña en el gestor nativo</li>
          <li>Activar MFA en Gmail o cuenta Microsoft</li>
        </ol>
      </div>
    </div>
  );
};
