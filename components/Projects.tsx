import { motion } from "framer-motion";
import React from "react";

interface ProjectsProps extends React.PropsWithChildren {}

const Projects: React.FunctionComponent<ProjectsProps> = (): JSX.Element => {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-screen flex flex-col overflow-hidden relative text-left md:flex-row max-w-full justify-evenly
    mx-auto items-center z-0 space-y-12 md:space-y-0"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
      </div>

      <div className="w-full h-[350px] md:h-[470px] absolute top-[25%] bg-[#F7AB0A]/10 left-0 -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
