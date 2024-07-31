// components
import Circles from "/components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className=" pt-28 md:py-20 h-[80vh] md:h-full flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-x-12">
          {/* text */}
          <div className="text-center flex xl:w-[35vw] flex-col md:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 cursor-default"
            >
              Let's <span className="text-accent">connect.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:block mb-4 max-w-[450px] mx-auto lg:mx-0 cursor-default z-10"
            >
              Feel free to contact me with any proposals, and I will get back to
              you as soon as possible. You can reach me via this form or at{" "}
              <a
                href={"mailto:col.gregoire@gmail.com"}
                className="text-accent font-medium"
              >
                col.gregoire@gmail.com
              </a>
            </motion.p>
          </div>
          {/* form */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="sm:max-w-[70%] md:max-w-[50%] mx-auto"
          >
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-4 w-full"
            >
              {/* input group */}
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="name"
                  className="input"
                  required
                />
                <input
                  type="text"
                  placeholder="email"
                  className="input"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="subject"
                className="input"
                required
              />
              <textarea
                placeholder="message"
                className="textarea"
                requiredq
              ></textarea>
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Contact me
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>

  );
};

export default Contact;
