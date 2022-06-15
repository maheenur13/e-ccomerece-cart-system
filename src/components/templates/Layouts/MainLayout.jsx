import React from "react";
import { Fragment } from "react";
import { Navbar } from "../../organisms/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div>{children}</div>
    </Fragment>
  );
};

export default MainLayout;
