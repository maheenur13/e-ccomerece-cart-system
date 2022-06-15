import React from "react";
import Icon, { close } from "../../../libs/icons";
import { getCartState } from "../../../store/actions";
import { clearShoppingCart } from "../../../store/cart/cart.action";
import { Button, DrawerSidebar } from "../../atoms";
import { useSelector } from "react-redux";
import CartItems from "../Cart/CartItems";

const CartSidebar = ({ isSideBarShow, setIsSideBarShow }) => {
  const { totalItems, subTotal, shippingCharge } = useSelector(getCartState);
  return (
    <DrawerSidebar
      isActive={isSideBarShow}
      header={
        <div style={{ padding: "2px 8px" }}>
          <Icon
            style={{ cursor: "pointer" }}
            path={close}
            onClick={() => setIsSideBarShow(false)}
          ></Icon>
        </div>
      }
      footer={
        <>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "3rem" }}>
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
              borderBottom: "1px dotted #000000",
              height: "10px",
            }}
          ></div>
          <div style={{ display: "flex" }}>
            <h4 style={{ marginRight: "3rem" }}>Grand Total:</h4>
            <h4>{subTotal + shippingCharge} TK</h4>
          </div>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <Button>Checkout</Button>
          </div>
        </>
      }
    >
      <div>
        <h2>Cart</h2>
        <p style={{ borderBottom: "1px solid" }}>Your Items</p>
        <Button
          style={{ marginTop: "10px" }}
          onClick={() => clearShoppingCart()}
        >
          Clear Cart
        </Button>
        <span style={{ marginLeft: "10px" }}>
          You have Total {totalItems} products.
        </span>
        <CartItems />
      </div>
    </DrawerSidebar>
  );
};

export default CartSidebar;
