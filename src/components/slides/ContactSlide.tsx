
import { Mail, Linkedin, MessageCircle } from "lucide-react";

export const ContactSlide = () => {
  return (
    <div className="text-white space-y-6 sm:space-y-8 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 sm:mb-12">
        Preguntas y contacto
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center">
          <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400 mx-auto mb-4 sm:mb-6" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-300">¿Dudas?</h3>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                <span>Email:</span>
              </div>
              <a 
                href="mailto:fariasjesusRodolfo+SegurityTalk@gmail.com"
                className="text-cyan-300 hover:text-cyan-200 underline transition-colors break-all"
              >
                fariasjesusRodolfo+SegurityTalk@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg">
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <span>LinkedIn:</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/jesus-r-gil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200 underline transition-colors break-all"
              >
                https://www.linkedin.com/in/jesus-r-gil/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
