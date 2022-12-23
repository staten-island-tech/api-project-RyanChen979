export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `stupidity level is ${counter}`;
  };
  element.addEventListener("click", function () {
    setCounter(counter + 1);
    random_bg_color();
  });
  setCounter(0);
}

export function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}
