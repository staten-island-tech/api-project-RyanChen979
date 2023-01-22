import "../css/style.css";
import { DOM } from "./DOM";
const APIurl = "https://valorant-api.com/v1/agents";

async function getData(APIurl) {
  try {
    const response = await fetch(APIurl);
    const data = await response.json();
    console.log(data);
    data.data.forEach((el) => {
      console.log(el.displayName, el.uuid);
      delete data[7];
      DOM.content.insertAdjacentHTML(
        "beforeend",
        `<div class="agent">
        <h2>${el.displayName}</h2>
        <img class="image" src="${el.fullPortrait}" alt="character-image" />
        <p class="description">${el.description}</p>
        <p>Developer: ${el.developerName}</p>
        </div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
getData(APIurl);

async function searchAPI() {
  try {
    DOM.button.addEventListener("submit", function clearInputs() {
      DOM.content = "";
    });
  } catch (error) {}
}
searchAPI();
