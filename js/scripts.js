const counterTextElement = document.getElementById('counter-text');
const buttonsElement = document.getElementById('buttons');
const resetButtonElement = document.getElementById('reset-button');
const inputPasswordElement = document.getElementById('input-password');
const listElement = document.getElementById('list');
const rootStyles = document.documentElement.style;

const numbers = '123567890';
const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

const words = [
  'apple',
  'banana',
  'cherry',
  'dog',
  'elephant',
  'flower',
  'grape',
  'house',
  'island',
  'jungle',
  'kite',
  'lion',
  'mountain',
  'night',
  'ocean',
  'piano',
  'queen',
  'river',
  'sun',
  'tree',
  'umbrella',
  'village',
  'water',
  'xylophone',
  'yellow',
  'zebra',
  'garden',
  'window',
  'cloud',
  'rocket'
];

const randomWordElement = document.getElementById('random-word-title');
const changeWordButtonElement = document.getElementById('change-word-button');

let counter = 0;

const updateTextCounter = () => {
  counterTextElement.textContent = counter;
};

const setDisabledButton = () => {
  resetButtonElement.disabled = counter === 0;
};

const updateCounter = event => {
  const type = event.target.dataset.type;
  if (type === 'increment') {
    counter++;
  } else if (type === 'reset') {
    counter = 0;
  } else if (type === 'decrement') {
    counter--;
  }

  updateTextCounter();
  setDisabledButton();
};

const changeWord = () => {
  const randomNumber = Math.floor(Math.random() * words.length);
  randomWordElement.textContent = words[randomNumber];
};

const changeTextColor = (value, minValue, element) => {
  if (value > minValue) {
    element.classList.add('ok');
  } else {
    element.classList.add('error');
  }
};

const getPasswordLength = password => {
  const charactersLength = document.createElement('li');
  charactersLength.textContent = `El password tiene ${password.length} caracteres`;

  changeTextColor(password.length, 5, charactersLength);

  return charactersLength;
};

const getAmountUppercase = password => {
  let amountOfUppercase = 0;
  for (const character of password) {
    if (uppercaseCharacters.includes(character)) {
      amountOfUppercase++;
    }
  }

  const uppercaseText = document.createElement('li');
  uppercaseText.textContent = `El password tiene ${amountOfUppercase} mayúsculas.`;

  changeTextColor(amountOfUppercase, 0, uppercaseText);

  return uppercaseText;
};

const getAmountNumbers = password => {
  let amountOfNumbers = 0;
  for (const character of password) {
    if (numbers.includes(character)) {
      amountOfNumbers++;
    }
  }

  const numbersText = document.createElement('li');
  numbersText.textContent = `El password tiene ${amountOfNumbers} números.`;

  changeTextColor(amountOfNumbers, 0, numbersText);

  return numbersText;
};

const getAmountSpecialCharacters = password => {
  let amountOfSpecialCharacters = 0;
  for (const character of password) {
    if (specialCharacters.includes(character)) {
      amountOfSpecialCharacters++;
    }
  }

  const specialCharactersText = document.createElement('li');
  specialCharactersText.textContent = `El password tiene ${amountOfSpecialCharacters} caracteres especiales.`;

  changeTextColor(amountOfSpecialCharacters, 1, specialCharactersText);

  return specialCharactersText;
};

const printPasswordInfo = password => {
  const fragment = document.createDocumentFragment();
  const passwordLengthText = getPasswordLength(password);
  const amountUppercaseText = getAmountUppercase(password);
  const amountNumbersText = getAmountNumbers(password);
  const amountSpecialCharactersText = getAmountSpecialCharacters(password);

  fragment.append(passwordLengthText, amountUppercaseText, amountNumbersText, amountSpecialCharactersText);

  listElement.textContent = '';
  listElement.append(fragment);
};

const getUserPassword = () => {
  const userPassword = inputPasswordElement.value;
  printPasswordInfo(userPassword);
};

buttonsElement.addEventListener('click', updateCounter);
changeWordButtonElement.addEventListener('click', changeWord);
inputPasswordElement.addEventListener('input', getUserPassword);
