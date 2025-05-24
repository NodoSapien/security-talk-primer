
import { Link, FileText, Users, Calendar, Shield } from "lucide-react";

export const ResourcesSlide = () => {
  const trainingPlatforms = [
    { name: "ISC2", url: "https://www.isc2.org/" },
    { name: "CompTIA", url: "https://www.comptia.org/home" },
    { name: "NIST NICE", url: "https://www.nist.gov/itl/applied-cybersecurity/nice/resources/online-learning-content" },
    { name: "Linux Foundation Training", url: "https://training.linuxfoundation.org/" }
  ];

  const blogs = [
    { name: "Security Intelligence", url: "https://securityintelligence.com/" },
    { name: "Krebs on Security", url: "https://krebsonsecurity.com/" },
    { name: "Graham Cluley", url: "https://grahamcluley.com/" }
  ];

  const conferences = [
    { name: "Black Hat", url: "https://www.blackhat.com/" },
    { name: "RSA Conference", url: "https://www.rsaconference.com/" },
    { name: "CyberUK", url: "https://www.cyberuk.uk/" }
  ];

  const officialResources = [
    { name: "CISA", url: "https://www.cisa.gov" },
    { name: "NIST Basics", url: "https://www.nist.gov/cyberframework" }
  ];

  const privacyResources = [
    { name: "Terms of Service; Didn't Read", url: "https://tosdr.org/es" },
    { name: "Electronic Frontier Foundation", url: "https://www.eff.org/" }
  ];

  return (
    <div className="text-white space-y-8">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
        Recursos y próximos pasos
      </h2>
      
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Guías oficiales:
            </h3>
            <ul className="space-y-3">
              {officialResources.map((resource, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <Link className="w-5 h-5 text-cyan-400" />
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 underline transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-300 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Plataformas de formación recomendadas:
            </h3>
            <ul className="space-y-3">
              {trainingPlatforms.map((platform, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <Link className="w-5 h-5 text-cyan-400" />
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 underline transition-colors"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-orange-300 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Blogs y noticias de referencia:
            </h3>
            <ul className="space-y-3">
              {blogs.map((blog, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <Link className="w-5 h-5 text-cyan-400" />
                  <a 
                    href={blog.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 underline transition-colors"
                  >
                    {blog.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Conferencias y eventos:
            </h3>
            <ul className="space-y-3">
              {conferences.map((conference, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <Link className="w-5 h-5 text-cyan-400" />
                  <a 
                    href={conference.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 underline transition-colors"
                  >
                    {conference.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-red-300 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Lecturas sobre privacidad y derechos digitales:
          </h3>
          <ul className="space-y-3">
            {privacyResources.map((resource, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <Link className="w-5 h-5 text-cyan-400" />
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 underline transition-colors"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-300/20 text-center">
          <h3 className="text-2xl font-bold mb-2 text-green-300">Mantente al día:</h3>
          <p className="text-lg">Suscríbete a boletines de seguridad</p>
        </div>
      </div>
    </div>
  );
};
