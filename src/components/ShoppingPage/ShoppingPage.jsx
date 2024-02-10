import React from "react";
import { Element } from "react-scroll";
import Header from "./nodes/Header/Header";
import Menu from "./nodes/Menu/Menu";
import Footer from "./nodes/Footer/Footer";

export default function ShoppingPage() {
  return (
    <>
      <Element name="header">
        <Header />
      </Element>
      <Element name="menu">
        <Menu />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
}
