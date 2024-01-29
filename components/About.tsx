import { motion } from "framer-motion";
import React from "react";

interface AboutProps extends React.PropsWithChildren {}

const About: React.FunctionComponent<AboutProps> = (): JSX.Element => {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className="h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

        <motion.img
          initial={{
            x: -200,
            opacity: 1,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{once:true}}
          transition={{duration:1.2}}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPfGVOBZ8R__giSzhy7XgKLjxL3jORAcm6Q&usqp=CAU" 
          className="mb-10 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                A <span className="underline decoration-[#F7AB0A]/50">little</span> about me 
            </h4>
            <p className="text-base">
            In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live.
            </p>
        </div>
    </motion.div>
  );
};

export default About;
