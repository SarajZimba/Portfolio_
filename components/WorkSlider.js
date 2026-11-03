
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

import { BsArrowRight, BsBoxArrowUpRight } from 'react-icons/bs';
import Image from 'next/image';

const workSlides = {
  slides: [
    {
      projects: [
        {
          title: 'Restaurant Reservation',  
          category: 'Restaurant Management',
          path: '/thumb1.jpg',
          technologies: ['Python', 'Django', 'DRF'],
          link: 'https://reservations.barc.com.np',
        },
        {
          title: 'Hotel Management',
          category: 'Hospitality',
          path: '/thumb2.jpg',
          technologies: ['Python', 'Django', 'MySQL'],
          link: 'https://hotel.silverlinepos.com/',
        },
        {
          title: 'ETN Management',
          category: 'Business Management',
          path: '/thumb3.jpg',
          technologies: ['Python', 'Django', 'REST API'],
          link: 'https://etn.silverlinepos.com/login',
        },
        {
          title: 'HR Management',
          category: 'Human Resources',
          path: '/thumb4.jpg',
          technologies: ['Python', 'Django', 'Celery'],
          link: 'https://portalhr.barc.silverlinepos.com/',
        },
      ],
    },
    {
      projects: [
        {
          title: 'Katamari Films',
          category: 'Website Development',
          path: '/thumb1.jpg',
          technologies: ['Web Development', 'Backend Integration'],
          link: 'https://katamarifilms.com/',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[420px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">

            {slide.projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer bg-white/5"
              >

                {/* Project Image */}
                <Image
                  src={project.path}
                  width={500}
                  height={300}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1235] via-[#4a22bd]/80 to-transparent opacity-80 group-hover:opacity-95 transition-all duration-500" />

                {/* Project Details */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">

                  <span className="text-[10px] sm:text-xs text-white/70 tracking-wider mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-sm sm:text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[9px] sm:text-[10px] bg-white/10 text-white/90 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-accent">
                    <span>View Project</span>
                    <BsArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    <BsBoxArrowUpRight />
                  </div>

                </div>
              </a>
            ))}

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
