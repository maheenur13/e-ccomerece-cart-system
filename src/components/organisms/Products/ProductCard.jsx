import React, { useEffect, useState } from 'react';
import { Button, Card } from '../../atoms';
import { useSelector } from 'react-redux';
import { getCartState } from '../../../store/actions';

const ProductCard = ({ product, handleAddToCart }) => {
  const { cartItems } = useSelector(getCartState);
  const [isCurrentProducts, setCurrentProducts] = useState({});
  useEffect(() => {
    const currentProduct = cartItems.find((item) => item.id === product.id);
    setCurrentProducts(currentProduct);
  }, [cartItems]);
  console.log(isCurrentProducts);
  return (
    <Card>
      <img src={product?.image} alt="" className="product_image" height={220} />
      <p className="product_title">{product?.title}</p>
      <div className="product_footer">
        <p className="product_price_parent">
          BDT <span className="price">{product?.price}</span>
        </p>
        {!isCurrentProducts?.cartQuantity ? (
          <Button onClick={() => handleAddToCart(product)}> Add To Cart</Button>
        ) : (
          <>Inc and dec</>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
