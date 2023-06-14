const numberGeneratorButton = document.getElementById("numberGeneratorButton");

const randomNumbers = [];

numberGeneratorButton.addEventListener("click", randomNumberGenerator);

function randomNumberGenerator() {
  const number = Math.floor(Math.random() * 76) + 1;

  randomNumbers.push(number);

  console.log(randomNumbers);
}

const table = document.getElementById("table");
const tdSection = document.querySelector("td");
const tdInnerText = tdSection.innerText;

function compareTableNumbers() {
  if (randomNumbers.indexOf(parseInt(tdSection.innerText)) !== -1) {
    tdSection.style.backgroundColor = "royalblue";
  } else console.log(randomNumbers);
}
