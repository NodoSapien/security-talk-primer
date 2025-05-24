
import { Shield } from "lucide-react";

export const TitleSlide = () => {
  return (
    <div className="text-center text-white space-y-8 py-16">
      <div className="flex justify-center mb-8">
        <div className="p-6 bg-blue-500/20 rounded-full">
          <Shield className="w-24 h-24 text-blue-400" />
        </div>
      </div>
      
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Ciberseguridad en Dispositivos Personales
      </h1>
      
      <div className="text-xl text-gray-300 space-y-2">
        <p>Ponente: <span className="text-blue-400 font-semibold">Jesús Gil</span></p>
      </div>
      
      <div className="mt-12 text-gray-400">
        <p>Protege tu vida digital con conocimientos prácticos</p>
      </div>
    </div>
  );
};
