import { CardComponent } from "../components/CardComponent.js";
import { products } from "../data/products.js";
let renderArea = document.querySelector("#renderArea");

// RENDER PRODUCT
products
  .slice(0, 20)
  .map((product) => (renderArea.innerHTML += CardComponent(product)));