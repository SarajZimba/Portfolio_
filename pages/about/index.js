
import React, { useState } from "react";

import {
  FaPython,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiDjango,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiCelery,
  SiAmazonaws,
  SiDocker,
  SiGraphql,
} from "react-icons/si";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// About data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Backend Development",
        icons: [
          <FaPython key="python" />,
          <SiDjango key="django" />,
          <SiFlask key="flask" />,
          <SiGraphql key="graphql" />,
        ],
      },
      {
        title: "Databases & Caching",
        icons: [
          <SiMysql key="mysql" />,
          <SiPostgresql key="postgresql" />,
          <SiRedis key="redis" />,
        ],
      },
      {
        title: "Cloud & DevOps",
        icons: [
          <SiAmazonaws key="aws" />,
          <SiDocker key="docker" />,
          <FaLinux key="linux" />,
          <FaGitAlt key="git" />,
        ],
      },
      {
        title: "Async & Automation",
        stage: "Celery, Django Channels, APScheduler, Cron Jobs",
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Backend Developer",
        stage: "Silverline System Integrators | Jul 2023 – Present",
      },
      {
        title: "Restaurant Management System",
        stage: "Order processing, inventory, real-time notifications",
      },
      {
        title: "Accounting & Billing System",
        stage: "Automated invoicing, payment tracking and reporting",
      },
      {
        title: "Attendance & Payroll System",
        stage: "Attendance management and automated payroll",
      },
      {
        title: "E-Commerce API",
        stage: "Vendor product and order management",
      },
    ],
  },

  {
    title: "education",
    info: [
      {
        title: "Bachelor in Computer Science and Information Technology",
        stage: "Amrit Science Campus, Tribhuvan University",
      },
      {
        title: "Graduation",
        stage: "June 2019 – March 2023",
      },
    ],
  },

  {
    title: "achievements",
    info: [
      {
        title: "10+ Applications Delivered",
        stage: "Delivered fully functional applications ahead of deadlines",
      },
      {
        title: "85% Test Coverage",
        stage: "Improved automated testing and reduced production bugs",
      },
      {
        title: "40% Faster APIs",
        stage: "Optimized ORM queries and implemented Redis caching",
      },
      {
        title: "50% Less Setup Time",
        stage: "Built reusable Django apps for faster project development",
      },
    ],
  },
];

const stats = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Applications Delivered", value: 10, suffix: "+" },
  { label: "Automated Test Coverage", value: 85, suffix: "%" },
  { label: "API Performance Improvement", value: 40, suffix: "%" },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col justify-center">

          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building reliable{" "}
            <span className="text-accent">backend systems.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0 text-white/70"
          >
            I am a Backend Developer specializing in Python and Django,
            with 3+ years of experience building and delivering production
            web applications.

            <br /><br />

            I enjoy designing scalable REST APIs, optimizing database
            performance, automating background processes, and building
            reliable systems that solve real-world problems.

            <br /><br />

            My focus is on writing clean, maintainable code and continuously
            improving my understanding of backend engineering.
          </motion.p>

          {/* STATISTICS */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-wrap gap-y-6 w-full">

              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`relative flex-1 min-w-[110px] px-3 ${
                    i !== stats.length - 1
                      ? "after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                      : ""
                  }`}
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </div>

                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}

            </div>
          </motion.div>

        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-[480px]"
        >

          {/* TABS */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 xl:gap-x-8 gap-y-3 mx-auto xl:mx-0 mb-6">

            {aboutData.map((item, itemIndex) => (
              <button
                key={itemIndex}
                onClick={() => setIndex(itemIndex)}
                className={`cursor-pointer capitalize text-sm xl:text-lg relative pb-2 transition-all duration-300 ${
                  index === itemIndex
                    ? "text-accent after:w-full after:bg-accent"
                    : "text-white/60 after:w-8 after:bg-white"
                } after:h-[2px] after:absolute after:bottom-0 after:left-0`}
              >
                {item.title}
              </button>
            ))}

          </div>

          {/* TAB CONTENT */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-6 items-center xl:items-start">

            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="w-full flex flex-col gap-y-2 text-white/70"
              >

                <div className="font-semibold text-white">
                  {item.title}
                </div>

                {item.stage && (
                  <div className="text-sm text-white/60">
                    {item.stage}
                  </div>
                )}

                {/* TECHNOLOGY ICONS */}
                {item.icons && (
                  <div className="flex flex-wrap gap-4 mt-2 text-2xl text-white">
                    {item.icons.map((icon, iconIndex) => (
                      <span
                        key={iconIndex}
                        className="hover:text-accent transition-all duration-300"
                      >
                        {icon}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default About;
