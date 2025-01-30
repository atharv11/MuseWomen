import React, { useContext } from "react";
import { ProductContext } from "./Product_context";
import ProductList from "./ProductList";

import { motion } from "motion/react";
import { Link } from "react-router-dom";
const Homepage = () => {
  const { product } = useContext(ProductContext); // Ensure context is provided

  console.log(product);

  return (
    <div>
      <div className="relative">
        <Link to={"/pop-collection"} >
        <video className="h-full w-full" src="main.mp4" autoPlay loop muted></video>
     
        <div className="inset-0 text-white absolute flex items-center justify-center flex-col">
          <h1 className="text-[2vw] font-extralight">popeye collection</h1>
          <h2 className="underline">Shop Now</h2>
        </div>
        </Link>
      </div>
      <div className="relative">
        <img className="object-cover h-[32vw] w-full" src="winter.jpg" alt="" />
        <div className="cursor-pointer inset-0 text-white absolute flex p-[10vw] text-[5vw] font-extralight">
          Winter Essentials
        </div>
      </div>

      {/* Seamless Scrolling Banner */}
      <div className="relative bg-zinc-900 overflow-hidden">
        <div className="flex whitespace-nowrap">
          {Array(10)
            .fill("Sale 20%")
            .map((text, index) => (
              <motion.h5
                key={index}
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  ease: "linear",
                  repeat: Infinity,
                  duration: 20,
                }}
                className="text-white text-[2vw] leading-none font-['Founders_Grotesk'] uppercase px-4 pt-3 font-semibold"
              >
                {text}
              </motion.h5>
            ))}
        </div>
      </div>

      <div className="w-full h-[40vw] flex cursor-pointer">
        <div className="w-1/2 h-full object-cover">
          <img src="bean.jpg" alt="" />
        </div>
        <div className="w-1/2 h-full object-cover">
          <img className="object-contain" src="blueT.jpg" alt="" />
        </div>
      </div>
      <div className="w-full h-[40vw] flex cursor-pointer">
        <div className="w-1/2 h-full">
          <img className="object-contain" src="blackjack.jpg" alt="" />
        </div>
        <div className="w-1/2 h-full bg-red-200 object-cover">
          <img className="object-" src="thsirt.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
