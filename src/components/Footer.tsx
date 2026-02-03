import { Phone, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+254711350657';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, '')}`;

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
              <span className="text-white font-display font-bold text-xs">ROTO</span>
            </div>
            <span className="font-display font-bold text-lg">Roto Tank</span>
          </div>
          
          <p className="text-background/70 text-sm text-center">
            © {new Date().getFullYear()} Roto Tank. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call us</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
