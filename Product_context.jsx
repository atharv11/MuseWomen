import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]); // to fetch product

  useEffect(() => {
    const fetchproducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProduct(data); // Store fetched data in state 
    };
    fetchproducts();
  }, []);

  return (
    <ProductContext.Provider value={{ product,setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
