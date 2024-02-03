import { motion } from "framer-motion";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps extends React.PropsWithChildren {}

const Contact: React.FunctionComponent<ContactProps> = (): JSX.Element => {
    const {register, handleSubmit } =  useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
      window.location.href = `mailto: amr.esfahanizadeh@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
    };
    return (
      <div
        className="h-screen space-y-24 relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly items-center mx-auto"
      >
        <h3 className="absolute top-14 tracking-[20px] uppercase text-gray-500 text-2xl">
          Contact
        </h3>

        <div className="flex flex-col space-y-10">
          <h4 className="text-4xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A] underline">Let's Talk</span>
          </h4>
          
          <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p>09029995947</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p>Iran, Tehran, Tehran</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p>ad.esfahanizadeh@yahoo.com</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
              <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
              <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
            </div>

            <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />

            <textarea {...register("message")} placeholder="Message" className="contactInput" />

            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >Submit</button>
          </form>
        </div>
      </div>
  );
};

export default Contact;
