const letter = "abcdefghijklmnopqrstuvwxyz";
const symbols = "~!@#$%^&*()_+`-=[];',./";
const numbers = "1234567890";

const keyHolder = document.querySelector("section div");
const button = document.querySelector("section input");

button.addEventListener("click", () => {
  randomKey();
});

const randomKey = () => {
  let randomKey = "";

  // random 3 numbers
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * numbers.length);
    randomKey += numbers[randomNumber];
  }

  //   random 2 symbols
  for (let i = 0; i < 2; i++) {
    const randomNumber = Math.floor(Math.random() * symbols.length);
    randomKey += symbols[randomNumber];
  }

  const lowerLetter = () => {
    const randomNumber = Math.floor(Math.random() * letter.length);
    randomKey += letter[randomNumber];
  };

  const upperLetter = () => {
    const randomNumber = Math.floor(Math.random() * letter.length);
    randomKey += letter[randomNumber].toUpperCase();
  };

  lowerLetter();
  upperLetter();

  for (let i = 0; i < 3; i++) {
    const upperOrLower = Math.floor(Math.random() * 2);
    const randomNumber = Math.floor(Math.random() * letter.length);
    randomKey += upperOrLower
      ? letter[randomNumber]
      : letter[randomNumber].toLocaleUpperCase();
  }

  const generatedKey = randomKey
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  return (keyHolder.innerText = generatedKey);
};
