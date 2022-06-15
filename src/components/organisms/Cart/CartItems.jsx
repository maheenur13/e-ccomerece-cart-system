import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Icon, { deleteBin } from "../../../libs/icons";
import {
  addDataToCart,
  decreaseItemFromCart,
  getCartTotalValues,
  removeItemFromCart,
} from "../../../store/cart/cart.action";
import { getCartState } from "../../../store/cart/cart.slice";
import { Button } from "../../atoms";
import "./style.scss";

const CartItems = () => {
  const { cartItems } = useSelector(getCartState);
  const subTractHandler = (data) => {
    decreaseItemFromCart(data);
  };

  const addHandler = (data) => {
    addDataToCart(data);
  };
  useEffect(() => {
    getCartTotalValues();
  }, [cartItems]);
  return (
    <Fragment>
      {cartItems.length > 0 ? (
        cartItems.map((data, idx) => {
          return (
            <div className="cart_items_wrapper" key={idx}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={data?.image} alt="logo" width={42} height={40} />
                <div style={{ marginLeft: "12px" }}>
                  <p className="title">{data?.title} </p>
                  <p>
                    Quantity:
                    <span style={{ marginLeft: "5px" }}>
                      <button
                        className="cart_item_btn"
                        style={{ marginLeft: "5px", marginRight: "5px" }}
                        onClick={() => subTractHandler(data)}
                      >
                        -
                      </button>
                      {data?.cartQuantity}
                      <button
                        className="cart_item_btn"
                        style={{ marginLeft: "5px" }}
                        onClick={() => addHandler(data)}
                      >
                        +
                      </button>
                    </span>
                  </p>
                  <p>
                    Price: BDT {(data?.price * data?.cartQuantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <div>
                <Icon
                  path={deleteBin}
                  width={18}
                  onClick={() => removeItemFromCart(data)}
                  isButton
                ></Icon>
              </div>
            </div>
          );
        })
      ) : (
        <Fragment>
          <p style={{ marginTop: "10px", color: "#f20000" }}>Cart is empty!</p>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CartItems;
