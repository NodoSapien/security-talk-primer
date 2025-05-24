
import { Mail, Users } from "lucide-react";

export const ContactSlide = () => {
  return (
    <div className="text-white space-y-12 text-center">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-16">
        Preguntas y contacto
      </h2>
      
      <div className="text-4xl font-bold text-cyan-300 mb-8">
        ¿Dudas?
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="p-8 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-300/20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Mail className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold text-blue-300">Email:</h3>
          </div>
          <a 
            href="mailto:fariasjesusRodolfo+SegurityTalk@gmail.com"
            className="text-xl text-cyan-300 hover:text-cyan-200 transition-colors break-all"
          >
            fariasjesusRodolfo+SegurityTalk@gmail.com
          </a>
        </div>

        <div className="p-8 bg-cyan-500/20 backdrop-blur-sm rounded-xl border border-cyan-300/20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Users className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-bold text-cyan-300">LinkedIn:</h3>
          </div>
          <a 
            href="https://www.linkedin.com/in/jesus-r-gil/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-300 hover:text-blue-200 transition-colors"
          >
            linkedin.com/in/jesus-r-gil/
          </a>
        </div>
      </div>

      <div className="mt-16 text-gray-400 text-lg">
        <p>¡Gracias por su atención!</p>
      </div>
    </div>
  );
};
