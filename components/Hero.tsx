import { type } from "os";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

type Props = {}

export default function Hero({}: Props) {

  const [text, count] = useTypewriter({
    words: [
      "Hello, The Name's Amir Esfahani",
      "Guy-Who-Loves-Coffee.tsx",
      "<But Loves The Coding More />",
    ],
    loop: true,
    delaySpeed: 1800,
  })

  return(
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle/>
      <img 
      className="relative rounded-full h-32 w-32 mx-auto object-cover"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPfGVOBZ8R__giSzhy7XgKLjxL3jORAcm6Q&usqp=CAU" 
      alt="avatar"/>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          Front-end Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  )
}