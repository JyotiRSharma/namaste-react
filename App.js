import React from "react";
import ReactDOM from "react-dom/client";
import Header from "/components/Header";
import Body from "/components/Body";
import Footer from "./components/Footer";

let root = ReactDOM.createRoot(document.getElementById("root"));

const FoodVilla = ()=> {
  return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}

root.render(<FoodVilla />);
