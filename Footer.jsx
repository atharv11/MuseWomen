import { Input } from "postcss";
import React from "react";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-100 flex gap-5 relative py-10">
      <div className='w-1/2 font-["Founders_Grotesk"] tracking-tighter font-semibold px-20 flex flex-col justify-between'>
        <div className="heading font-extralight">
          <h1 className="uppercase text-9xl leading-none transform scale-y-150">
             Muse-
          </h1>
          <h1 className="uppercase text-9xl leading-none transform scale-y-150 mt-4">
            Women
          </h1>

          <div className="mt-8 text-[2vw] text-zinc-500">
            More about MuseWomen
          </div>
          <div className="text-[1.5vw] text-zinc-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias qui
            numquam animi facilis reprehenderit sunt quaerat rerum est et
            sapiente aut tenetur, atque inventore libero repellendus ut nisi
            eligendi sint?
          </div>
        </div>

        <div className="font-['Neue Montreal'] font-extralight text-4xl mt-10">
          MuseWomen Pvt Ltd
        </div>
      </div>

      <div className="w-1/2">
        <h1 className="p-5 w-full uppercase text-9xl leading-none transform scale-y-150 font-extralight tracking-tighter">
          Presentation
        </h1>
        <div className='dates font-["Neue_Montreal"] text-3xl mt-[5vw] p-5'>
          <h5 className="block mb-10">S:</h5>
          <a className="block underline text-xl font-light mt-10" href="">
            Facebook
          </a>
          <a className="underline block" href="">
            Instagram
          </a>
          <a className="underline block" href="">
            Twitter
          </a>

          <div className="relative w-[36vw]">
            <VscSend className="mt-[2.4vw] text-[2vw] absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="mt-[5vw] font-['Founders_Grotesk'] font-extralight text-[2vw] w-full pl-5 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
