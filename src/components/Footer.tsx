const WHATSAPP_NUMBER = '+254711350657';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">RT</span>
              </div>
              <span className="font-display font-bold text-xl">
                Roto<span className="text-primary">Tank</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Leading provider of water storage solutions in Kenya. Quality tanks for homes, businesses, and industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-primary transition-colors">
                  +254 711 350 657
                </a>
              </li>
              <li>
                <a href="mailto:sales@rototank.co.ke" className="hover:text-primary transition-colors">
                  sales@rototank.co.ke
                </a>
              </li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <p className="text-center text-background/50 text-sm">
            © {new Date().getFullYear()} Roto Tank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
