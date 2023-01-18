import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_PRODUCTS_API}`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
