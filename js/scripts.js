const counterTextElement = document.getElementById('counter-text');
const buttonsElement = document.getElementById('buttons');
const resetButtonElement = document.getElementById('reset-button');
const inputPasswordElement = document.getElementById('input-password');
const listElement = document.getElementById('list');

const numbers = '123567890';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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

const getAmountOfSpecialCharactersInPassword = password => {
  let amountOfSpecialCharacters = 0;
  for (const character of password) {
    if (specialCharacters.includes(character)) {
      amountOfSpecialCharacters++;
    }
  }

  return amountOfSpecialCharacters;
};

const getAmountOfUppercaseInPassword = password => {
  let amountOfUppercase = 0;
  for (const character of password) {
    if (uppercase.includes(character)) {
      amountOfUppercase++;
    }
  }

  return amountOfUppercase;
};

const getAmountOfNumbersInPassword = password => {
  let amountOfNumbers = 0;
  for (const character of password) {
    if (numbers.includes(character)) {
      amountOfNumbers++;
    }
  }

  return amountOfNumbers;
};

const areNumbersInPassword = password => {
  return password.split('').some(character => numbers.includes(character));
};

const printPasswordInfo = password => {
  const amountOfNumbers = getAmountOfNumbersInPassword(password);
  const amountOfUppercase = getAmountOfUppercaseInPassword(password);
  const amountOfSpecialCharacters = getAmountOfSpecialCharactersInPassword(password);

  const fragment = document.createDocumentFragment();

  const newCharactersLength = document.createElement('li');
  newCharactersLength.textContent = `El texto tiene ${password.length} caracteres`;

  if (password.length > 5) {
    newCharactersLength.classList.remove('error');
    newCharactersLength.classList.add('ok');
  } else {
    newCharactersLength.classList.remove('ok');
    newCharactersLength.classList.add('error');
  }
  const newAmountOfNumbers = document.createElement('li');
  newAmountOfNumbers.textContent = `El texto tiene ${amountOfNumbers} números`;

  if (amountOfNumbers > 0) {
    newAmountOfNumbers.classList.remove('error');
    newAmountOfNumbers.classList.add('ok');
  } else {
    newAmountOfNumbers.classList.remove('ok');
    newAmountOfNumbers.classList.add('error');
  }

  const numberOfUppercase = document.createElement('li');
  numberOfUppercase.textContent = `El texto tiene ${amountOfUppercase} mayúsculas`;

  if (amountOfUppercase > 0) {
    numberOfUppercase.classList.remove('error');
    numberOfUppercase.classList.add('ok');
  } else {
    numberOfUppercase.classList.remove('ok');
    numberOfUppercase.classList.add('error');
  }

  const numberOfSpecialCharacters = document.createElement('li');
  numberOfSpecialCharacters.textContent = `El texto tiene ${amountOfSpecialCharacters} caracters especiales.`;

  if (amountOfSpecialCharacters > 1) {
    numberOfSpecialCharacters.classList.remove('error');
    numberOfSpecialCharacters.classList.add('ok');
  } else {
    numberOfSpecialCharacters.classList.remove('ok');
    numberOfSpecialCharacters.classList.add('error');
  }

  fragment.append(newCharactersLength, numberOfUppercase, newAmountOfNumbers, numberOfSpecialCharacters);

  listElement.textContent = '';
  listElement.append(fragment);
};

const getUserPassword = event => {
  const userPassword = event.target.value;
  printPasswordInfo(userPassword);
};

buttonsElement.addEventListener('click', updateCounter);
changeWordButtonElement.addEventListener('click', changeWord);
inputPasswordElement.addEventListener('input', getUserPassword);
