import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa"; // Example icons
import {
  SiMongodb,
  SiTailwindcss,
  SiAngular,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "Angular", icon: <SiAngular className="text-red-600" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Skill = () => {
  return (
    <div
      id="skills"
      className="text-center p-10 bg-white bg-opacity-50 m-20 mt-20 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:ring-blue-400 hover:ring-opacity-50"
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots={false}
        containerClass="carousel-container"
        itemClass="p-4"
        className="bg-gray-50 rounded-xl"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:shadow-2xl hover:ring-blue-400 hover:ring-opacity-50 bg-white shadow-md"
          >
            <div className="text-6xl mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
