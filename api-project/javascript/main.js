import "../css/style.css";
import { DOM } from "./dom";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://www.youtube.com/watch?v=5Q_2nrp9OTg" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.dictionary.com/browse/noob" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>What's Up Noob!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the logos to learn more about noobs
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
