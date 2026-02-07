import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroBannerGirl from '@/assets/hero-banner-girl.webp';
import heroBanner1 from '@/assets/hero-banner-1.webp';
import heroBannerRoto from '@/assets/hero-banner-roto.webp';
import heroBanner3 from '@/assets/hero-banner-3.webp';

// Slides in exact order as rotomoulders.shop
const slides = [
  {
    id: 1,
    image: heroBannerGirl,
    alt: 'Girl with Roto Tank',
  },
  {
    id: 2,
    image: heroBanner1,
    alt: 'Roto Tank Banner 1',
  },
  {
    id: 3,
    image: heroBannerRoto,
    alt: 'Roto Tank Collection',
  },
  {
    id: 4,
    image: heroBanner3,
    alt: 'Roto Tank Banner 3',
  },
];

const AUTOPLAY_INTERVAL = 8000;
const INITIAL_DELAY = 3000;
const TRANSITION_DURATION = 0.8;

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Initial delay before auto-play starts
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setHasStarted(true);
    }, INITIAL_DELAY);

    return () => clearTimeout(initialTimer);
  }, []);

  // Infinite auto-play with pause on hover (only after initial delay)
  useEffect(() => {
    if (isPaused || !hasStarted) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, hasStarted, nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="home"
      className="relative h-[85vh] min-h-[600px] w-full pt-14 md:pt-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-width Image Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: TRANSITION_DURATION, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
      </button>

      {/* Bottom Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent w-8'
                : 'bg-background/70 hover:bg-background w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
