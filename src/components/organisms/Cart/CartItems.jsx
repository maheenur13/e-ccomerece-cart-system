import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icon, { deleteBin } from '../../../libs/icons';
import { getCartTotalValues, removeItemFromCart } from '../../../store/cart/cart.action';
import { getCartState } from '../../../store/cart/cart.slice';
import ProductIncAndDec from '../Generics/ProductIncAndDec';
import './style.scss';

const CartItems = () => {
  const { cartItems } = useSelector(getCartState);

  useEffect(() => {
    getCartTotalValues();
  }, [cartItems]);
  return (
    <Fragment>
      {cartItems.length > 0 ? (
        cartItems.map((data, idx) => {
          return (
            <div className="cart_items_wrapper" key={idx}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <img src={data?.image} alt="logo" height={55} width={55} />
                </div>
                <div style={{ marginLeft: '12px' }}>
                  <p className="title">{data?.title} </p>
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                    Quantity:
                    <span style={{ marginLeft: '16px' }}>
                      <ProductIncAndDec currentProduct={data} />
                    </span>
                  </p>
                  <p>Price: BDT {(data?.price * data?.cartQuantity).toFixed(2)}</p>
                </div>
              </div>
              <div>
                <Icon
                  path={deleteBin}
                  width={18}
                  onClick={() => removeItemFromCart(data)}
                  isButton></Icon>
              </div>
            </div>
          );
        })
      ) : (
        <Fragment>
          <p style={{ marginTop: '10px', color: '#f20000' }}>Cart is empty!</p>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CartItems;
