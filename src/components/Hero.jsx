import { motion } from "framer-motion";
import { styles } from "../styles";
import avatarImg from "../assets/amg1.png";
import { github } from "../assets";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
  };

  return (
    <section className="relative w-full min-h-screen mx-auto flex flex-col justify-center overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#915EFF]/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#915EFF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div
        className={`relative top-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center gap-10 md:gap-16 pt-24 pb-16`}
      >
        {/* Left: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-row items-start gap-5"
        >
          <div className="flex flex-col justify-center items-center mt-2">
            <motion.div
              variants={itemVariants}
              className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_20px_rgba(145,94,255,0.5)]"
            />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="flex flex-col justify-center max-w-2xl">
            <motion.p
              variants={itemVariants}
              className="text-[#915EFF] font-semibold text-sm sm:text-base tracking-widest uppercase mb-1"
            >
              Software Engineer
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className={`${styles.heroHeadText} text-white`}
            >
              Hi, I'm <span className="text-[#915EFF]">Abdul Mueez</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`${styles.heroSubText} mt-3 text-white-100 max-w-lg`}
            >
              I build scalable web & mobile applications with modern tech.
              Passionate about clean code and great UX.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="https://drive.google.com/file/d/1OlkzlEbRHMl84WhFqpVZK8ObsfJl46Pz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#915EFF] text-white rounded-lg font-medium text-sm hover:bg-[#7c4dff] hover:shadow-[0_0_30px_rgba(145,94,255,0.4)] transition-all duration-300"
              >
                View Resume
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-secondary/50 text-white rounded-lg font-medium text-sm hover:border-[#915EFF] hover:text-[#915EFF] transition-all duration-300"
              >
                View My Work
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex gap-5">
              <a
                href="https://github.com/AMG786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#915EFF] transition-colors duration-300"
                aria-label="GitHub"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-7 h-7 opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Avatar */}
        <motion.div
          variants={avatarVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#915EFF]/30 blur-2xl scale-110 animate-pulse" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[#915EFF]/40 shadow-2xl shadow-[#915EFF]/20 bg-gradient-to-br from-[#0b1220] to-[#05030a] flex items-center justify-center">
              <img
                src={avatarImg}
                alt="Abdul Mueez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-8 left-1/2 -translate-x-1/2 flex justify-center">
        <a href="#about" className="group flex flex-col items-center gap-1">
          <span className="text-secondary/70 text-xs tracking-widest uppercase group-hover:text-[#915EFF] transition-colors">
            Scroll
          </span>
          <div className="w-[26px] h-[42px] rounded-full border-2 border-secondary/50 flex justify-center pt-2 group-hover:border-[#915EFF]/60 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-[#915EFF]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
