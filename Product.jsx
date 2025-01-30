import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./Product_context";
import { CartContext } from "./CartContext";
import { IoIosAdd } from "react-icons/io";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id,price, title, image } = product;

  // State for loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API data loading
    const fetchData = async () => {
      // Simulate a delay (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen flex items-center justify-center h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className=" pb-[5vw] bg-zinc-50  w-full h-full ">
      <div className=" font-[Founders_Grotesk] mt-[6vw] w-[40vw] h-[40vw] ml-[6vw] border-2 border-[#e4e4e4] relative mb-4 group transition">
        <div className=" w-full h-full flex items-center justify-center">
          <Link to={`/product/${id}`}>
            <div className=" mx-auto w-[300px] cursor-pointer">
              <img
                className="group-hover:scale-110 transition duration-300"
                src={image}
                alt=""
              />
            </div>
          </Link>
          <div className="buttons absolute top-2 right-0 rounded-lg group-hover:opacity-100 opacity-0 transition-all duration-300 group-hover:right-5">
            <div>
              <button onClick={() => addToCart(product, id)}>
                <div className="flex justify-center items-center m-1 w-auto h-auto text-white bg-zinc-900">
                  <IoIosAdd className="text-white drop-shadow-md opacity-50 text-[2vw]" />
                  <h1 className="p-3">Quick Add</h1>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="font-light absolute text-2xl mt-2 m-5 text-black">
          <h2 className="mb-2">{title}</h2>
          <div className="font-semibold">eur {price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
