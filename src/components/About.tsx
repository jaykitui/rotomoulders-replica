import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import waterTankImg from '@/assets/water-tank.png';

const highlights = [
  'Food-grade, UV-stabilized polyethylene',
  'State-of-the-art manufacturing process',
  'Nationwide delivery coverage',
  'Trusted by thousands of Kenyans',
  'After-sales support and warranty',
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">Roto Tank</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Roto Tank is a leading provider of water storage solutions in Kenya. We are committed to delivering high-quality, durable, and affordable water tanks to meet the diverse needs of our customers. Our state-of-the-art manufacturing process ensures that every tank we produce meets the highest standards of quality and reliability.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission is to provide every Kenyan with access to safe and clean water storage. We believe in innovation, customer satisfaction, and contributing positively to the communities we serve.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-card rounded-3xl shadow-xl flex items-center justify-center p-12">
                <img
                  src={waterTankImg}
                  alt="Roto Tank Product"
                  className="w-full h-full object-contain animate-float"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
