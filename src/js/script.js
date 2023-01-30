const number = document.querySelector(".number");
const intervalNumber = document.querySelector("#intervalNumber");
const btnGenerate = document.querySelector(".generate");

const generateNumber = () => {
  let intervalNumberChoise = +intervalNumber.value;

  if (!intervalNumberChoise) {
    const randomNumber = Math.floor(Math.random() * 10);
    number.innerHTML = randomNumber;
  } else {
    const randomNumber = Math.floor(Math.random() * intervalNumberChoise + 1);
    number.innerHTML = randomNumber;
  }
};

btnGenerate.addEventListener("click", () => {
  generateNumber();
});
