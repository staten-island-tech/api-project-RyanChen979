import "../css/style.css";
import { DOM } from "./dom";
const APIurl = "https://valorant-api.com/v1/agents";

async function getData(APIurl) {
  const response = await fetch(APIurl);
  const data = await response.json();

  data.data.forEach((el) => {
    DOM.content.insertAdjacentHTML(
      "beforeend",
      `<div class="names"><h2>${el.displayName}</h2></div>`
    );
    console.log(el.displayName);
  });
  console.log(data);
  /* try {
  } catch (error) {
    console.log(error);
  } */
}
getData(APIurl);

// DOM.button.addEventListener("submit", function clearInputs() {
//   DOMSelector.name.value = "";
//   DOMSelector.character.value = "";
//   DOMSelector.url.value = "";
//   DOMSelector.gender.value = "";
//   DOMSelector.age.value = "";
// });

// DOM.searchInput.innerHTML = `
//   <div>

//   </div>
// `;

// DOM.content.innerHTML = `
//   <div>

//   </div>
// `;
