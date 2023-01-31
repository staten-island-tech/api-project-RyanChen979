import "../css/style.css";
import { DOM } from "./dom.js";
const agentsURL = "https://valorant-api.com/v1/agents";

function agentsDATA(data) {
  data.data.forEach((el) => {
    DOM.content.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img class="image" src="${el.fullPortrait}" alt="character-image" />
        </div>
        <div class="card-back">
          <h2 class="name">${el.displayName}</h2>
          <img class="image" src="${el.displayIcon}" alt="character-image" />
          <p class="description">${el.description}</p>
          <h3>Abilities:</h3>
          <ul>
            <li>${el.abilities[0].displayName}</li>
            <img src="${el.abilities[0].displayIcon}" alt="Ability 1 image">
            <li>${el.abilities[1].displayName}</li>
            <img src="${el.abilities[1].displayIcon}" alt="Ability 2 image">
            <li>${el.abilities[2].displayName}</li>
            <img src="${el.abilities[2].displayIcon}" alt="Ability 3 image">
          </ul>
        </div>
      </div>
    </div>`
    );
  });
}

async function agents(agentsURL) {
  try {
    const response = await fetch(agentsURL);
    const data = await response.json();
    agentsDATA(data);
  } catch (error) {
    console.log(error);
  }
}
agents(agentsURL);

function searchAPI() {
  let input = DOM.searchInput.value;

  DOM.button.addEventListener("submit", function searchAgent() {
    DOM.content.innerHTML = "";
    console.log(input.value);

    /* function singleAgent(data) {
      const search = data.data.filter(data.data);
      DOM.content.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img class="image" src="${el.fullPortrait}" alt="character-image" />
        </div>
        <div class="card-back">
          <h2 class="name">${el.displayName}</h2>
          <img class="image" src="${el.displayIcon}" alt="character-image" />
          <p class="description">${el.description}</p>
          <h3>Abilities:</h3>
          <ul>
            <li>${el.abilities[0].displayName}</li>
            <img src="${el.abilities[0].displayIcon}" alt="Ability 1 image">
            <li>${el.abilities[1].displayName}</li>
            <img src="${el.abilities[1].displayIcon}" alt="Ability 2 image">
            <li>${el.abilities[2].displayName}</li>
            <img src="${el.abilities[2].displayIcon}" alt="Ability 3 image">
          </ul>
        </div>
      </div>
    </div>`
      );
    } */
    searchAgent();
  });
}
searchAPI();
