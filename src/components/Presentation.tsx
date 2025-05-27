
import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TitleSlide } from "./slides/TitleSlide";
import { ObjectivesSlide } from "./slides/ObjectivesSlide";
import { WhyMattersSlide } from "./slides/WhyMattersSlide";
import { AntivirusSlide } from "./slides/AntivirusSlide";
import { NetworkSecuritySlide } from "./slides/NetworkSecuritySlide";
import { PhishingSlide } from "./slides/PhishingSlide";
import { AISecuritySlide } from "./slides/AISecuritySlide";
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
  AISecuritySlide,
  PasswordsSlide,
  MalwareSlide,
  EncryptionSlide,
  ResourcesSlide,
  ContactSlide,
];

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNavigation, setShowNavigation] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(7 * 60); // 7 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 7 * 60; // 7 minutes per slide

  // Timer functions
  const startTimer = () => {
    setIsTimerRunning(true);
    setTimeRemaining(SLIDE_DURATION);
    
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    
    timerIntervalRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setIsTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimeRemaining(SLIDE_DURATION);
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    return ((SLIDE_DURATION - timeRemaining) / SLIDE_DURATION) * 100;
  };

  // Función para detectar si es dispositivo móvil
  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  // Función para mostrar navegación y configurar auto-ocultación
  const showNavigationWithTimeout = useCallback(() => {
    setShowNavigation(true);
    
    if (isMobile()) {
      // Limpiar timeout anterior si existe
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      
      // Configurar nuevo timeout para ocultar después de 3 segundos
      hideTimeoutRef.current = setTimeout(() => {
        setShowNavigation(false);
      }, 3000);
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    showNavigationWithTimeout();
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    showNavigationWithTimeout();
    resetTimer();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    showNavigationWithTimeout();
    resetTimer();
  };

  // Funciones para manejar gestos táctiles
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current || !touchStartY.current || !touchEndY.current) return;

    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - touchEndY.current;
    const isLeftSwipe = distanceX > 50;
    const isRightSwipe = distanceX < -50;
    const isDownSwipe = distanceY < -50;

    // Gesto hacia abajo para mostrar navegación
    if (isDownSwipe && Math.abs(distanceY) > Math.abs(distanceX)) {
      showNavigationWithTimeout();
    }
    // Gestos horizontales para cambiar diapositivas
    else if (Math.abs(distanceX) > Math.abs(distanceY)) {
      if (isLeftSwipe && currentSlide < slides.length - 1) {
        nextSlide();
      }
      if (isRightSwipe && currentSlide > 0) {
        prevSlide();
      }
    }

    // Resetear valores
    touchStartX.current = null;
    touchEndX.current = null;
    touchStartY.current = null;
    touchEndY.current = null;
  }, [currentSlide, showNavigationWithTimeout]);

  // Efecto para configurar auto-ocultación inicial
  useEffect(() => {
    if (isMobile()) {
      showNavigationWithTimeout();
    }
    
    // Cleanup al desmontar componente
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [showNavigationWithTimeout]);

  // Efecto para mostrar navegación al cambiar de diapositiva
  useEffect(() => {
    showNavigationWithTimeout();
  }, [currentSlide, showNavigationWithTimeout]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Timer Button */}
      <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowTimer(!showTimer)}
          className="bg-black/20 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
        >
          <Timer className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
        
        {showTimer && (
          <div className="mt-2 bg-black/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-white/90 min-w-[120px]">
            <div className="text-center text-sm sm:text-base font-mono mb-2">
              {formatTime(timeRemaining)}
            </div>
            <Progress value={getProgressPercentage()} className="h-1 sm:h-2 mb-2" />
            <div className="flex gap-1 justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={isTimerRunning ? pauseTimer : startTimer}
                className="text-white hover:bg-white/20 h-6 px-2 text-xs"
              >
                {isTimerRunning ? "⏸️" : "▶️"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetTimer}
                className="text-white hover:bg-white/20 h-6 px-2 text-xs"
              >
                🔄
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Slide Content */}
      <div 
        className="flex-1 flex items-center justify-center p-2 sm:p-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full max-w-6xl mx-auto animate-fade-in">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation */}
      <div className={`fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-black/20 backdrop-blur-sm rounded-full p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all duration-300 ${
        showNavigation ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 md:translate-y-0 md:opacity-100'
      }`}>
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-8 w-8 sm:h-10 sm:w-10 p-0"
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>

        <div className="flex gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-blue-400 w-6 sm:w-8"
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
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-8 w-8 sm:h-10 sm:w-10 p-0"
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className={`fixed top-4 sm:top-6 right-4 sm:right-6 bg-black/20 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-white/80 text-xs sm:text-sm transition-all duration-300 ${
        showNavigation ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100'
      }`}>
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};
