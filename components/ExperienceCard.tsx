import { motion } from "framer-motion";
import React from "react";

interface ExperienceCardProps extends React.PropsWithChildren {}

const ExperienceCard: React.FunctionComponent<ExperienceCardProps> = ({
}): JSX.Element => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
      md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >

      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }} 
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 1.5
        }}
        className="w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="data:image/png;base64,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"
      />
    </article>
  );
};

export default ExperienceCard;
