let display = document.querySelector('#display-text');

//create number buttons
let entryNumbers = document.querySelector('#entry-digits');
for (let i = 0; i <= 14; i++) {
  const numberButton = document.createElement('button');
  numberButton.id = `numberButton${i}`;
  numberButton.classList.add('number-button');
  numberButton.setAttribute('style', 'background: none;');
  entryNumbers.appendChild(numberButton);
}
let numberButtons = document.querySelectorAll('.number-button');

//create modifier buttons
let modifierButtons = document.querySelector('#function-digits');
for (let i = 0; i <= 4; i++) {
  const functionButton = document.createElement('button');
  functionButton.id = `functionButton${i}`;
  functionButton.classList.add('function-button');
  functionButton.setAttribute('style', 'background: none;');
  modifierButtons.appendChild(functionButton);
}
let a, b;
let storedDisplay;
let operator;
let previousAnswer;
let displayMustBeCleared = false;

function prepareNewEntry() {
  if (displayMustBeCleared) {
    display.textContent = '';
    displayMustBeCleared = false;
  }
}

let hoverBackground = 'rgba(211, 211, 211, 0.54)';

numberButtons.forEach((number) => {
  number.addEventListener('mouseover', () => {
    if (number.id === 'numberButton1') return;
    if (number.id === 'numberButton0')
      number.style.background = 'rgba(247, 21, 21, 0.56)';
    else number.style.background = hoverBackground;
  });
  number.addEventListener('mouseout', () => {
    if (number.id === 'numberButton1') return;
    number.setAttribute('style', 'background: none;');
  });

  number.addEventListener('mousedown', () => {
    if (number.id === 'numberButton1') return;
    if (number.id === 'numberButton0')
      number.style.background = 'rgba(247, 21, 21, 0.93)';
    else number.style.background = 'rgb(200, 200, 200)';
  });

  number.addEventListener('mouseup', () => {
    if (number.id === 'numberButton1') return;
    if (number.id === 'numberButton0')
      number.style.background = 'rgba(247, 21, 21, 0.56)';
    else number.style.background = hoverBackground;
  });

  number.addEventListener('click', () => {
    prepareNewEntry();
    switch (number.id) {
      case 'numberButton1':
        return;
        break;
      case 'numberButton13':
        display.textContent += '0';
        break;

      case 'numberButton9':
        display.textContent += '1';
        break;

      case 'numberButton10':
        display.textContent += '2';
        break;

      case 'numberButton11':
        display.textContent += '3';
        break;

      case 'numberButton6':
        display.textContent += '4';
        break;

      case 'numberButton7':
        display.textContent += '5';
        break;

      case 'numberButton8':
        display.textContent += '6';
        break;

      case 'numberButton3':
        display.textContent += '7';
        break;

      case 'numberButton4':
        display.textContent += '8';
        break;

      case 'numberButton5':
        display.textContent += '9';
        break;

      case 'numberButton2':
        display.textContent = display.textContent.slice(0, -1);
        break;

      case 'numberButton14':
        if (!display.textContent.includes('.')) {
          display.textContent += '.';
        }
        break;

      case 'numberButton12':
        display.textContent = Math.floor(Math.random() * 1000);
        break;
    }
    if (display.textContent.length > 8) {
      display.textContent = display.textContent.slice(0, 9);
    }
    storedDisplay = display.textContent;

    console.log(`Current value of first number is ${storedDisplay}`);
    console.log(`Current value of second number is ${b}`);
  });
});

