import "../css/style.css";
import { DOM } from "./DOM";
const APIurl = "https://valorant-api.com/v1/agents";

async function getData(APIurl) {
  try {
    const response = await fetch(APIurl);
    const data = await response.json();
    console.log(data);
    data.data.forEach((el) => {
      console.log(`Name: ${el.displayName}, UUID: ${el.uuid}`);
      DOM.content.insertAdjacentHTML(
        "beforeend",
        `<div class="agent">
         <h2 class="name">${el.displayName}</h2>
         <img class="image" src="${el.fullPortrait}" alt="character-image" />
         </div>`
      );
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
getData(APIurl);

function searchAPI() {
  DOM.button.addEventListener("submit", function searchAgent() {
    DOM.content.innerHTML = "";

    let newAgent = DOM.searchInput.value;
    console.log(newAgent);
    function newCard(data) {
      const thing = data.data.filter(data.data);
      DOM.content.insertAdjacentHTML(
        "beforeend",
        `<div class="agent">
           <h2 class="name">${newAgent.displayName}</h2>
           <img class="image" src="${newAgent.fullPortrait}" alt="character-image" />
           <p class="description">${newAgent.description}</p>
           <p class="dev">Developer: ${newAgent.developerName}</p>
           </div>`
      );
    }
  });
  searchAgent();
}
searchAPI();
