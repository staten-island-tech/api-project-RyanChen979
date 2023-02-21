import "../css/style.css";
import { DOM } from "./dom.js";
const agentsURL = "https://valorant-api.com/v1/agents";

function agentsDATA(data) {
  data.data.forEach((el) => {
    DOM.content.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img class="image" src="${el.fullPortrait}" alt="character-image" />
          </div>
          <div class="card-back">
            <h2 class="name">${el.displayName}</h2>
            <img class="image" src="${el.displayIcon}" alt="character-image" />
            <p class="description">${el.description}</p>
            <h3>Abilities:</h3>
            <ol>
              <div class="row">
                <li>${el.abilities[0].displayName}</li>
                <img class="img" src="${el.abilities[0].displayIcon}" alt="Ability 1 image" />
              </div>
              <div class="row">
                <li>${el.abilities[1].displayName}</li>
                <img class="img" src="${el.abilities[1].displayIcon}" alt="Ability 2 image" />
              </div>
              <div class="row">
                <li>${el.abilities[2].displayName}</li>
                <img class="img" src="${el.abilities[2].displayIcon}" alt="Ability 3 image" />
              </div>
            </ol>
          </div>
        </div>
      </div>
      `
    );
    console.log(el.displayName);
  });
}

async function agents(agentsURL) {
  try {
    const response = await fetch(agentsURL);
    const data = await response.json();
    console.log(data);

    if (data.status <= 199 || data.status >= 300) {
      throw new Error(data);
    } else {
      agentsDATA(data);
    }
  } catch (error) {
    console.error("There's a problem with the API");
  }
}
agents(agentsURL);

DOM.form.addEventListener("submit", function (a) {
  a.preventDefault();

  let input = DOM.searchInput.value;
  const userInput =
    input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  console.log(`User searched: ${userInput}`);

  DOM.content.innerHTML = "";
  async function newAgent(agentsURL, userInput) {
    try {
      const response = await fetch(agentsURL);
      const data = await response.json();

      if (data.data.filter((el) => el.displayName.includes(`${userInput}`))) {
        data.data
          .filter((el) => el.displayName.includes(`${userInput}`))
          .map((el) => {
            DOM.content.insertAdjacentHTML(
              "beforeend",
              `
              <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <img class="image" src="${el.fullPortrait}" alt="${el.displayName} portrait" />
                  </div>
                  <div class="card-back">
                    <h2 class="name">${el.displayName}</h2>
                    <img class="image" src="${el.displayIcon}" alt="${el.displayName} icon" />
                    <p class="description">${el.description}</p>
                    <h3>Abilities:</h3>
                    <ol>
                      <li>${el.abilities[0].displayName}</li>
                      <img src="${el.abilities[0].displayIcon}" alt="${el.abilities[0].displayName}">
                      <li>${el.abilities[1].displayName}</li>
                      <img src="${el.abilities[1].displayIcon}" alt="${el.abilities[1].displayName}">
                      <li>${el.abilities[2].displayName}</li>
                      <img src="${el.abilities[2].displayIcon}" alt="${el.abilities[2].displayName}">
                    </ol>
                  </div>
                </div>
              </div>
              `
            );
          });
      } else {
        DOM.content.insertAdjacentHTML(
          "beforeend",
          `¯\_(ツ)_/¯ check ur spelling smh`
        );
      }
    } catch (error) {
      console.error();
    }
  }
  newAgent(agentsURL, userInput);
});
