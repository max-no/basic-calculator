let display = document.querySelector('#display-text');

//create number buttons
let entryNumbers = document.querySelector('#entry-digits');
for (let i = 0; i <= 14; i++) {
  const numberButton = document.createElement('button');
  numberButton.id = `numberButton${i}`;
  numberButton.classList.add('number-button');
  entryNumbers.appendChild(numberButton);
}
let numberButtons = document.querySelectorAll('.number-button');

//create modifier buttons
let modifierButtons = document.querySelector('#function-digits');
for (let i = 0; i <= 4; i++) {
  const functionButton = document.createElement('button');
  functionButton.id = `functionButton${i}`;
  functionButton.classList.add('function-button');
  modifierButtons.appendChild(functionButton);
}
let a, b;
let storedDisplay;
let operator;
let previousAnswer;
let displayMustBeCleared = false;

numberButtons.forEach((number) => {
  number.addEventListener('click', () => {
    switch (number.id) {
      case 'numberButton13':
        if (displayMustBeCleared) {
          display.textContent = '';
          displayMustBeCleared = false;
        }
        if (sequentialOperation) {
          display.textContent += '0';
        } else display.textContent += '0';
        break;

      case 'numberButton9':
        if (displayMustBeCleared) {
          display.textContent = '';
          displayMustBeCleared = false;
        }
        if (sequentialOperation) {
          display.textContent += '1';
        } else display.textContent += '1';
        break;

      case 'numberButton10':
        if (displayMustBeCleared) {
          display.textContent = '';
          displayMustBeCleared = false;
        }
        if (sequentialOperation) {
          display.textContent += '2';
        } else display.textContent += '2';
        break;

      case 'numberButton11':
        if (displayMustBeCleared) {
          display.textContent = '';
          displayMustBeCleared = false;
        }
        if (sequentialOperation) {
          display.textContent += '3';
        } else display.textContent += '3';
        break;

      case 'numberButton6':
        if (displayMustBeCleared) {
          display.textContent = '';
          displayMustBeCleared = false;
        }
        if (sequentialOperation) {
          display.textContent += '4';
        } else display.textContent += '4';
        break;

      case 'numberButton7':
        if (displayMustBeCleared) {
          display.textContent = '';
          displayMustBeCleared = false;
        }
        if (sequentialOperation) {
          display.textContent += '5';
        } else display.textContent += '5';
        break;

      case 'numberButton8':
        if (displayMustBeCleared) {
          display.textContent = '';
          displayMustBeCleared = false;
        }
        if (sequentialOperation) {
          display.textContent += '6';
        } else display.textContent += '6';
        break;

      case 'numberButton3':
        if (displayMustBeCleared) {
          display.textContent = '';
          displayMustBeCleared = false;
        }
        if (sequentialOperation) {
          display.textContent += '7';
        } else display.textContent += '7';
        break;

      case 'numberButton4':
        if (displayMustBeCleared) {
          display.textContent = '';
          displayMustBeCleared = false;
        }
        if (sequentialOperation) {
          display.textContent += '8';
        } else display.textContent += '8';
        break;

      case 'numberButton5':
        if (displayMustBeCleared) {
          display.textContent = '';
          displayMustBeCleared = false;
        }
        if (sequentialOperation) {
          display.textContent += '9';
        } else display.textContent += '9';
        break;

      case 'numberButton2':
        display.textContent = display.textContent.slice(0, -1);
        break;

      case 'numberButton14':
        let decimalAdded = false;
        if (display.textContent.includes('.')) {
          decimalAdded = true;
          break;
        }
        if (!decimalAdded) display.textContent += '.';
        break;

      case 'numberButton12':
        if (displayMustBeCleared) {
          display.textContent = '';
          displayMustBeCleared = false;
        }
        if (sequentialOperation) {
          display.textContent = Math.floor(Math.random() * 1000);
        } else display.textContent = Math.floor(Math.random() * 1000);

        break;
    }
    storedDisplay = display.textContent;
    if (display.textContent.length > 8)
      display.textContent = display.textContent.slice(0, 9);
    console.log(`Current value of first number is ${storedDisplay}`);
    console.log(`Current value of second number is ${b}`);
  });
});

let sequentialOperation = false;

let modifiers = document.querySelectorAll('.function-button');
modifiers.forEach((modifier) => {
  modifier.addEventListener('click', () => {
    //if (sequentialOperation)

    if (modifier.id === 'functionButton0') {
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
        display.textContent = operate(operator);
        console.log(`Sequential operator is ${sequentialOperation}`);
        a = operate(operator);
        return;
      }
      if (previousAnswer !== undefined) {
        a = previousAnswer;
      } else a = +storedDisplay;

      sequentialOperation = false;
      operator = 'add';
      console.log(`Operator is ${operator}`);

      console.log(`First number to be operated on is ${a}`);
      display.textContent = '';
      //if (a >= 0 && b >= 0) display.textContent = add(a, b);
    }
    if (modifier.id === 'functionButton1') {
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
        display.textContent = operate(operator);
        console.log(`Sequential operator is ${sequentialOperation}`);
        a = operate(operator);
        return;
      }
      if (previousAnswer !== undefined) {
        a = previousAnswer;
      } else a = +storedDisplay;

      sequentialOperation = false;
      operator = 'subtract';
      console.log(`Operator is ${operator}`);

      console.log(`First number to be operated on is ${a}`);
      display.textContent = '';
    }
    if (modifier.id === 'functionButton2') {
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
        display.textContent = operate(operator);
        console.log(`Sequential operator is ${sequentialOperation}`);
        a = operate(operator);
        return;
      }
      if (previousAnswer !== undefined) {
        a = previousAnswer;
      } else a = +storedDisplay;

      sequentialOperation = false;
      operator = 'multiply';
      console.log(`Operator is ${operator}`);

      console.log(`First number to be operated on is ${a}`);
      display.textContent = '';
    }
    if (modifier.id === 'functionButton3') {
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
        display.textContent = operate(operator);
        console.log(`Sequential operator is ${sequentialOperation}`);
        a = operate(operator);
        return;
      }
      if (previousAnswer !== undefined) {
        a = previousAnswer;
      } else a = +storedDisplay;

      sequentialOperation = false;
      operator = 'divide';
      console.log(`Operator is ${operator}`);

      console.log(`First number to be operated on is ${a}`);
      display.textContent = '';
    }
    if (modifier.id === 'functionButton4') {
      b = +display.textContent;
      let solution = operate(operator);
      display.textContent = solution;
      console.log(`solution length is ${solution.length}`);
      if (display.textContent.length > 8) {
        display.textContent = display.textContent.slice(0, 8);
      }
      previousAnswer = solution;
      console.log(`Previous answer was ${previousAnswer}`);
      operator = undefined;
      sequentialOperation = false;
      displayMustBeCleared = true;
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
  if (b === 0) {
    return 'YUUUUUGE';
  } else return +a / +b;
}

function multiply(a, b) {
  return +a * +b;
}

function allClear() {
  display.textContent = '';
  plusSelected = false;
  minusSelected = false;
  multiplySelected = false;
  divideSelected = false;
  modifierSelected = false;
  equalsPushed = false;
  displayCleared = false;
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

//case statements
let plusSelected = false;
let minusSelected = false;
let multiplySelected = false;
let divideSelected = false;
let modifierSelected = false;
let equalsPushed = false;
let displayCleared = false;

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
