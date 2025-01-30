import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import { SidebarContext } from './SidebarContext';
import CartItem from "./CartItem";
import { motion } from 'motion/react';

const ViewCart = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
const  {Cart,  removeFromCart,  clearCart,  increaseAmount,  decreaseAmount, ItemAmount,Total} = useContext(CartContext)
  return (
    <div className='w-full h-full bg-zinc-50 font-["Neue Montreal"]  font-extralight flex justify-center items-center'>
      <div className='w-[50vw] h-[50vw] bg-zinc-50'>
        <div className='absolute left-10 bottom-[30vw]'>Your Bag({ItemAmount}) </div>
        <div className='mt-[16vw] w-[50vw] h-auto'>
        <div
        className="overflow-y-auto text-[1vw] max-h-[60vh] hover:scroll-auto scrollbar-extralight  scrollbar-thumb-black"
      >
        {Cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div> 
        </div>
        </div>
      <div className='w-[50vw] h-[50vw] '>
        <div className='flex  gap-[20vw] text-[1.25vw] mt-[17vw]  ml-[15vw] w-auto h-auto'>
        SubTotal: <div>{Total}  eur</div>

        </div>
        <motion.button
             whileHover={{
                
              }}
           
              className="text-zinc-100 ml-[15vw] text-[1vw]  hover:bg-zinc-700 duration-40 bg-zinc-900 w-[30vw] p-2"
          
            >
              CHECKOUT
            </motion.button>
        </div>
        
    </div>
  )
}

export default ViewCart