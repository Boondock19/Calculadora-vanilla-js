import {operationHandler} from "js/operation_handler.js"
document.addEventListener("DOMContentLoaded", function () {
  //We need to get the display part of the calculator
  display = document.querySelector(".calculadora-display");
  console.log("Este es el display", display.innerHTML);
  //Select the decimal button and function
  decimal = document.querySelector(".decimal");
  decimal.addEventListener("click", function () {
    if (display.innerHTML.includes(".")) {
      display.innerHTML = display.innerHTML;
    } else {
      displayCalculator = displayCalculator + ".";
      display.innerHTML = displayCalculator;
    }
  });
  // WE get all the number buttons
  number = document.querySelectorAll(".number");
  console.log("Cargo el scritp");
  console.log(number);
  //Creation of a var to hold the values/numbers we enter in the calculator
  var displayCalculator = display.innerHTML;
  number.forEach((element) => {
    element.addEventListener("click", function () {
      if (display.innerHTML == "0") {
       //console.log("Esta entrando en el primer if");
        displayCalculator = element.innerHTML;
        display.innerHTML = displayCalculator;
      } else {
        //console.log("Esta entrando en el segundo if");
        displayCalculator = displayCalculator + element.innerHTML;
        display.innerHTML = displayCalculator;
      }
      console.log(element.innerHTML);
    });
  });
});
