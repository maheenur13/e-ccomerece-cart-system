import React from "react";
import { addDataToCart } from "../../../store/cart/cart.action";
import { Button, Card } from "../../atoms";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card>
      <img
        src={product?.image}
        alt=""
        className="product_image"
        height={220}
        // width={160}
      />
      <p className="product_title">{product?.title}</p>
      <div className="product_footer">
        <p className="product_price_parent">
          BDT <span className="price">{product?.price}</span>
        </p>
        <Button onClick={() => handleAddToCart(product)}> Add To Cart</Button>
      </div>
    </Card>
  );
};

export default ProductCard;
