import React from "react";
import Products from "../components/organisms/Products/Products";
import MainLayout from "../components/templates/Layouts/MainLayout";
const Homepage = () => {
  return (
    <MainLayout>
      <div className="container">
        <Products />
      </div>
    </MainLayout>
  );
};

export default Homepage;
