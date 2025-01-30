import React from 'react'
import { useContext } from 'react';
import { ProductContext } from './Product_context'
import Product from "./Product";

const ProductList = () => {
 const { product } = useContext(ProductContext); // Ensure context is provided

  console.log(product);
    
  // Filtering women's clothing from other products
  const filtering = product.filter((item) => item.category === "women's clothing");
  console.log(filtering);
  return (
    <div className='mx-auto grid md:grid-cols-2 md:max-0'>
      
    {filtering.map((product) => {
      return(
       //<div className='w-[50vw] h-[30vw] bg-red-500' key={product.id}>{product.title}</div>
       //<product key={product.id}/>
       <Product product={product} key={product.id}/>
      )
    })}

 </div>
  )
}

export default ProductList