import React from "react";
import ReactDOM  from "react-dom/client";


let heading = React.createElement("h1", {key:"0"}, "Namaste React!");
// type of the element, props of the element, children
let para = React.createElement("p", {key:"1"}, "Learning react from")
let para1 = React.createElement("p", {key:"2"}, "Zero to Hero!");

let container = React.createElement("div", {id:"container"}, [heading, para, para1]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
