import React from "react";
import ReactDOM  from "react-dom/client";


let header1 = React.createElement("h1", {key:"0"}, "Namaste React!");
// type of the element, props of the element, children
let header2 = React.createElement("h2", {key:"1"}, "Learning react from")
let header3 = React.createElement("h3", {key:"2"}, "Zero to Hero!");

let title = React.createElement("div", {id:"container", className:"title"}, [header1, header2, header3]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
