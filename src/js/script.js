const number = document.querySelector(".number");
const intervalNumber = document.querySelector("#intervalNumber");
const btnGenerate = document.querySelector(".generate");

function rangeMax(range) {
  const randomNumber = Math.floor(Math.random() * range + 1);
  return (number.innerHTML = randomNumber);
}

const generateNumber = () => {
  let intervalNumberChooise = Number(intervalNumber.value);

  if (!intervalNumberChooise) {
    return rangeMax(10);
  }

  return rangeMax(intervalNumberChooise);
};

btnGenerate.addEventListener("click", () => {
  generateNumber();
});
