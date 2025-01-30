import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "./SidebarContext";
import { CartContext } from "./CartContext";
import { SearchContext } from "./Search";

function Navbar() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { ItemAmount } = useContext(CartContext);
  const { handleSearchClick } = useContext(SearchContext);

  const items = ["shop", "Search", "Favourite", "Account", "Shopping bag"];

  const handleShoppingBagClick = () => {
    setIsOpen(!isOpen); // Toggle sidebar on "Shopping bag" click
  };

  return (

    <div className="fixed mix-blend-difference whitespace-nowrap opacity-90 duration-300 text-[#ffffff] z-[9999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center backdrop-blur-sm bg-opacity-50">
      <Link to={"/"}>
        <div className="logo font-['Neue Montreal'] font-extralight text-4xl tracking-tighter cursor-pointer">
          MuseWomen
        </div>
      </Link>
      <div className="gap-10 flex">
        {items.map((item, index) => {
          if (item === "Shopping bag") {
            return (
              <div
                key={index}
                onClick={handleShoppingBagClick}
                className="cursor-pointer text-lg capitalize font-light ml-32"
              >
                {item} ({ItemAmount})
              </div>
            );
          }
          if (item === "Search") {
            return (
              <div
                key={index}
                onClick={handleSearchClick}
                className="cursor-pointer text-lg capitalize font-light"
              >
                {item}
              </div>
            );
          }

          return (
            <Link
              key={index}
              to={
                item === "shop"
                  ? "/shop"
                  : item === "Account"
                  ? "/Account"
                  : item === "Favourite"
                  ? "/Favourite"
                  : ""
              }
              className="cursor-pointer text-lg capitalize font-light"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
