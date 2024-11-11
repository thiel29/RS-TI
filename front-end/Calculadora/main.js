document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(`${theme}-theme`);

  const toggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("icon-theme");

  toggleButton.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // alternancia da classe do body
    document.body.classList.remove(`${currentTheme}-theme`);
    document.body.classList.add(`${newTheme}-theme`);

    themeIcon.src =
      newTheme === "dark" ? "./assets/sun.svg" : "./assets/moon.svg";

    localStorage.setItem("theme", newTheme);
  });
});

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
const percentageButton = document.querySelector("[data-percentage]");

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  formatDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];

    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  calculate() {
    let result;
    const _previousOperand = parseFloat(this.previousOperand);
    const _currentOperand = parseFloat(this.currentOperand);

    if (isNaN(_previousOperand) || isNaN(_currentOperand)) return;

    switch (this.operation) {
      case "+":
        result = _previousOperand + _currentOperand;
        break;
      case "-":
        result = _previousOperand - _currentOperand;
        break;
      case "÷":
        if (_currentOperand === 0) {
          this.currentOperand = "Error";
          return;
        }
        result = _previousOperand / _currentOperand;
        break;
      case "*":
        result = _previousOperand * _currentOperand;
        break;
      default:
        return;
    }

    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;

    if (this.previousOperand !== "") {
      this.calculate();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  appendNumber(number) {
    // Substituindo vírgula por ponto
    if (number === ",") number = ".";

    // Evitar inserir múltiplos pontos
    if (this.currentOperand.includes(".") && number === ".") return;

    this.currentOperand = `${this.currentOperand}${number.toString()}`;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  updateDisplay() {
    this.previousOperandTextElement.innerText = `${this.formatDisplayNumber(
      this.previousOperand
    )} ${this.operation || ""}`;
    this.currentOperandTextElement.innerText = this.formatDisplayNumber(
      this.currentOperand
    );
  }

  // Novo método para porcentagem
  applyPercentage() {
    let currentValue = parseFloat(this.currentOperand);
    if (isNaN(currentValue)) return;

    // Se a operação for soma, adicionar o valor percentual ao número anterior
    if (this.operation === "+") {
      let percentageValue =
        (parseFloat(this.previousOperand) * currentValue) / 100;
      this.currentOperand = (
        parseFloat(this.previousOperand) + percentageValue
      ).toString();
    }
    // Se a operação for subtração, subtrair o valor percentual do número anterior
    else if (this.operation === "-") {
      let percentageValue =
        (parseFloat(this.previousOperand) * currentValue) / 100;
      this.currentOperand = (
        parseFloat(this.previousOperand) - percentageValue
      ).toString();
    }
  }
}

// Instanciando a calculadora
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// Adicionando eventos aos botões de números
for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", () => {
    calculator.appendNumber(numberButton.innerText);
    calculator.updateDisplay();
  });
}

// Adicionando eventos aos botões de operações
for (const operationButton of operationButtons) {
  operationButton.addEventListener("click", () => {
    calculator.chooseOperation(operationButton.innerText);
    calculator.updateDisplay();
  });
}

// Botão de limpar
allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

// Botão de igual
equalsButton.addEventListener("click", () => {
  calculator.calculate();
  calculator.updateDisplay();
});

// Botão de deletar (remover o último caractere)
deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

// Botão de porcentagem
percentageButton.addEventListener("click", () => {
  calculator.applyPercentage();
  calculator.updateDisplay();
});
