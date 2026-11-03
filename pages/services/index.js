
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-24 md:py-32 flex flex-col justify-center overflow-x-hidden">
      <Circles />

      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-8">

          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">

            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              What I Do <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-white/70"
            >
              I build reliable, scalable, and maintainable backend
              solutions. From designing REST APIs to managing databases,
              I focus on building systems that solve real-world problems.
            </motion.p>

          </div>

          {/* Slider */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>

        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Services;
