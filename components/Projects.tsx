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
        {projects.map((project, indx) => (
          <div className="w-screen flex flex-col snap-center space-y-5 items-center justify-center p-20 md:p-44 h-screen flex-shrink-0">
            <motion.img
              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{duration: 1.5}}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              viewport={{once: true}}
              src="data:image/png;base64,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"
            />
            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-3xl font-semibold">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {indx + 1} of {projects.length}:
                </span>
                UPS Clone
              </h4>
              <p className="text-center text-lg md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                fugiat molestias dolore harum sint commodi, doloribus placeat
                nulla distinctio possimus quo, soluta voluptatum est itaque
                ullam iusto magni quas voluptate!
              </p>
            </div>            
          </div>
        ))}
      </div>

      <div className="w-full h-[350px] md:h-[470px] absolute top-[25%] bg-[#F7AB0A]/10 left-0 -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
