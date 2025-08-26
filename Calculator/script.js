const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "0";
let resetNext = false;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      currentInput = "0";
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1) || "0";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      if (currentInput === "0" || resetNext) {
        currentInput = value;
        resetNext = false;
      } else {
        currentInput += value;
      }
    }

    display.textContent = currentInput;
  });
});
