//create number buttons
let entryNumbers = document.querySelector('#entry-digits');
for (let i = 0; i <= 14; i++) {
    const numberButton = document.createElement('button');
    numberButton.id = `numberButton${i}`;
    numberButton.classList.add('number-button');
    numberButton.textContent = `${i}`;
    entryNumbers.appendChild(numberButton);
  }

//create modifier buttons
let modifierButtons = document.querySelector('#function-digits');
for (let i = 0; i <= 4; i++) {
    const functionButton = document.createElement('button');
    functionButton.id = `functionButton${i}`;
    functionButton.classList.add('function-button');
    modifierButtons.appendChild(functionButton);
  }

  function add(a,b) {
    return (+a)+(+b);
  }

  function subtract(a,b) {
    return (+a)-(+b);
  }
  
  function divide(a,b) {
    return +a/+b;
  }

  function multiply(a,b) {
    return +a * +b;
  }

  function allClear() {

  }



  //handlers
  let allClearButton = document.querySelector()