let buttons = document.querySelectorAll(".btn");
let display = document.getElementById("display");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "AC" || button.value === "DE") {
      if (button.value === "DE") {
        display.value = display.value.substring(0, display.value.length - 1);
      } else {
        display.value = "";
      }
    } else if (button.value === "=") {
      try {
        let result = eval(display.value);
        if (!isFinite(result) || isNaN(result)) {
          display.value = "BKL🤬";
        } else {
          display.value = result;
        }
      } catch (error) {
        display.value = "BKL🤬";
      }
    } else {
      display.value += button.value;
    }
  });
});
