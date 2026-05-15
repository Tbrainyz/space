import React, { useState } from "react";
import Navbar from "../components/Navbar";

import crewImage1 from "../assets/crew/image-douglas-hurley.png";
import crewImage2 from "../assets/crew/image-mark-shuttleworth.png";
import crewImage3 from "../assets/crew/image-victor-glover.png";
import crewImage4 from "../assets/crew/image-anousheh-ansari.png";

import desktopBG from "../assets/crew/background-crew-desktop.jpg";

const crews = [
  {
    id: 1,
    role: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.",
    image: crewImage1,
  },
  {
    id: 2,
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical.",
    image: crewImage2,
  },
  {
    id: 3,
    role: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon.",
    image: crewImage3,
  },
  {
    id: 4,
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and entrepreneur.",
    image: crewImage4,
  },
];

const Crew = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [animating, setAnimating] = useState(true);

  const changeCrew = (newIndex) => {
    setDirection(newIndex > index ? "right" : "left");
    setAnimating(false);

    setTimeout(() => {
      setIndex(newIndex);
      setAnimating(true);
    }, 200);
  };

  const crew = crews[index];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white px-6 md:px-10 lg:px-20 overflow-hidden"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      <Navbar />

      <div className="pt-10 lg:pt-16">
        <h2 className="flex uppercase tracking-[4px] text-lg md:text-2xl">
          <span className="text-white/30 font-bold mr-4">02</span>
          Meet your crew
        </h2>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-6">
        {/* TEXT */}
        <div
          className={`text-center lg:text-left max-w-xl transition-all duration-500 ${
            animating
              ? "opacity-100 translate-x-0"
              : direction === "right"
                ? "opacity-0 -translate-x-16"
                : "opacity-0 translate-x-16"
          }`}
        >
          <h3 className="uppercase text-gray-400 text-2xl md:text-3xl mb-4">
            {crew.role}
          </h3>

          <h1 className="uppercase text-5xl md:text-6xl lg:text-7xl mb-6">
            {crew.name}
          </h1>

          <p className="text-gray-300 leading-8 text-sm md:text-base">
            {crew.description}
          </p>

          {/* DOTS */}
          <div className="flex gap-4 justify-center lg:justify-start mt-10">
            {crews.map((_, i) => (
              <button
                key={i}
                onClick={() => changeCrew(i)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === i
                    ? "bg-white scale-150"
                    : "bg-white/30 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div
          className={`flex justify-center transition-all duration-500 ${
            animating
              ? "opacity-100 translate-x-0"
              : direction === "right"
                ? "opacity-0 translate-x-20"
                : "opacity-0 -translate-x-20"
          }`}
        >
          <img
            src={crew.image}
            alt={crew.name}
            className="h-[320px] md:h-[420px] lg:h-[500px] object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>
    </div>
  );
};

export default Crew;
