import React from "react";
import ReactDOM from "react-dom/client";
import Title from "/components/Title.js";

const head = <h1>Head</h1>

console.log(Title)

const Container = () => {
  return (
    <>
      <h1>Namaste!</h1>
    </>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
