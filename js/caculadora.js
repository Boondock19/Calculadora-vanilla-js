
document.addEventListener("DOMContentLoaded", function () {
  //We need to get the display part of the calculator
  display = document.querySelector(".calculadora-display");
  console.log("Este es el display", display.innerHTML);
  // We need to get the = button
  results = document.querySelector(".result");
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
  //console.log(number);
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

  // We have to get the first number, second number, and finally do the operations

  operations = document.querySelectorAll(".operation");
  operations.forEach((element) => {
    element.addEventListener("click", function () {
      firstNumber = displayCalculator;
      console.log("Este es firstNumber luego de la primera asignacion",firstNumber)
      operation = element.dataset.operator;
      console.log(operation);
      displayCalculator = 0;
      console.log("Este es firstNumber luego de la segunda asignacion",firstNumber)
      display.innerHTML = displayCalculator;
    });
  });

  results=document.querySelector(".result")
  results.addEventListener("click",function(){
    secondNumber=displayCalculator
    result=operationHandler(firstNumber,secondNumber,operation)
    display.innerHTML=result
    console.log(result)    
  })

  // We need to reset the calculator with the button CE
  restart=document.querySelector(".CE")
  restart.addEventListener("click",function(){
    displayCalculator=0
    display.innerHTML=displayCalculator
    firstNumber=0
    secondNumber=0
  })
  //Functions for the calculator to work

  function operationHandler(firstNumber, secondNumber, operation){
    const a = Number(firstNumber)
    const b = Number(secondNumber)
    if (operation == "+") {
      return a+b
    } else if (operation == "-") {
      return a-b
    } else if (operation == "x") {
      return a*b
    } else if (operation == "/") {
      return a/b
    } else if (operation == "%") {
      // a will be the number we want to kwon the % and b will be the desired %
      return a * (b/100)
    } else if (operation == "mod") {
      return a%b
    }
  };

});
