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

      {/* <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front-end Developer</h4>
        <p className="font-bold text-2xl mt-1">QUERA</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-7 w-7 rounded-full"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAClCAMAAAAK9c3oAAAAbFBMVEX33x4AAAD/7CDy2h1tYg1WTQr64h795R//6R8SEALCsBfn0hzv2B1GPwjizBvcxxtMRQnQvBkMCwE0LwaHehCunRV0aQ60oxbWwhpgVwydjhMdGgM9Nwh9cQ8jHwQXFQMpJQWklBQvKgWUhRJ5qbSrAAAE90lEQVR4nO2a63aDKBCAvYWh3k28JjGb1Pd/x8V02yogkBhMz9n5ftZQv8MAMgOOgyAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiDI/wQCM4jyp8Tx4+hO7DvqH78UKMIZxfIvIQqP/e7gjpySrqyKmG7k6QXuxwR35y84ekWd7N0Zl7xMvU08meUMuSX4zcmV0rVkA08jSyg6uSNj38fwJyy94z+Lkoy8ta6ptyR+r3Icaej7LWudpOuGljW1llTbk4xTaDfoOkuoDCRd95pZ1dRYkuzTyNLNrcZcZ2kS7zuDzc5UW5LMVNK9FBZXd7WlZ9yVbJ6/y5LEF0Emr29NMwTn+V8/avK2iEPDO16bmFIAStPZ9ygJ7e7i1JYl35HZtw2BST/3juVvpNLS5x5epl9sEudff+0Kz66j2pJE+fxhPVsUoR13c/vhzXsikh3mD7nv4Dhs83SLvEJteZ0/jDkhWt+2yX3UltxCFPFK/nZ5j8KS+4gX9kfgE5Ypt3YP1ifzM5b8HE+czTJwc0sn5h66/V+0FPdt5VZ1ggcs4cZbukG0Xd3F0JK0klrB8AZP9f4SDqKlmwwb1V1MLakY8pFLnZFNO1ST9/gL5SE3CKMNJ5IuOzsuWLJ9xtHfbJHXWcbLdSy2LkVbFNz0lmwTqbBkntkmcddXYG5Kzc/Balpmailb2uc09r/uBvVLoisVBe37K4OyhJfj1Lwzh/yGtjuNZ2k36obV/5jPzHlqq98iM0uHQJtoNC1KmlqOno1qgWc7ZItj09hyPPQJlf1p8QzgAct73HdXuSLjlFobmg9ZMk/aDos1bHtZ0YOW46FpWu3llqfMlubDlgzqNZ1UtLQ1gZ6xZB1KQj4JHvn4W5bM0yk+RE1bIX/WcuxP8Xs0WFqMnrd0CLnxlp2lHGOFpaTunvy5iDuSotxZqHBuZwmLuQ1fSDq8ZPqIK4XHbSE6MaNwin+WDpb5bOOzXW8J5CYcFno7tSWhRc1y73jhP3LJxmV9tdjLArcWLLniRT23BKe819ZL+eR9uSVE9zFUzVc04s9fw1KDaRv/J+O5SV/PT/KVEQeovqbjaX6GBCFnefx9DaHh76A9yXaPJOU2nKvmOIHsZ/jVs6KJcHWkgp82cT39Bu4bcabTgWudrwg4RNPA9JN0Dxr+UtjPwIqEOlYZzR2ImKgHT397WMIyj0vv/xc84oX8jjb5Dhnw3TQ+bMhveRW8VDzir57tSxIJycr5GDtj3LNe2NYE36NPmFZ3PsvM/wqFX9SS0ubCgqUHCtnrzl23k10L+12+6VLlMg/6PpCnad3zw5Jft5VMXuOrE1sZK65ukFR5l27GdPEG/txZS/B0wEfNm+lrrrNclfJrqY5V18iIoyme/DDMIwbLRXUZ9bqNOnGWU/0pHd9QW2CdsmZF/9JsjYaYeKPO8C7eyHl9ZQNa8fqSgKxUCqFBw5HrK3bpwO8LBC7ym540MlqQgtfcjSCRuk56XtoZglPpu/NlBwAEwvPiW/a9vzz2iVMunfPd+ahfeVsHSCX/DJ3qQn1IS6Pj4gcs6TWNH/eMCjHuyTHTXlMjrOVRNrKDMH39qRQhQNKq3+Xn8+FwTvJd2cTUKFysJTjhMcgT1vLeNi+rFsDWQSSh1IM4SrPIB89M8bslUI86rGWWjm0960fk5M7WTREEQRAEYfwLOy0+arkk8UYAAAAASUVORK5CYII="
          />
          <img
            className="h-7 w-7 rounded-full"
            src="data:image/png;base64,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"
          />          
          <img
            className="h-7 w-7 rounded-full"
            src="data:image/png;base64,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"
          />
          <img
            className="h-7 w-7 rounded-full"
            src="data:image/png;base64,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"
          />
        </div>
        <p className="uppercase py-5 text-gray-500">Started at summer 2022 - Ended last month</p>

        <ul className="list-disc space-y-4 text-lg ml-5">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div> */}
    </article>
  );
};

export default ExperienceCard;
