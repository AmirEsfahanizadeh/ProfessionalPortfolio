import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

interface ExperienceProps extends React.PropsWithChildren {}

const Experience: React.FunctionComponent<
  ExperienceProps
> = (): JSX.Element => {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-10">
        <ExperienceCard  />
        <ExperienceCard  />
        <ExperienceCard  />
        <ExperienceCard  />
      </div>      
    </motion.div>
  );
};

export default Experience;
