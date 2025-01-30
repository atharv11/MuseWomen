import React, { createContext, useState } from "react";
import { motion } from "motion/react";
export const SearchContext = createContext();

const Search = ({ children }) => {
  const [Upslide, setUpslide] = useState(false);

  const handleSearchClick = () => {
    setUpslide(!Upslide); // Toggle the sliding window
  };

  return (
    <SearchContext.Provider value={{ handleSearchClick }}>
      <>
        <div
          className={`${
            Upslide ? "top-0" : "-top-full"
          } w-full bg-white opacity-95 text-xl text-black fixed left-0 h-[35vw] z-[999] transition-all duration-500`}
        >
          {/* Search Window Content */}
          <div className="h-full flex flex-col justify-center items-center">
       
            <p className="text-gray-500">What are you looking for?</p>
            {/* Add inputs or any search-related UI here */}
            <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full   capitalize py-20'>
       <div className='text border-b-2 border-t-2 flex gap-10 whitespace-nowrap overflow-hidden'>
        < motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity , duration:20}} className="text-[7vw] leading-none font-['Founders_Grotesk'] uppercase pt-10 -md-[7vw] font-semibold">Coat Skirt Jeans Crop-top cape t-shirts</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity , duration:20}} className="text-[7vw] leading-none font-['Founders_Grotesk'] uppercase pt-10 -md-[7vw font-semibold">Coat Skirt Jeans Crop-top cape t-shirts</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity , duration:20}} className="text-[7vw] leading-none font-['Founders_Grotesk'] uppercase pt-10 -md-[7vw font-semibold">Coat Skirt Jeans Crop-top cape t-shirts</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity , duration:20}} className="text-[7vw] leading-none font-['Founders_Grotesk'] uppercase pt-10 -md-[7vw font-semibold">Coat Skirt Jeans Crop-top cape t-shirts</motion.h1>
       </div>
    </div>
         <input type="text" className="" placeholder="Search here" />
          </div>
        </div>
        {children}
      </>
    </SearchContext.Provider>
  );
};

export default Search;
