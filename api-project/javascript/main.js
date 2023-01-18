import "../css/style.css";
import { DOM } from "./dom";
const APIurl = "https://valorant-api.com/v1/agents";

async function getData(APIurl) {
  try {
    const response = await fetch(APIurl);
    const data = await response.json();
    console.log(data);
    console.log(data.bustPortrait);
  } catch (error) {
    console.log(error);
  }
}
getData(APIurl);

// DOM.searchInput.innerHTML = `
//   <div>

//   </div>
// `;

// DOM.content.innerHTML = `
//   <div>

//   </div>
// `;
