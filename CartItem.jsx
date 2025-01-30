import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaMinus } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { CartContext } from "./CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  const { id, image, price, title, amount } = item;

  return (
    <div className="mt-8 flex">
      <div className="w-full min-h-[150px] flex items-start justify-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm hover:underline uppercase font-semibold"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div className="cursor-pointer" onClick={() => removeFromCart(id)}>
              <div className="text-gray-900 underline text-[1vw] max-w-[240px]">remove</div>
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-md">
            <div className="flex flex-1 h-full max-w-[100px] items-center border text-primary font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="text-gray-500 text-[1.1vw] flex h-full justify-center items-center cursor-pointer"
              >
                <FaMinus className="text-gray-500" />
              </div>
              <div className="flex-1 flex h-full justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="text-gray-500 text-[1.3vw] flex h-full justify-center items-center cursor-pointer"
              >
                <MdAdd />
              </div>
            </div>
            <div className="flex flex-1 justify-around text-gray-400 items-center">
              €{price}
            </div>
            <div className="flex flex-1 justify-end items-center">
              {`€ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
