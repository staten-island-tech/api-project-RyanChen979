import "../css/style.css";
import { DOM } from "./dom";
const APIurl = "https://api.jikan.moe/v4/anime?q=haikyuu&sfw";

document.querySelector(".title").innerHTML = `
  <div>
    <h1>API Search</h1>
    <br />
  </div>
`;

document.querySelector(".search").innerHTML = `
  <div>
  
  </div>
`;

document.querySelector(".content").innerHTML = `
  <div>
  <p>hello</p>
  </div>
`;
