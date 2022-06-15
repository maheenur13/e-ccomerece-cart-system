import React, { useState } from "react";
import { useEffect } from "react";
import { productsApi } from "../../../libs/api/productApi";
import { CardSkeleton } from "../../atoms";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import "./Products.scss";
import { addDataToCart } from "../../../store/cart/cart.action";

const Products = () => {
  // const { items } = useSelector(getProductState);
  const [products, setAllProducts] = useState([]);
  const arr = new Array("", "", "", "", "", "", "", "");
  // alert(arr.length);
  useEffect(() => {
    (async () => {
      const data = await productsApi.getAllProducts();
      if (data?.length > 0) {
      }
      // console.log(data);
      setAllProducts(data);
    })();
  }, []);
  const handleAddToCart = (pd) => {
    addDataToCart(pd);
  };

  return (
    <div>
      <h1 className="product_header">All Products</h1>
      <div className="products_parent">
        {products.length > 0
          ? products.map((product, idx) => {
              return (
                <ProductCard
                  key={idx}
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              );
            })
          : arr.map((_, idx) => {
              return <CardSkeleton key={idx} />;
            })}
      </div>
    </div>
  );
};

export default Products;
