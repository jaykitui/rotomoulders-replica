import { motion } from 'framer-motion';
import waterTankImg from '@/assets/water-tank.png';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            About Roto Tank
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Roto Tank is a leading provider of water storage solutions in Kenya. We are committed to delivering high-quality, durable, and affordable water tanks to meet the diverse needs of our customers. Our state-of-the-art manufacturing process ensures that every tank we produce meets the highest standards of quality and reliability.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Our mission is to provide every Kenyan with access to safe and clean water storage. We believe in innovation, customer satisfaction, and contributing positively to the communities we serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <img
              src={waterTankImg}
              alt="About Roto Tank"
              className="max-w-sm w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
