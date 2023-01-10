import "../css/style.css";
import { DOM } from "./dom";
const APIurl = "https://api.jikan.moe/v4/anime?q=haikyuu&sfw";

document.querySelector(".title").innerHTML = `
  <div>
    <h1>API Search</h1>
  </div>
`;

document.querySelector(".search").innerHTML = `
  <div>
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
  </div>
`;
