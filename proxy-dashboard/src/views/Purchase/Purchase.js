import React from "react";
import { useProducts } from "../../contexts/ProductContext";
import PriceItem from "./PriceItem";

const Purchase = () => {
  const { products } = useProducts();

  return (
    <div>
      <div className="box-title">
        <h1>Purchase</h1>
      </div>
      {products.map((product) => (
        <PriceItem product={product} />
      ))}
    </div>
  );
};

export default Purchase;
