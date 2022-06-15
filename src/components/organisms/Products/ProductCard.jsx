import React, { useEffect, useState } from 'react';
import { Button, Card } from '../../atoms';
import { useSelector } from 'react-redux';
import { getCartState } from '../../../store/actions';
import ProductIncAndDec from '../Generics/ProductIncAndDec';

const ProductCard = ({ product, handleAddToCart }) => {
  const { cartItems } = useSelector(getCartState);
  const [currentProduct, setCurrentProducts] = useState({});
  useEffect(() => {
    const currentProduct = cartItems.find((item) => item.id === product.id);
    setCurrentProducts(currentProduct);
  }, [cartItems]);
  // console.log(isCurrentProducts);
  return (
    <Card>
      <div className="image_holder">
        <img src={product?.image} alt="" className="product_image" />
      </div>
      <p className="product_title">{product?.title}</p>
      <div className="product_footer">
        <p className="product_price_parent">
          BDT <span className="price">{product?.price}</span>
        </p>
        {!currentProduct?.cartQuantity ? (
          <Button onClick={() => handleAddToCart(product)}> Add To Cart</Button>
        ) : (
          <ProductIncAndDec currentProduct={currentProduct} />
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
