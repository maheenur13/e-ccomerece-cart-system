import React, { useEffect, useState } from "react";
import Icon, { cart } from "../../../libs/icons";
import { getCartState, getCartTotalValues } from "../../../store/actions";
import { DrawerSidebar } from "../../atoms";
import { useSelector } from "react-redux";
import { BadgeIcon, IconDropdown } from "../../molecules";
import CartSidebar from "./CartSidebar";
import "./navbar.scss";
export const Navbar = () => {
  const { totalItems } = useSelector(getCartState);
  const [isSideBarShow, setIsSideBarShow] = useState(false);

  const handleShowSideBar = () => {
    setIsSideBarShow(true);
  };

  return (
    <div className="navigation_bar">
      <img
        style={{
          backgroundColor: "#ffffff9c",
          borderRadius: "5px",
          padding: "4px",
        }}
        src="images/manush-tech-logo.png"
        alt="company_logo"
        width={40}
        height={40}
      />
      <div>
        <BadgeIcon
          path={cart}
          width={80}
          fill="#ffffff"
          isCount
          count={totalItems}
          onClick={handleShowSideBar}
        />
      </div>
      <CartSidebar
        isSideBarShow={isSideBarShow}
        setIsSideBarShow={setIsSideBarShow}
      />
    </div>
  );
};
