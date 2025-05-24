
import { Mail, Linkedin, MessageCircle, Shield } from "lucide-react";

export const ContactSlide = () => {
  const privacyResources = [
    { name: "Terms of Service; Didn't Read", url: "https://tosdr.org/es" },
    { name: "Electronic Frontier Foundation", url: "https://www.eff.org/" }
  ];

  return (
    <div className="text-white space-y-8">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
        Preguntas y contacto
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center">
          <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-6 text-blue-300">¿Dudas?</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-lg">
              <Mail className="w-6 h-6 text-cyan-400" />
              <span>Email:</span>
              <a 
                href="mailto:fariasjesusRodolfo+SegurityTalk@gmail.com"
                className="text-cyan-300 hover:text-cyan-200 underline transition-colors"
              >
                fariasjesusRodolfo+SegurityTalk@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-lg">
              <Linkedin className="w-6 h-6 text-blue-400" />
              <span>LinkedIn:</span>
              <a 
                href="https://www.linkedin.com/in/jesus-r-gil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200 underline transition-colors"
              >
                https://www.linkedin.com/in/jesus-r-gil/
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 bg-red-500/20 backdrop-blur-sm rounded-xl border border-red-300/20">
          <h3 className="text-2xl font-bold mb-4 text-red-300 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Lecturas sobre privacidad y derechos digitales:
          </h3>
          <ul className="space-y-3">
            {privacyResources.map((resource, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-300 hover:text-red-200 underline transition-colors"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
