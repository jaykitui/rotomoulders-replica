import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+254711350657';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, '')}?text=${encodeURIComponent('At what price is this available')}`;

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 flex justify-between pointer-events-none">
      {/* Call Button - Left */}
      <motion.a
        href={`tel:${WHATSAPP_NUMBER}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="pointer-events-auto flex items-center gap-2 bg-foreground text-background px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <Phone className="w-4 h-4" />
        <span className="font-medium text-sm">Call us now</span>
      </motion.a>

      {/* WhatsApp Button - Right */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="pointer-events-auto flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="font-medium text-sm">WhatsApp us now</span>
      </motion.a>
    </div>
  );
};
