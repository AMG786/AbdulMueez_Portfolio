import React from "react";
import { motion } from "framer-motion";
import amg2 from "../assets/amg1.png";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    >
      <img
        src={icon}
        alt="web-development"
        className="w-16 h-16 object-contain"
      />
      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-8">
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      {/* Flexbox layout for text and image */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Image Section */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="w-full lg:w-1/2 flex justify-center"
        >
          
          <img
            src={amg2}
            alt="About"
            className="w-full max-w-sm h-auto rounded-[20px] object-cover shadow-lg border-[#915EFF]/40 shadow-2xl shadow-[#915EFF]/20 bg-gradient-to-br from-[#0b1220] to-[#05030a] flex items-center"
          />
        </motion.div>
        {/* Text Section */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] leading-[30px] max-w-3xl mt-5"
        >
          I am Abdul, a Full Stack Software Engineer specializing in building scalable web and native applications. With expertise in Nextjs, React and Node.js, I develop robust, production-ready systems with clean architecture and efficient APIs. On the mobile side, I build high-performance native applications using React Native and Android (Java/Kotlin).
          <br /><br />
          I excel in deploying and managing applications on AWS, leveraging cloud services for scalability and reliability. My approach combines modern development practices with a focus on user experience and code quality, delivering solutions that impact real-world challenges across web and mobile platforms. 😊
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
