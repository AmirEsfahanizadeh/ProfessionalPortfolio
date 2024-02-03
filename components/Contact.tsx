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
      <div></div>
  );
};

export default Contact;
