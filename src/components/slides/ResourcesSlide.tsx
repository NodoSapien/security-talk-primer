
import { Link, FileText } from "lucide-react";

export const ResourcesSlide = () => {
  const resources = [
    {
      category: "Guías oficiales:",
      items: [
        { name: "CISA", url: "https://www.cisa.gov" },
        { name: "NIST Basics", url: "https://www.nist.gov/cyberframework" }
      ]
    },
    {
      category: "Blogs recomendados:",
      items: [
        { name: "Krebs on Security", url: "#" },
        { name: "Troy Hunt's \"Have I Been Pwned\"", url: "#" }
      ]
    }
  ];

  return (
    <div className="text-white space-y-8">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
        Recursos y próximos pasos
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {resources.map((resource, index) => (
          <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              {resource.category}
            </h3>
            <ul className="space-y-3">
              {resource.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-3 text-lg">
                  <Link className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-300">{item.name}</span>
                  {item.url !== "#" && (
                    <span className="text-gray-400">: {item.url}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="p-6 bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-300/20 text-center">
          <h3 className="text-2xl font-bold mb-2 text-green-300">Mantente al día:</h3>
          <p className="text-lg">Suscríbete a boletines de seguridad</p>
        </div>
      </div>
    </div>
  );
};
