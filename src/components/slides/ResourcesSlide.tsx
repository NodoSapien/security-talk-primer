
import { Link, FileText, Users, Calendar } from "lucide-react";

export const ResourcesSlide = () => {
  const trainingPlatforms = [
    { name: "ISC2", url: "https://www.isc2.org/" },
    { name: "CompTIA", url: "https://www.comptia.org/home" },
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
    <div className="text-white space-y-6 sm:space-y-8 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 sm:mb-12">
        Recursos y próximos pasos
      </h2>
      
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300 flex items-center gap-2">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              Guías oficiales:
            </h3>
            <ul className="space-y-3">
              {officialResources.map((resource, index) => (
                <li key={index} className="flex items-center gap-3 text-base sm:text-lg">
                  <Link className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 underline transition-colors break-all"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-300 flex items-center gap-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              Plataformas de formación:
            </h3>
            <ul className="space-y-3">
              {trainingPlatforms.map((platform, index) => (
                <li key={index} className="flex items-center gap-3 text-base sm:text-lg">
                  <Link className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 underline transition-colors break-all"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-orange-300 flex items-center gap-2">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              Blogs y noticias:
            </h3>
            <ul className="space-y-3">
              {blogs.map((blog, index) => (
                <li key={index} className="flex items-center gap-3 text-base sm:text-lg">
                  <Link className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <a 
                    href={blog.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 underline transition-colors break-all"
                  >
                    {blog.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-300 flex items-center gap-2">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              Conferencias y eventos:
            </h3>
            <ul className="space-y-3">
              {conferences.map((conference, index) => (
                <li key={index} className="flex items-center gap-3 text-base sm:text-lg">
                  <Link className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <a 
                    href={conference.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 underline transition-colors break-all"
                  >
                    {conference.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-red-300 flex items-center gap-2">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
            Privacidad y derechos digitales:
          </h3>
          <ul className="space-y-3">
            {privacyResources.map((resource, index) => (
              <li key={index} className="flex items-center gap-3 text-base sm:text-lg">
                <Link className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 underline transition-colors break-all"
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
