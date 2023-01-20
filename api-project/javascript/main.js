import "../css/style.css";
import { DOM } from "./dom";
const APIurl = "https://valorant-api.com/v1/agents";

/* function userInput() {
  let input = DOM.searchInput;
}

DOM.button.addEventListener("submit", function clearInputs() {
  DOMSelector.searchInput.value = "";
}); */

async function getData(APIurl) {
  try {
    const response = await fetch(APIurl);
    const data = await response.json();
    console.log(data);
    data.data.forEach((el) => {
      DOM.content.insertAdjacentHTML(
        "beforeend",
        `<div class="agent">
        <h2>${el.displayName}</h2>
        <img class="image" src="${el.fullPortrait}" alt="character-image" />
        <p class="description">${el.description}</p>
        </div>`
      );
      console.log(el.displayName);
    });
  } catch (error) {
    console.log(error);
  }
}
getData(APIurl);
