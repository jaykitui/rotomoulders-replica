import { motion } from 'framer-motion';
import { Shield, Timer, Maximize, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'High-Quality Materials',
    description: 'Our tanks are made from food-grade, UV-stabilized polyethylene to ensure the safety and purity of your water.',
  },
  {
    icon: Timer,
    title: 'Durable & Long-lasting',
    description: 'Designed to withstand harsh weather conditions, our tanks are built to last, providing you with a long-term water storage solution.',
  },
  {
    icon: Maximize,
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
    <section className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Roto Tank</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver quality, durability, and value in every tank we manufacture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 card-shadow text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
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
