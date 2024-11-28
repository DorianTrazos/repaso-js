const counterTextElement = document.getElementById('counter-text');
const buttonsElement = document.getElementById('buttons');
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
};

const changeWord = userPassword => {
  const randomNumber = Math.floor(Math.random() * words.length);
  randomWordElement.textContent = words[randomNumber];
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

const printPasswordInfo = password => {
  const amountOfNumbers = getAmountOfNumbersInPassword(password);

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
  if (amountOfNumbers > 1) {
    newAmountOfNumbers.classList.remove('error');
    newAmountOfNumbers.classList.add('ok');
  } else {
    newAmountOfNumbers.classList.remove('ok');
    newAmountOfNumbers.classList.add('error');
  }
  const numberOfCharacters = document.createElement('li');
  // const numberOfCharacters = document.createElement('li')
  fragment.append(newCharactersLength, newAmountOfNumbers);

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
