import React, { useState } from "react";
import Navbar from "../components/Navbar";

import techImage1 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import techImage2 from "../assets/technology/image-spaceport-landscape.jpg";
import techImage3 from "../assets/technology/image-space-capsule-landscape.jpg";

import desktopBG from "../assets/technology/background-technology-desktop.jpg";

const technologies = [
  {
    id: 1,
    name: "Launch Vehicle",
    description:
      "A rocket used to carry payloads from Earth into space and orbit.",
    image: techImage1,
  },
  {
    id: 2,
    name: "Spaceport",
    description: "A facility designed for launching and receiving spacecraft.",
    image: techImage2,
  },
  {
    id: 3,
    name: "Space Capsule",
    description: "A spacecraft designed to safely transport astronauts.",
    image: techImage3,
  },
];

const Technology = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [animating, setAnimating] = useState(true);

  const changeTech = (newIndex) => {
    setDirection(newIndex > index ? "right" : "left");
    setAnimating(false);

    setTimeout(() => {
      setIndex(newIndex);
      setAnimating(true);
    }, 220);
  };

  const tech = technologies[index];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white px-6 md:px-10 lg:px-20 overflow-hidden"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      <Navbar />

      {/* TITLE */}
      <div className="mt-10 text-center lg:text-left">
        <h2 className="uppercase tracking-[4px] text-lg md:text-2xl">
          <span className="text-gray-500 mr-4">03</span>
          Space Launch 101
        </h2>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-16 pt-16">
        {/* BUTTONS */}
        <div className="flex lg:flex-col gap-4">
          {technologies.map((_, i) => (
            <button
              key={i}
              onClick={() => changeTech(i)}
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full border transition-all duration-300 ${
                index === i
                  ? "bg-white text-black scale-110 shadow-lg"
                  : "hover:bg-white/20 hover:scale-105"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* TEXT */}
        <div
          className={`max-w-xl transition-all duration-500 ease-[cubic-bezier(0.2,0.9,0.2,1)] ${
            animating
              ? "opacity-100 translate-x-0 scale-100"
              : direction === "right"
                ? "opacity-0 -translate-x-16 scale-95"
                : "opacity-0 translate-x-16 scale-95"
          }`}
        >
          <p className="uppercase text-gray-400 tracking-[2px] mb-4">
            The terminology...
          </p>

          <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl mb-6">
            {tech.name}
          </h1>

          <p className="text-gray-300 leading-8">{tech.description}</p>
        </div>

        {/* IMAGE */}
        <div
          className={`flex justify-center transition-all duration-500 ease-[cubic-bezier(0.2,0.9,0.2,1)] ${
            animating
              ? "opacity-100 translate-x-0 scale-100"
              : direction === "right"
                ? "opacity-0 translate-x-20 scale-95"
                : "opacity-0 -translate-x-20 scale-95"
          }`}
        >
          <img
            src={tech.image}
            alt={tech.name}
            className="w-full max-w-[500px] rounded-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>
    </div>
  );
};

export default Technology;
