let display = document.getElementById("display");
let expression = "";

function append(value) {
  if (display.innerText === "0" && value !== ".") {
    expression = value;
  } else {
    expression += value;
  }
  display.innerText = expression;
}

function clearDisplay() {
  expression = "";
  display.innerText = "0";
}

function deleteLast() {
  expression = expression.slice(0, -1);
  display.innerText = expression || "0";
}

function calculate() {
  try {
    expression = eval(expression).toString();
    display.innerText = expression;
  } catch {
    display.innerText = "Error";
    expression = "";
  }
}
