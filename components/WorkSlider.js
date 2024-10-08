// work data
const workData = [
  {
    title: "Wine Market Analysis",
    description:
      "This project analyzes the wine market using SQL for data extraction and Streamlit for visualizations.",
    github: "https://github.com/benozfirat/wine-market-analysis",
  },
  {
    title: "Immo API",
    description:
      "This project aims to predict real estate prices using a pre-trained machine learning model.",
    github: "https://github.com/Atome1212/immo_api",
  },
  {
    title: "Immo Eliza Regression",
    description:
      "This project aims to predict real estate prices using machine learning models.",
    github: "https://github.com/Atome1212/immo_eliza_regression",
  },
  {
    title: "Immo Property Data Analysis",
    description:
      "This group project involves the cleaning and analysis of a dataset.",
    github: "https://github.com/Atome1212/immo_eliza_analysis",
  },
  {
    title: "Immoweb Scraper",
    description:
      "This project is designed to scrape property information from the Immoweb website.",
    github: "https://github.com/Atome1212/Scraper_immoweb",
  },
];

// icons icons
import { BsArrowRight } from "react-icons/bs";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const WorkSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[250px] sm:h-[310px] xl:h-[330px]"
    >
      {workData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="relative bg-[rgba(65,47,123,0.15)] h-max rounded-lg overflow-hidden p-6 flex flex-col items-start gap-x-6 sm:gap-x-0 group">
              {/* icon */}
              <div className="hidden sm:block cursor-default text-2xl sm:text-4xl text-accent mb-2 sm:mb-4">
                {index + 1}
              </div>
              {/* title & desc */}
              <div className="cursor-default flex flex-col items-start">
                <div className="text-lg mb-2">{item.title}</div>
                <p>{item.description}</p>
              </div>
              {/* overlay gradient */}
              <a
                href={item.github}
                target="_blank"
                className="absolute inset-0 bg-gradient-to-r from-[#FF6347] via-[#FF4500] to-[#FF0000] opacity-0 group-hover:opacity-80 transition-opacity duration-700"
              ></a>
              {/* title */}
              <a
                href={item.github}
                target="_blank"
                className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-28 transition-all duration-300"
              >
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  {/* title part 1 */}
                  <div className="delay-100">SEE</div>
                  {/* title part 2 */}
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    THE CODE
                  </div>
                  {/* icon */}
                  <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight />
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
