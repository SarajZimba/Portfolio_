
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaTasks,
  FaArrowUp,
} from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Service data
const serviceData = [
  {
    icon: <FaCode />,
    title: "Backend Development",
    description:
      "Building robust backend applications using Python, Django, Django REST Framework, and Flask.",
  },
  {
    icon: <FaDatabase />,
    title: "API Development",
    description:
      "Designing secure and scalable REST APIs and GraphQL services for web applications and integrations.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Designing database structures, optimizing queries, and improving application performance using MySQL, PostgreSQL, and Redis.",
  },
  {
    icon: <FaTasks />,
    title: "Task Automation",
    description:
      "Automating background tasks, scheduled jobs, notifications, and business workflows using Celery, APScheduler, and Cron.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Deployment",
    description:
      "Deploying and maintaining applications using AWS, Linux, Nginx, Gunicorn, and cloud hosting environments.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Authentication & Security",
    description:
      "Implementing secure authentication and authorization using JWT, OAuth, and protected API endpoints.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[320px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">

            {/* Icon */}
            <div className="text-accent text-4xl mb-4">
              {item.icon}
            </div>

            {/* Title and Description */}
            <div className="mb-8">
              <div className="mb-2 text-lg font-semibold">
                {item.title}
              </div>

              <p className="max-w-[350px] leading-normal text-sm text-white/70">
                {item.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="text-3xl mt-auto">
              <FaArrowUp className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
