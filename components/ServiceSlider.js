// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// icons
import {
  FaPython,
  FaJava,
  FaPhp,
  FaCopyright,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGit,
} from "react-icons/fa";
import { TbSql } from "react-icons/tb";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
// import { imageOptimizer } from "next/dist/server/image-optimizer";

// service data
const serviceData = [
  {
    icon: <FaPython />,
    title: "Python",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaJava />,
    title: "Java",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaPhp />,
    title: "PHP",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaCopyright />,
    title: "C",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <TbSql />,
    title: "SQL",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaSass />,
    title: "SASS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaGit />,
    title: "Git",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="h-[170px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-8 py-8 flex flex-col items-center justify-center gap-x-6 sm:gap-x-0 group  transition-all duration-300">
              {/* icon */}
              <div className="cursor-default flex flex-col items-center justify-center h-full text-6xl text-accent">
                {item.icon}
              </div>
              {/* title & desc */}
              {/* <div className="cursor-default flex flex-col items-center sm:items-start">
                  <div className="text-lg mb-2">{item.title}</div>
                  <p>{item.description}</p>
                </div> */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
