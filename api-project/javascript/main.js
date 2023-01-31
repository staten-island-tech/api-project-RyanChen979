import "../css/style.css";
import { DOM } from "./DOM";
const agentsURL = "https://valorant-api.com/v1/agents";
const weaponsAndGearsURL = "https://valorant-api.com/v1/weapons";
const buddiesURL = "https://valorant-api.com/v1/buddies";
const bundlesURL = "https://valorant-api.com/v1/bundles";

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

function weaponsAndGearsDATA(data) {
  data.data.forEach((el) => {
    DOM.content.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img class="image" src="${el.displayIcon}" alt="character-image" />
        </div>
        <div class="card-back">
          <h2 class="name">${el.displayName}</h2>
          <img class="image" src="${el.displayIcon}" alt="character-image" />
          <p class="description">${el.description}</p>
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

async function weaponsAndGears(weaponsAndGearsURL) {
  try {
    const response = await fetch(weaponsAndGearsURL);
    const data = await response.json();
    weaponsAndGearsDATA(data);
  } catch (error) {
    console.log(error);
  }
}
// weaponsAndGears(weaponsAndGearsURL);

/* async function getData(agentsURL) {
  try {
    const response = await fetch(agentsURL);
    const data = await response.json();
    console.log(data);
    agentsDATA(data);
  } catch (error) {
    console.log(error);
  }
}
getData(agentsURL);

async function getData(agentsURL) {
  try {
    const response = await fetch(agentsURL);
    const data = await response.json();
    console.log(data);
    agentsDATA(data);
  } catch (error) {
    console.log(error);
  }
}
getData(agentsURL); */

/* function searchAPI() {
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
           </div>`
      );
    }
  });
  searchAgent();
}
searchAPI(); */
