import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// about data
const aboutData = [
  {
    title: "qualities",
    info: [
      {
        title: "",
        icons: [
          "Proactive"
        ],
      },
      {
        title: "",
        icons: [
          "Resilient"
        ],
      },
      {
        title: "",
        icons: [
          "Collaborative"
        ],
      },
      {
        title: "",
        icons: [
          "Curious"
        ],
      },
      {
        title: "",
        icons: [
          "Autonomous"
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "certifications",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import ParticlesContainer from "../../components/ParticlesContainer";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 sm:py-0 text-center xl:text-left">
      <div>
        <ParticlesContainer />
      </div>
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="h2 text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-8">
            A little <span className="text-accent">more</span> about me.
          </h2>
          <p className="max-w-[600px] xl:pr-10 mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          I'm a computer science enthusiast with a solid foundation from years of higher education. My passion for technology and curiosity about Artificial Intelligence drove me to enroll in Becode's intensive 7-month AI program. This hands-on, self-driven course emphasized self-learning and teamwork, allowing me to develop strong AI skills and collaborate on innovative projects.
          </p>
        </motion.div>
        {/* info */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col w-full xl:max-w-[48%] h-[300px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`cursor-pointer capitalize xl:text-lg relative ${
                    index === itemIndex
                      ? "text-accent after:w-full"
                      : "text-white"
                  }`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                  <span
                    className={`block h-[2px] transition-all duration-300 ${
                      index === itemIndex ? "bg-accent w-full" : "bg-white w-8"
                    }`}
                  ></span>
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex text-accent">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-white/60">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
