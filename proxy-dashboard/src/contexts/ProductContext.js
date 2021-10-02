import React, { useContext, useState, useEffect } from "react";
// import Firebase from "firebase";
import { useAuth } from "./AuthContext";
import ENV from "../environment";

const ProductContext = React.createContext({});

export function useProducts() {
  return useContext(ProductContext);
}

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [productsLoading, setProductsLoading] = useState(true);
  const { jwt } = useAuth();

  useEffect(() => {
    fetch(`${ENV.PRODUCT_API_URL}/api/v1/products`, {
      headers: new Headers({
        Authorization: `JWT ${jwt}`,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return null;
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setProductsLoading(false);
      })
      .catch(console.log);
  }, [jwt]);

  const value = {
    products,
  };

  if (productsLoading) return <h1>Loading...</h1>;

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
