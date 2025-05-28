
# Arquitectura Técnica

## Estructura del Proyecto

### 1. Organización de Archivos

```
src/
├── components/
│   ├── Presentation.tsx          # Componente principal
│   ├── slides/                   # Diapositivas individuales
│   │   ├── TitleSlide.tsx
│   │   ├── ObjectivesSlide.tsx
│   │   ├── WhyMattersSlide.tsx
│   │   ├── AntivirusSlide.tsx
│   │   ├── NetworkSecuritySlide.tsx
│   │   ├── PhishingSlide.tsx
│   │   ├── AISecuritySlide.tsx
│   │   ├── PasswordsSlide.tsx
│   │   ├── MalwareSlide.tsx
│   │   ├── EncryptionSlide.tsx
│   │   ├── ResourcesSlide.tsx
│   │   └── ContactSlide.tsx
│   └── ui/                       # Componentes base (shadcn/ui)
├── pages/
│   └── Index.tsx                 # Página principal
└── docs/                         # Documentación del proyecto
```

### 2. Componente Principal (Presentation.tsx)

#### Estado de la Aplicación
```typescript
// Estado de navegación
const [currentSlide, setCurrentSlide] = useState(0);
const [showNavigation, setShowNavigation] = useState(true);

// Estado del temporizador
const [slideDurationMinutes, setSlideDurationMinutes] = useState(7);
const [timeRemaining, setTimeRemaining] = useState(7 * 60);
const [isTimerRunning, setIsTimerRunning] = useState(false);
const [showTimer, setShowTimer] = useState(false);
const [isEditingDuration, setIsEditingDuration] = useState(false);
const [beepPlayed, setBeepPlayed] = useState(false);
```

#### Referencias y Efectos
```typescript
// Referencias para gestos táctiles
const touchStartX = useRef<number | null>(null);
const touchEndX = useRef<number | null>(null);
const touchStartY = useRef<number | null>(null);
const touchEndY = useRef<number | null>(null);

// Referencias para timers
const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
const audioContextRef = useRef<AudioContext | null>(null);
```

### 3. Sistema de Navegación

#### Funcionalidades Implementadas
```typescript
// Navegación básica
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

// Navegación directa
const goToSlide = (index: number) => {
  setCurrentSlide(index);
  showNavigationWithTimeout();
  resetTimer();
};
```

#### Detección de Gestos Táctiles
```typescript
const handleTouchEnd = useCallback(() => {
  if (!touchStartX.current || !touchEndX.current) return;

  const distanceX = touchStartX.current - touchEndX.current;
  const distanceY = touchStartY.current - touchEndY.current;
  const isLeftSwipe = distanceX > 50;
  const isRightSwipe = distanceX < -50;
  const isDownSwipe = distanceY < -50;

  // Lógica de navegación basada en gestos
  if (isDownSwipe && Math.abs(distanceY) > Math.abs(distanceX)) {
    showNavigationWithTimeout();
  } else if (Math.abs(distanceX) > Math.abs(distanceY)) {
    if (isLeftSwipe && currentSlide < slides.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }
  }
}, [currentSlide, showNavigationWithTimeout]);
```

### 4. Sistema de Temporizador

#### Web Audio API para Sonidos
```typescript
const createBeepSound = useCallback(() => {
  if (!audioContextRef.current) {
    audioContextRef.current = new (window.AudioContext || 
      (window as any).webkitAudioContext)();
  }
  
  const context = audioContextRef.current;
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  
  oscillator.frequency.setValueAtTime(800, context.currentTime);
  oscillator.type = 'sine';
  
  gainNode.gain.setValueAtTime(0.3, context.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.5);
  
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 0.5);
}, []);
```

#### Lógica del Timer
```typescript
const startTimer = () => {
  setIsTimerRunning(true);
  setTimeRemaining(SLIDE_DURATION);
  setBeepPlayed(false);
  
  timerIntervalRef.current = setInterval(() => {
    setTimeRemaining(prev => {
      if (prev <= 1) {
        setIsTimerRunning(false);
        return 0;
      }
      
      // Play beep sound in the last 15 seconds
      if (prev <= 15 && !beepPlayed) {
        createBeepSound();
        setBeepPlayed(true);
      }
      
      return prev - 1;
    });
  }, 1000);
};
```

### 5. Sistema de Diapositivas

#### Registro de Diapositivas
```typescript
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
```

#### Renderizado Dinámico
```typescript
const CurrentSlideComponent = slides[currentSlide];

return (
  <div className="w-full max-w-6xl mx-auto animate-fade-in">
    <CurrentSlideComponent />
  </div>
);
```

### 6. Responsive Design y Adaptabilidad

#### Detección de Dispositivo Móvil
```typescript
const isMobile = () => {
  return window.innerWidth <= 768;
};
```

#### Auto-ocultación en Móviles
```typescript
const showNavigationWithTimeout = useCallback(() => {
  setShowNavigation(true);
  
  if (isMobile()) {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    
    hideTimeoutRef.current = setTimeout(() => {
      setShowNavigation(false);
    }, 3000);
  }
}, []);
```

### 7. Estilos y Animaciones

#### Clases CSS Dinámicas
```typescript
className={`transition-all duration-300 ${
  showNavigation 
    ? 'translate-y-0 opacity-100' 
    : '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100'
}`}
```

#### Efectos Visuales del Timer
```typescript
<Progress 
  value={getProgressPercentage()} 
  className={`h-1 sm:h-2 mb-2 ${
    timeRemaining <= 15 ? 'animate-pulse' : ''
  }`}
/>
```

### 8. Optimizaciones de Performance

#### useCallback para Funciones Costosas
```typescript
const showNavigationWithTimeout = useCallback(() => {
  // Lógica optimizada
}, []);

const handleTouchEnd = useCallback(() => {
  // Manejo de gestos optimizado
}, [currentSlide, showNavigationWithTimeout]);
```

#### Cleanup de Efectos
```typescript
useEffect(() => {
  return () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
  };
}, [showNavigationWithTimeout]);
```

### 9. TypeScript y Tipado

#### Interfaces y Tipos
```typescript
// Tipos para gestos táctiles
interface TouchRefs {
  touchStartX: React.MutableRefObject<number | null>;
  touchEndX: React.MutableRefObject<number | null>;
  touchStartY: React.MutableRefObject<number | null>;
  touchEndY: React.MutableRefObject<number | null>;
}

// Tipos para estado del timer
interface TimerState {
  isRunning: boolean;
  timeRemaining: number;
  duration: number;
  beepPlayed: boolean;
}
```

### 10. Integración con Shadcn/UI

#### Componentes Utilizados
- **Button**: Navegación y controles del timer
- **Progress**: Barra de progreso del temporizador
- **Input**: Campo de duración editable

#### Personalización con Tailwind
```typescript
<Button
  variant="outline"
  size="sm"
  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
>
```

### 11. Arquitectura de Eventos

#### Event Handlers Centralizados
```typescript
// Eventos de teclado (futuro)
// Eventos de mouse
// Eventos táctiles
// Eventos de timer
```

#### Propagación de Estado
- Estado centralizado en componente principal
- Props drilling mínimo
- Callbacks para comunicación ascendente

### 12. Escalabilidad y Mantenimiento

#### Modularidad
- Cada diapositiva es un componente independiente
- Funcionalidades separadas por responsabilidad
- Fácil agregar nuevas características

#### Extensibilidad
- Sistema de slides fácilmente extensible
- Hooks personalizados para funcionalidades complejas
- API consistente para nuevos componentes
