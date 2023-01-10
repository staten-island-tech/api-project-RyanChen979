import "../css/style.css";
import { DOM } from "./dom";
const APIurl = "https://api.jikan.moe/v4/anime?q=haikyuu&sfw";

document.querySelector(".title").innerHTML = `
  <div>
    <h1></h1>
  </div>
`;

document.querySelector(".search").innerHTML = `
  <div>
    <a href="https://www.youtube.com/watch?v=5Q_2nrp9OTg" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the logos to learn more about noobs
    </p>
  </div>
`;

document.querySelector(".content").innerHTML = `
  <div>
    <a href="https://www.youtube.com/watch?v=5Q_2nrp9OTg" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the logos to learn more about noobs
    </p>
  </div>
`;
