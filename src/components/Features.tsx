import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Layers, DollarSign } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'High-Quality Materials',
    description: 'Our tanks are made from food-grade, UV-stabilized polyethylene to ensure the safety and purity of your water.',
  },
  {
    icon: Clock,
    title: 'Durable & Long-lasting',
    description: 'Designed to withstand harsh weather conditions, our tanks are built to last, providing you with a long-term water storage solution.',
  },
  {
    icon: Layers,
    title: 'Wide Range of Sizes',
    description: 'From 1,000L to 24,000L, we offer a variety of sizes to meet your specific needs, whether for a small home or a large farm.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Get the best value for your money with our affordable prices without compromising on quality.',
  },
];

export const Features = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why Choose Roto Tank?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
