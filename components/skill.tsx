import { motion } from "framer-motion";
import React from "react";

interface SkillProps extends React.PropsWithChildren {
  directionLeft?: boolean;
  src: string;
  percent: number;
}

const Skill: React.FunctionComponent<SkillProps> = ({ directionLeft, src, percent }): JSX.Element => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
      initial={{
        x: directionLeft? -200 : 200,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      src={src}
      className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition
      duration-300 ease-in-out md:w-28 md:h-28"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-24 w-24 md:w-28 md:h-28 rounded-full xl:w-32 xl:h-32">
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{percent}%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
