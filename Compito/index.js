function tdBackgroundChange(numbers) {
  let getAllTds = document.querySelectorAll("#bingoBoard td");
  for (let i = 0; i < getAllTds.length; i++) {
    const allOfTd = getAllTds[i];
    const allTdsNumbers = parseInt(allOfTd.textContent);

    if (numbers.includes(allTdsNumbers)) {
      allOfTd.setAttribute("style", "background-color: olive");
    }
  }
}

const numberGeneratorButton = document
  .getElementById("numberGeneratorButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const randomNumbers = [Math.floor(Math.random() * 77) + 1];

    tdBackgroundChange(randomNumbers);
  });
