import "../css/style.css";
import { DOM } from "./dom";
const APIurl = "https://valorant-api.com/v1/agents";

async function getAPI(APIurl) {
  const response = await fetch(APIurl);
  console.log(response);
}
getAPI(APIurl);

document.querySelector(".title").innerHTML = `
  <div>
    <h1>API Search</h1>
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
