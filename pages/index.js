
import ParticlesConatainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-primary/30">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10" />

      {/* TEXT CONTENT */}
      <div className="relative z-10 container mx-auto min-h-screen px-4 flex flex-col justify-center text-center xl:text-left">

        {/* HEADING */}
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h1"
        >
          Hi, I'm a <br />
          <span className="text-accent">Backend Developer.</span>
          <br />
          I build reliable systems.
        </motion.h1>

        {/* INTRODUCTION */}
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 text-white/70 leading-relaxed"
        >
          I specialize in Python and Django, with 3+ years of experience
          building backend applications, designing REST APIs, optimizing
          databases, and automating business workflows.

          I enjoy solving complex problems and building reliable,
          scalable software with clean and maintainable code.
        </motion.p>

        {/* TECHNOLOGY STACK */}
        <motion.div
          variants={fadeIn("down", 0.35)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-sm text-white/50 mb-8 tracking-wide"
        >
          Python <span className="text-accent">•</span> Django
          <span className="text-accent"> • </span>
          REST APIs <span className="text-accent">•</span> PostgreSQL
          <span className="text-accent"> • </span> Redis
        </motion.div>

        {/* MOBILE PROJECT BUTTON */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>

        {/* DESKTOP PROJECT BUTTON */}
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex"
        >
          <ProjectsBtn />
        </motion.div>

      </div>

      {/* RIGHT SIDE VISUALS - DESKTOP */}
      <div className="hidden xl:block w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none">

        {/* BACKGROUND IMAGE */}
        <div className="bg-explosion bg-cover bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" />

        {/* PARTICLES */}
        <ParticlesConatainer />

        {/* AVATAR */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{
            duration: 1,
            ease: easeInOut,
          }}
          className="w-full h-full max-w-[600px] max-h-[678px] absolute -bottom-32 lg:bottom-[-10px] lg:right-[8%]"
        >
          <Avatar />
        </motion.div>

      </div>

      {/* MOBILE AVATAR */}
      <div className="xl:hidden relative w-full h-[280px] sm:h-[350px] mt-4">

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{
            duration: 1,
            ease: easeInOut,
          }}
          className="relative mx-auto w-full h-full max-w-[320px] translate-y-8"
        >
          <Avatar />
        </motion.div>

      </div>

    </main>
  );
};

export default Home;
