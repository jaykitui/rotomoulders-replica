import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroBanner from '@/assets/hero-banner.jpg';

const WHATSAPP_NUMBER = '+254711350657';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, '')}?text=${encodeURIComponent('Hello Roto Tank, I would like to explore your products.')}`;

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              #1 Water Storage Solutions in Kenya
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6"
          >
            JOIN THE{' '}
            <span className="text-accent">ROTO FAMILY</span>
            <br />
            FOR QUALITY TANKS!!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-background/90 mb-8 max-w-lg"
          >
            Premium water storage solutions for homes, businesses, and industries. Built to last with food-grade materials.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#products">Explore Products</a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
