
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import {
  FaLightbulb,
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
} from 'react-icons/fa';

const approaches = [
  {
    icon: <FaLightbulb />,
    title: 'Understand the Problem',
    description:
      'I start by understanding business requirements and identifying the actual problem before choosing a technical solution.',
  },
  {
    icon: <FaCode />,
    title: 'Write Maintainable Code',
    description:
      'I focus on clean architecture, reusable components, readable code, and development practices that make applications easier to maintain.',
  },
  {
    icon: <FaDatabase />,
    title: 'Optimize Performance',
    description:
      'I pay attention to database design, query optimization, caching, and efficient API responses.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Build Secure Systems',
    description:
      'I prioritize authentication, authorization, data protection, and reliable application behavior.',
  },
  {
    icon: <FaRocket />,
    title: 'Test and Deliver',
    description:
      'I believe in testing, debugging, deployment discipline, and continuously improving software after delivery.',
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-full bg-primary/30 py-24 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col justify-center">

        {/* Heading */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-8"
        >
          <h2 className="h2">
            How I <span className="text-accent">Work.</span>
          </h2>

          <p className="max-w-[550px] mx-auto text-white/60 mt-3 text-sm">
            My approach to building software goes beyond writing code.
            I focus on understanding problems, creating reliable solutions,
            and continuously improving the systems I work on.
          </p>
        </motion.div>

        {/* Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {approaches.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.2 + index * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 group"
            >

              {/* Icon */}
              <div className="text-accent text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Number */}
              <span className="text-white/30 text-xs">
                0{index + 1}
              </span>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold mt-1 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-xs sm:text-sm leading-6">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Testimonials;
