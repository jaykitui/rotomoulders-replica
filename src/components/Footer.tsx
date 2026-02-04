import { Phone, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '254711350657';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 48 48"
              className="w-8 h-8 flex-shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="44" height="44" rx="8" className="fill-accent" />
              <path
                d="M14 12C14 10.8954 14.8954 10 16 10H32C33.1046 10 34 10.8954 34 12V14C34 14 36 15 36 18V34C36 36.2091 34.2091 38 32 38H16C13.7909 38 12 36.2091 12 34V18C12 15 14 14 14 14V12Z"
                className="fill-white"
              />
              <ellipse cx="24" cy="14" rx="8" ry="3" className="fill-accent/30" />
              <path d="M16 22H32M16 27H32M16 32H28" className="stroke-accent" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="font-display font-bold text-lg text-background">ROTO Tank Solutions</span>
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
