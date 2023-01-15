import React from "react";
import ReactDOM  from "react-dom/client";


const H1 = <h1 key="0">Namaste React!!</h1>
const H2 = <h2 key="1">Learning react from</h2>
const H3 = <h3 key="2">Zero to Hero!</h3>
const TitleJSX = <div>{H1} {H2} {H3}</div>

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(TitleJSX);
