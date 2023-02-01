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
    console.log(el.displayName);
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

DOM.form.addEventListener("submit", function (a) {
  a.preventDefault();

  let userInput = DOM.searchInput.value;
  console.log(userInput);

  DOM.content.innerHTML = "";
  async function newAgent(agentsURL, userInput) {
    try {
      const response = await fetch(agentsURL);
      const data = await response.json();
      data.data
        .filter((el) => el.displayName.includes(`${userInput}`))
        .map((el) => {
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
    } catch (error) {
      console.log(error);
    }
  }
  newAgent(agentsURL, userInput);
});
