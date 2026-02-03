import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Droplets, Shield } from 'lucide-react';
import waterTankImg from '@/assets/water-tank.png';
import hdpeDrumImg from '@/assets/hdpe-drum.png';

const WHATSAPP_NUMBER = '+254711350657';

const waterTanks = [
  { size: '1,000L', name: '1,000 Litres Cylindrical Tank', price: 'Ksh 5,500', description: 'Perfect for small households and residential use. Compact design that fits in tight spaces.' },
  { size: '2,000L', name: '2,000 Litres Cylindrical Tank', price: 'Ksh 10,500', description: 'Ideal for medium-sized families and small commercial establishments.' },
  { size: '3,000L', name: '3,000 Litres Cylindrical Tank', price: 'Ksh 13,500', description: 'A popular choice for larger homes, small businesses, and agricultural use.' },
  { size: '4,000L', name: '4,000 Litres Cylindrical Tank', price: 'Ksh 20,500', description: 'Great for agricultural use or properties with high water consumption.' },
  { size: '5,000L', name: '5,000 Litres Cylindrical Tank', price: 'Ksh 30,500', description: 'Sufficient for large families, guest houses, and commercial applications.' },
  { size: '6,000L', name: '6,000 Litres Cylindrical Tank', price: 'Ksh 40,500', description: 'Designed for significant water storage needs, including irrigation and small-scale farming.' },
  { size: '8,000L', name: '8,000 Litres Cylindrical Tank', price: 'Ksh 50,500', description: 'A robust solution for farms, schools, and community water projects.' },
  { size: '10,000L', name: '10,000 Litres Cylindrical Tank', price: 'Ksh 70,500', description: 'Our best-seller for large-scale water storage, ensuring a reliable supply for communities and industries.' },
  { size: '16,000L', name: '16,000 Litres Cylindrical Tank', price: 'Ksh 158,500', description: 'Maximum capacity for industrial, agricultural, and large community needs.' },
  { size: '20,000L', name: '20,000 Litres Cylindrical Tank', price: 'Ksh 193,500', description: 'Maximum capacity for industrial, agricultural, and large community needs.' },
  { size: '24,000L', name: '24,000 Litres Cylindrical Tank', price: 'Ksh 214,500', description: 'Maximum capacity for industrial, agricultural, and large community needs.' },
];

const hdpeDrums = [
  { size: '310L', name: '310 Litres HDPE Drum', price: 'Ksh 2,000', description: 'Durable and versatile HDPE drum for various storage needs, ideal for industrial liquids or large-volume waste.' },
  { size: '250L', name: '250 Litres HDPE Drum', price: 'Ksh 1,500', description: 'Standard size drum for chemical and liquid transport, featuring high impact resistance.' },
  { size: '210L', name: '210 Litres HDPE Drum', price: 'Ksh 1,250', description: 'Commonly used for oils, solvents, and non-hazardous materials. Excellent sealing properties.' },
  { size: '200L', name: '200 Litres HDPE Drum', price: 'Ksh 1,000', description: 'The most popular size for general industrial storage and transport.' },
];

const getWhatsAppLink = (productName: string, price: string) => {
  const message = `Hello Roto Tank, I would like to ask for a quote for the ${productName} (${price}).`;
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
};

interface ProductCardProps {
  product: {
    size: string;
    name: string;
    price: string;
    description: string;
  };
  image: string;
  type: 'tank' | 'drum';
  index: number;
}

const ProductCard = ({ product, image, type, index }: ProductCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group"
  >
    <div className="relative aspect-square bg-secondary/20 p-4 flex items-center justify-center">
      <img
        src={image}
        alt={product.name}
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
      />
      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-semibold text-xs">
        {product.size}
      </Badge>
    </div>
    
    <div className="p-4">
      <h3 className="font-display font-semibold text-foreground text-sm mb-1 line-clamp-1">
        {product.name}
      </h3>
      <p className="text-accent font-bold text-lg mb-2">{product.price}</p>
      <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
        {product.description}
      </p>
      
      <div className="flex gap-3 mb-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Droplets className="w-3 h-3 text-primary" />
          <span>{type === 'tank' ? 'Food Grade' : 'Industrial Grade'}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Shield className="w-3 h-3 text-primary" />
          <span>{type === 'tank' ? 'UV Resistant' : 'Chemical Resistant'}</span>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 text-xs" asChild>
          <a href="#contact">View Details</a>
        </Button>
        <Button variant="cta" size="sm" className="flex-1 text-xs" asChild>
          <a href={getWhatsAppLink(product.name, product.price)} target="_blank" rel="noopener noreferrer">
            Ask for Quote
          </a>
        </Button>
      </div>
    </div>
  </motion.div>
);

export const Products = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Products
          </h2>
          <p className="text-muted-foreground">
            We deliver across all major towns countrywide.
          </p>
        </motion.div>

        {/* Water Tanks */}
        <div className="mb-12">
          <h3 className="font-display text-xl font-bold text-foreground mb-6">
            Water Tanks (Kentank, Toptank, Roto Tank)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {waterTanks.map((product, index) => (
              <ProductCard
                key={product.name}
                product={product}
                image={waterTankImg}
                type="tank"
                index={index}
              />
            ))}
          </div>
        </div>

        {/* HDPE Drums */}
        <div>
          <h3 className="font-display text-xl font-bold text-foreground mb-6">
            HDPE Drums
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {hdpeDrums.map((product, index) => (
              <ProductCard
                key={product.name}
                product={product}
                image={hdpeDrumImg}
                type="drum"
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
