import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./Product_context";
import { CartContext } from "./CartContext";
import { motion } from "motion/react"
const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useContext(ProductContext);
  const { addToCart, ItemAmount } = useContext(CartContext);

  // Find the product by id
  const selectedProduct = product.find((item) => item.id === parseInt(id));

  // If the product is not found or still loading
  if (!selectedProduct) {
    return (
      <section className="bg-zinc-50 h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // Destructure details from the selected product
  const { title, price, description, image } = selectedProduct;

  // Slice the description to the first two sentences
  const shortDescription = description.split('. ').slice(0, 2).join('. ') + '.';

  return (
    <div className="bg-zinc-50 w-full pt-[8vw] flex h-auto">
      <div className="w-1/2 bg-zinc00">
        <div className="container">
          <div className="flex flex-col">
            <h1 className="text-2xl w-[30vw] h-auto text-[2vw] font-extralight mt-[8vw] px-[2vw]">
              {title}
            </h1>
            <p className="text-md mt-[3vw] p-[2vw]">{shortDescription}</p>
            <div className="flex gap-[27vw]">
            <p className="text-[2vw] p-[2vw] mt-2 text-zinc-500">€{price}</p>
            <p className="text-[1.25vw] p-[2vw] mt-4 text-zinc-400 hover:text-zinc-900 duration-300 cursor-cell"> measurements</p>
            </div>
            <motion.button
             whileHover={{
                scale: 1.025,
                transition: { duration: .1 },
              }}
              whileTap={{ scale: .9}}
              className="m-10 bottom-0 left-2 text-zinc-100 text-3xl mt-[10vw] hover:bg-zinc-700 duration-40 bg-zinc-900 w-[20vw] p-4"
              onClick={() => addToCart(selectedProduct, parseInt(id))}
            >
              Add to Bag
            </motion.button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  w-1/2">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProductDetails;
