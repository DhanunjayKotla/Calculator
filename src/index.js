import React from "react";
import ReactDOM from "react-dom";
import Funckeys from "./components/Funckeys";


ReactDOM.render(<Funckeys />, document.getElementById("calculator"));


const theme1 = document.querySelector(".theme1");
const theme2 = document.querySelector(".theme2");
theme2.onclick = (event) => {
    event.target.style.backgroundColor = "rgb(199, 51, 51)";
    theme1.style.backgroundColor = "rgb(45, 45, 95)"
}
theme1.onclick = (event) => {
    event.target.style.backgroundColor = "rgb(199, 51, 51)";
    theme2.style.backgroundColor = "rgb(45, 45, 95)"
}
