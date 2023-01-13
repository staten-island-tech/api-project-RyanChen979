import "../css/style.css";
import { DOM } from "./dom";
const APIurl = "https://valorant-api.com/v1/agents";

async function getAPI(APIurl) {
  const response = await fetch(APIurl);
  console.log(response);
}
getAPI(APIurl);

DOM.searchInput.innerHTML = `
  <div>
  
  </div>
`;

DOM.content.innerHTML = `
  <div>
  <p>hello</p>
  </div>
`;
