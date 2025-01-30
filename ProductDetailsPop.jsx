import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import { motion } from "framer-motion";
import { PopCollectionContext } from "./PopCollection";

const ProductDetailsPop = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const popeye = useContext(PopCollectionContext); // Get the list of products from context
  const { addToCart } = useContext(CartContext);

  // Find the product by id
  const selectedProduct = popeye?.find((item) => item.id === parseInt(id));

  // If the product is not found or still loading
  if (!selectedProduct) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  } 
 else{
  const { title, price, description = "No description provided.", image } = selectedProduct;    // Destructure details from the selected product
  const shortDescription =
    description.split(". ").slice(0, 2).join(". ") + ".";       // Slice the description to the first two sentences

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
              <p className="text-[1.25vw] p-[2vw] mt-4 text-zinc-400 hover:text-zinc-900 duration-300 cursor-cell">
                Comments
              </p>
            </div>
            <motion.button
              whileHover={{
                scale: 1.025,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="m-10 bottom-0 left-2 text-zinc-100 text-3xl mt-[10vw] hover:bg-zinc-700 duration-40 bg-zinc-900 w-[20vw] p-4"
              onClick={() => addToCart(selectedProduct)}
            >
              Add to Bag
            </motion.button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}
};

export default ProductDetailsPop;
