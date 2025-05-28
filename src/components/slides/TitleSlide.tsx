
import { Shield } from "lucide-react";

export const TitleSlide = () => {
  return (
    <div className="text-center text-white space-y-4 sm:space-y-8 py-8 sm:py-16 px-4">
      <div className="flex justify-center mb-4 sm:mb-8">
        <div className="p-4 sm:p-6 bg-blue-500/20 rounded-full">
          <Shield className="w-16 h-16 sm:w-24 sm:h-24 text-blue-400" />
        </div>
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
        Ciberseguridad en Dispositivos Personales
      </h1>
      
      <div className="text-lg sm:text-xl text-gray-300 space-y-2">
        <p>Ponente: <a href="https://gravatar.com/jesusrgil" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">Jesus Rodolfo Gil Farias</a></p>
      </div>
      
      <div className="mt-8 sm:mt-12 text-gray-400">
        <p className="text-base sm:text-lg">Protege tu vida digital con conocimientos prácticos</p>
      </div>
    </div>
  );
};
