/*questa funzione ci permette di creare 1 77 numberi casuali dentro un array*/

const numbers = [];

const randomNumberGenerator = function () {
  const number = [];
  for (let i = 0; i < 77; i++) {
    const randomNumber = Math.floor(Math.random());
    numbers.push(randomNumber);
    number.push(randomNumber);
  }
  return number;
};

function displayNumbersGenerated(click) {
  click.preventDefault();
  const randomNumbers = randomNumberGenerator();
  console.log(randomNumbers);
}

console.log("Your numbers are:", numbers);

/*qui mettiamo il codice che ci permette di creare una nuova lista random di numri*/
const clickToGenerateNumber = document.getElementById("numberGeneratorButton");
clickToGenerateNumber.addEventListener("click", displayNumbersGenerated);

/*qui creiamo un modo per mettere i numeri generati dentro ogni td del table(id="table") del div(id="bingoBoard")*/
