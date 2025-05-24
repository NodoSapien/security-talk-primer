
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TitleSlide } from "./slides/TitleSlide";
import { ObjectivesSlide } from "./slides/ObjectivesSlide";
import { WhyMattersSlide } from "./slides/WhyMattersSlide";
import { AntivirusSlide } from "./slides/AntivirusSlide";
import { NetworkSecuritySlide } from "./slides/NetworkSecuritySlide";
import { PhishingSlide } from "./slides/PhishingSlide";
import { PasswordsSlide } from "./slides/PasswordsSlide";
import { MalwareSlide } from "./slides/MalwareSlide";
import { EncryptionSlide } from "./slides/EncryptionSlide";
import { ResourcesSlide } from "./slides/ResourcesSlide";
import { ContactSlide } from "./slides/ContactSlide";

const slides = [
  TitleSlide,
  ObjectivesSlide,
  WhyMattersSlide,
  AntivirusSlide,
  NetworkSecuritySlide,
  PhishingSlide,
  PasswordsSlide,
  MalwareSlide,
  EncryptionSlide,
  ResourcesSlide,
  ContactSlide,
];

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto animate-fade-in">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black/20 backdrop-blur-sm rounded-full p-4 flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-blue-400 w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-6 right-6 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white/80 text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};
