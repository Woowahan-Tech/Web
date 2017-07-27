import _ from "./util.js";
import "./index.css";

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World!!</p>`;
_.log(root.innerHTML);
