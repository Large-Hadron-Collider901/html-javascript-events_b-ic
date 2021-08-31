// select our elements from the dom
let theWholeBody = document.querySelector(`body`);
let redButton = document.getElementById(`red`);
let greenButton = document.getElementById(`green`);
let blueButton = document.getElementById(`blue`);

// add mouseover event listener to the red button
redButton.addEventListener(`mouseover`, (evt) => {
  // change background color to red
  theWholeBody.style.backgroundColor = `red`;
});

greenButton.addEventListener(`mouseover`, (evt) => {
  theWholeBody.style.backgroundColor = `green`;
});

blueButton.addEventListener(`mouseover`, (evt) => {
  theWholeBody.style.backgroundColor = `blue`;
});
