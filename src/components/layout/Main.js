import React, { Fragment } from "react";
import Header2 from "./Header2";
import { Outlet } from "react-router-dom";
import Footer from "components/footer/Footer";

const Main = () => {
  return (
    <Fragment>
      <Header2></Header2>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
