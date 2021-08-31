// create an array to store the colors
const colorsArray = [
  "blue",
  "red",
  "yellow",
  "brown",
  "orange",
  "purple",
  "black",
  "green",
];

// select our button from the dom
const button = document.querySelector(`button`);

// initialize starting index
let idx = 0;

// add click event listener to the button
button.addEventListener(`click`, (evt) => {
  // if idx equals length of colors array, reset idx to zero
  if (idx === colorsArray.length) idx = 0;
  // change background color of body according to the idx of colors array
  document.body.style.backgroundColor = colorsArray[idx];
  // add 1 to idx
  idx++;
});
