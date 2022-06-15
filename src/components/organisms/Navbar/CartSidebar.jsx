import React, { useState } from 'react';
import Icon, { close } from '../../../libs/icons';
import { getCartState } from '../../../store/actions';
import { clearShoppingCart } from '../../../store/cart/cart.action';
import { Button, DrawerSidebar, Modal } from '../../atoms';
import { useSelector } from 'react-redux';
import CartItems from '../Cart/CartItems';
import { Fragment } from 'react';

const CartSidebar = ({ isSideBarShow, setIsSideBarShow }) => {
  const { totalItems, subTotal, shippingCharge, grandTotal } = useSelector(getCartState);
  const [show, setShow] = useState(false);
  const handleCheckout = () => {
    clearShoppingCart();
    setIsSideBarShow(false);
    setShow(true);
  };
  return (
    <DrawerSidebar
      isActive={isSideBarShow}
      header={
        <div style={{ padding: '2px 8px' }}>
          <Icon
            style={{ cursor: 'pointer' }}
            path={close}
            onClick={() => setIsSideBarShow(false)}></Icon>
        </div>
      }
      footer={
        <>
          {totalItems > 0 && (
            <Fragment>
              <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '3rem' }}>
                  <h4>Sub Total: </h4>
                  <h4>Shipping Charge: </h4>
                </div>
                <div>
                  <h4>{subTotal} TK</h4>
                  <h4>{shippingCharge} Tk</h4>
                </div>
              </div>
              <div
                style={{
                  borderBottom: '1px dotted #000000',
                  height: '10px'
                }}></div>
              <div style={{ display: 'flex' }}>
                <h4 style={{ marginRight: '5rem' }}>Grand Total:</h4>
                <h4>{grandTotal} TK</h4>
              </div>
              <div style={{ textAlign: 'center', margin: '1rem 0 2.5rem 0' }}>
                <Button onClick={handleCheckout}>Checkout</Button>
              </div>
            </Fragment>
          )}
        </>
      }>
      <div>
        <h2>Cart</h2>
        <p style={{ borderBottom: '1px solid' }}>Your Items</p>
        {totalItems > 0 && (
          <>
            <Button style={{ marginTop: '10px' }} onClick={() => clearShoppingCart()}>
              Clear Cart
            </Button>
            <span style={{ marginLeft: '10px' }}>You have Total {totalItems} products.</span>
          </>
        )}

        <CartItems />
      </div>
      <Modal onClose={() => setShow(false)} show={show} title="Order Status">
        <p style={{ color: '#037e0f', textAlign: 'center' }}>Your order has been placed!</p>
      </Modal>
    </DrawerSidebar>
  );
};

export default CartSidebar;
