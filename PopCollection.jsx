import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { GrFormAdd } from "react-icons/gr";
export const PopCollectionContext = createContext();
const PopCollection = () => {
  const { addToCart, Cart } = useContext(CartContext);

  const popeye = [
    { id: 1, price: "29.99", title: "Grey OverCoat", image: "overcoat.webp" },
    { id: 2, price: "19.99", title: "White Shirt", image: "shirt.webp" },
    { id: 3, price: "14.55", title: "Crop Top", image: "crop.webp" },
  ];

  return (
    <div className="flex flex-col bg-zinc-50 p-[5vw]">
      {/* Display items in the Pop Collection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popeye.map(({ id, price, title, image }) => (
          <div
            key={id}
            className="font-[Founders_Grotesk] mt-[6vw] w-full h-auto border-2 border-[#e4e4e4] relative mb-4 group transition"
          >
            <div className="w-full h-full flex items-center justify-center">
              <Link to={`/popeye/${id}`}>
                <div className="mx-auto w-[300px] cursor-pointer">
                  <img
                    className="group-hover:scale-110 transition duration-300"
                    src={image}
                    alt={title}
                  />
                </div>
              </Link>
              <div className="buttons absolute top-2 right-0 rounded-lg group-hover:opacity-100 opacity-0 transition-all duration-300 group-hover:right-5">
                <button
                  onClick={() =>
                    addToCart(
                      { id, price: parseFloat(price), title, image },
                      id
                    )
                  }
                >
                  <div className="flex justify-center items-center m-1 w-auto h-auto text-white bg-zinc-900">
                    <GrFormAdd className="text-white drop-shadow-md opacity-50 text-[3vw]" />
                    <h1 className="p-3">Quick Add</h1>
                  </div>
                </button>
              </div>
            </div>
            <div className="font-light absolute text-2xl mt-2 m-5 text-black">
              <h2 className="mb-2">{title}</h2>
              <div className="font-semibold">€ {price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopCollection;
