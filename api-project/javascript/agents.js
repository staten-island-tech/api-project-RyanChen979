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
          <img class="image" src="${el.fullPortrait}" alt="" />
        </div>
        <div class="card-back">
          <h2 class="name">${el.displayName}</h2>
          <img class="image" src="${el.displayIcon}" alt="" />
          <p class="description">${el.description}</p>
          <h3>Abilities:</h3>
          <ul>
            <li>${el.abilities[0].displayName}</li>
            <img src="${el.abilities[0].displayIcon}" alt="">
            <li>${el.abilities[1].displayName}</li>
            <img src="${el.abilities[1].displayIcon}" alt="">
            <li>${el.abilities[2].displayName}</li>
            <img src="${el.abilities[2].displayIcon}" alt="">
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

    if (data.status <= 199 || data.status >= 300) {
      throw new Error(data);
    } else {
      agentsDATA(data);
    }
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
          <img class="image" src="${el.fullPortrait}" alt="" />
        </div>
        <div class="card-back">
          <h2 class="name">${el.displayName}</h2>
          <img class="image" src="${el.displayIcon}" alt="" />
          <p class="description">${el.description}</p>
          <h3>Abilities:</h3>
          <ul>
            <li>${el.abilities[0].displayName}</li>
            <img src="${el.abilities[0].displayIcon}" alt="">
            <li>${el.abilities[1].displayName}</li>
            <img src="${el.abilities[1].displayIcon}" alt="">
            <li>${el.abilities[2].displayName}</li>
            <img src="${el.abilities[2].displayIcon}" alt="">
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
