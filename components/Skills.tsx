import { motion } from "framer-motion";
import React from "react";

interface SkillsProps extends React.PropsWithChildren {}

const Skills: React.FunctionComponent<SkillsProps> = (): JSX.Element => {
  return (
    <motion.div
      className="h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center
      xl:space-y-8 mx-auto items-center relative"
    >
      <div className="absolute top-14 flex flex-col justify-between items-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3> 

        <h3 className="uppercase tracking-[3px] text-gray-500">
          Hover over a skill to know how i'm good at it
        </h3>               
      </div>

      <div className="grid grid-cols-4 gap-5 xl:mt-15">
      </div>
    </motion.div>
  );
};

export default Skills;
