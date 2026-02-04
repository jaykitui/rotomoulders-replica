import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '254711350657';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('At what price is this available')}`;

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-accent flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm md:text-base">ROTO</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="nav" size="default" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Ask for Quote
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white"
            >
              <nav className="py-4 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors px-2 py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <Button variant="nav" size="lg" className="mt-2" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Ask for Quote
                  </a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
