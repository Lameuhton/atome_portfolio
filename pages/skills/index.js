
// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ParticlesContainer from "../../components/ParticlesContainer";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Skills = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <ParticlesContainer />
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8 cursor-default">
              Tech skills <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0 cursor-default">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-full xl:max-w-[65%]">
            {/* slider */}
            <ServiceSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Skills;
