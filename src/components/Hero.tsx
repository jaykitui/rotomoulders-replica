import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
 import heroBannerRoto from '@/assets/hero-banner-roto.webp';
 import rotoTankImg from '@/assets/roto-tank.png';

const slides = [
  {
    id: 1,
     image: heroBannerRoto,
     type: 'banner' as const,
     isDefault: true,
  },
  {
    id: 2,
     image: rotoTankImg,
     type: 'product' as const,
  },
  {
    id: 3,
     type: 'text' as const,
     title: 'OUR ROTO TANK ASSURES',
     highlight: 'NOTHING BUT',
     subtitle: 'THE HIGHEST STANDARDS',
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Only auto-rotate if user hasn't interacted
    if (hasInteracted) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [hasInteracted]);

  const goToSlide = (index: number) => {
    setHasInteracted(true);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setHasInteracted(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setHasInteracted(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

   const currentSlideData = slides[currentSlide];
 
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] pt-14 md:pt-16 overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
           {/* Banner Slide */}
           {currentSlideData.type === 'banner' && (
             <div className="absolute inset-0">
               <img
                 src={currentSlideData.image}
                 alt="Hero background"
                 className="w-full h-full object-cover"
               />
             </div>
           )}
 
           {/* Product Slide */}
           {currentSlideData.type === 'product' && (
             <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-rose-50 to-white flex items-center justify-center">
               <motion.img
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6 }}
                 src={currentSlideData.image}
                 alt="ROTO Tank"
                 className="max-h-[70%] w-auto object-contain drop-shadow-2xl"
               />
             </div>
           )}
 
           {/* Text Slide */}
           {currentSlideData.type === 'text' && (
             <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-cyan-600 flex items-center justify-center text-center">
               <div className="max-w-4xl px-4">
                 <motion.h1
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                   className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                 >
                   {currentSlideData.title}
                 </motion.h1>
                 <motion.p
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.3 }}
                   className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                 >
                   <span className="text-accent">{currentSlideData.highlight}</span>
                 </motion.p>
                 <motion.p
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.4 }}
                   className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
                 >
                   {currentSlideData.subtitle}
                 </motion.p>
                 <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.5 }}
                 >
                   <Button variant="cta" size="xl" asChild>
                     <a href="#products">Explore Products</a>
                   </Button>
                 </motion.div>
               </div>
             </div>
           )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
         className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
         className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-accent w-8'
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
