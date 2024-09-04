// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Skills = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left md:mb-4 xl:mb-0 items-center">
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 cursor-default mb-4 sm:mb-8"
            >
              Tech skills <span className="text-accent">.</span>
            </motion.h2>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[80%]"
          >
            {/* slider */}
            <ServiceSlider />
          </motion.div>

          {/* Languages section */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 items-center">
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 cursor-default mb-4 sm:mb-8 text-3xl md:text-4xl"
            >
              Languages <span className="text-accent">.</span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex md:gap-10 gap-3 justify-center w-full"
          >
            {/* Language 1 - French */}
            <div className="bg-[rgba(65,47,123,0.15)] w-[50%] sm:w-[250px] rounded-lg py-4 md:py-8 flex flex-col items-center justify-center gap-4 group transition-all duration-300 hover:bg-accent hover:text-white">
              <h3 className="text-xl sm:text-2xl font-bold text-accent">
                French
              </h3>
              <p className="text-lg">Mother tongue</p>
            </div>

            {/* Language 2 - English */}
            <div className="bg-[rgba(65,47,123,0.15)] w-[50%] sm:w-[250px] rounded-lg py-4 md:py-8 flex flex-col items-center justify-center gap-4 group transition-all duration-300 hover:bg-accent hover:text-white">
              <h3 className="text-xl sm:text-2xl font-bold text-accent">
                English
              </h3>
              <p className="text-lg">B1 Level</p>
            </div>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Skills;