let sequentialOperation = false;
let modifierHoverBackground = 'rgba(0, 128, 255, 0.3)';
let modifiers = document.querySelectorAll('.function-button');
modifiers.forEach((modifier) => {
  modifier.addEventListener('mouseover', () => {
    if (modifier.id === 'functionButton4')
      modifier.style.background = 'rgba(6, 210, 67, 0.44)';
    else modifier.style.background = modifierHoverBackground;
  });
  modifier.addEventListener('mouseout', () => {
    modifier.setAttribute('style', 'background: none;');
  });

  modifier.addEventListener('mousedown', () => {
    if (modifier.id === 'functionButton4')
      modifier.style.background = 'rgba(6, 210, 67, 0.94)';
    else modifier.style.background = 'rgb(0, 128, 255)';
  });

  modifier.addEventListener('mouseup', () => {
    if (modifier.id === 'functionButton4')
      modifier.style.background = 'rgba(6, 210, 67, 0.44)';
    else modifier.style.background = modifierHoverBackground;
  });
  modifier.addEventListener('click', () => {
    switch (modifier.id) {
      case 'functionButton0':
        if (
          operator === 'add' ||
          operator === 'subtract' ||
          operator === 'multiply' ||
          operator === 'divide'
        ) {
          sequentialOperation = true;
        }
        if (sequentialOperation) {
          displayMustBeCleared = true;
          console.log(`displayMustBeCleared ${displayMustBeCleared}`);
          b = display.textContent;
          let result = operate(operator);
          display.textContent = result;
          a = result;
          operator = 'add';
          return;
        }
        if (+previousAnswer === +display.textContent) {
          a = +display.textContent;
        }
        if (+previousAnswer !== +display.textContent) a = +storedDisplay;

        sequentialOperation = false;
        operator = 'add';
        console.log(`Operator is ${operator}`);

        console.log(`First number to be operated on is ${a}`);
        display.textContent = '';
        break;
      case 'functionButton1':
        if (
          operator === 'add' ||
          operator === 'subtract' ||
          operator === 'multiply' ||
          operator === 'divide'
        ) {
          sequentialOperation = true;
        }
        if (sequentialOperation) {
          displayMustBeCleared = true;
          console.log(`displayMustBeCleared ${displayMustBeCleared}`);
          b = display.textContent;
          let result = operate(operator);
          display.textContent = result;
          a = result;
          operator = 'subtract';
          return;
        }
        if (+previousAnswer === +display.textContent) {
          a = +display.textContent;
        }
        if (+previousAnswer !== +display.textContent) a = +storedDisplay;

        sequentialOperation = false;
        operator = 'subtract';
        display.textContent = '';
        break;
      case 'functionButton2':
        if (
          operator === 'add' ||
          operator === 'subtract' ||
          operator === 'multiply' ||
          operator === 'divide'
        ) {
          sequentialOperation = true;
        }
        if (sequentialOperation) {
          displayMustBeCleared = true;
          b = display.textContent;
          let result = operate(operator);
          display.textContent = result;
          a = result;
          operator = 'multiply';
          return;
        }
        if (+previousAnswer === +display.textContent) {
          a = +display.textContent;
        }
        if (+previousAnswer !== +display.textContent) a = +storedDisplay;

        sequentialOperation = false;
        operator = 'multiply';
        display.textContent = '';
        break;
      case 'functionButton3':
        if (
          operator === 'add' ||
          operator === 'subtract' ||
          operator === 'multiply' ||
          operator === 'divide'
        ) {
          sequentialOperation = true;
        }
        if (sequentialOperation) {
          displayMustBeCleared = true;
          b = display.textContent;
          let result = operate(operator);
          display.textContent = result;
          a = result;
          operator = 'divide';
          return;
        }
        if (+previousAnswer === +display.textContent) {
          a = +display.textContent;
        }
        if (+previousAnswer !== +display.textContent) a = +storedDisplay;

        sequentialOperation = false;
        operator = 'divide';
        display.textContent = '';
        break;
      case 'functionButton4':
        if (!operator) return;
        b = display.textContent;
        if (b === '') {
          display.textContent = 'Error';
          operator = undefined;
          sequentialOperation = false;
          displayMustBeCleared = true;
          return;
        }
        let solution = operate(operator);
        display.textContent = solution;
        console.log(`solution length is ${display.textContent.length}`);
        if (display.textContent.length > 8) {
          display.textContent = display.textContent.slice(0, 8);
        }
        previousAnswer = solution === 'Error' ? undefined : +solution;
        console.log(`Previous answer was ${previousAnswer}`);
        operator = undefined;
        sequentialOperation = false;
        displayMustBeCleared = true;
        break;
    }
  });
});

//functions
function operate(operator) {
  switch (operator) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
  }
}

function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function divide(a, b) {
  if (+b === 0) {
    return 'Error';
  }
  return +a / +b;
}

function multiply(a, b) {
  return +a * +b;
}

function allClear() {
  display.textContent = '';
  displayMustBeCleared = false;
  a = undefined;
  b = undefined;
  previousAnswer = undefined;
  operator = undefined;
  sequentialOperation = false;
  console.log('All clear pressed');
}

function clearDisplay() {
  displayCleared = false;
  display.textContent = '';
}

//nodes
let plusButton = document.querySelector('#functionButton0');
plusButton.textContent = '+';
let minusButton = document.querySelector('#functionButton1');
minusButton.textContent = '−';
let multiplyButton = document.querySelector('#functionButton2');
multiplyButton.textContent = '×';
let divideButton = document.querySelector('#functionButton3');
divideButton.textContent = '÷';
let equalsButton = document.querySelector('#functionButton4');
equalsButton.textContent = '=';
//number buttons
let zeroButton = document.querySelector('#numberButton13');
zeroButton.textContent = '0';
let oneButton = document.querySelector('#numberButton9');
oneButton.textContent = '1';
let twoButton = document.querySelector('#numberButton10');
twoButton.textContent = '2';
let threeButton = document.querySelector('#numberButton11');
threeButton.textContent = '3';
let fourButton = document.querySelector('#numberButton6');
fourButton.textContent = '4';
let fiveButton = document.querySelector('#numberButton7');
fiveButton.textContent = '5';
let sixButton = document.querySelector('#numberButton8');
sixButton.textContent = '6';
let sevenButton = document.querySelector('#numberButton3');
sevenButton.textContent = '7';
let eightButton = document.querySelector('#numberButton4');
eightButton.textContent = '8';
let nineButton = document.querySelector('#numberButton5');
nineButton.textContent = '9';
let decimal = document.querySelector('#numberButton14');
decimal.textContent = '.';
let random = document.querySelector('#numberButton12');
random.textContent = '?';
let allClearButton = document.querySelector('#numberButton0');
allClearButton.textContent = 'C';
allClearButton.addEventListener('click', allClear);
let backspace = document.querySelector('#numberButton2');
backspace.textContent = '⌫';
