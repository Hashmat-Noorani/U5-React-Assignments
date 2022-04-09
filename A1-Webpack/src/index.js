import "./index.css";
import logo from "./logo.png";

const img = document.createElement("img");
img.src = logo;
document.querySelector("#logo").append(img);
document.querySelector("button").addEventListener("click", () => {
  let note = document.querySelector(".test").value;
  const p = document.createElement("p");
  p.innerText = note;
  document.querySelector(".display").append(p);
});
