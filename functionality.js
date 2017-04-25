var userInput = document.getElementById("calculation"); //display for results
var clearInput = document.getElementById("clear").addEventListener("click", clearScreen); //clear button
var calcButtons = document.getElementById("buttons").getElementsByClassName("arith"); //numerical and operator buttons
var total = document.getElementById("equals").addEventListener("click", calcValues); //equals button
var removeInput = document.getElementById("delete").addEventListener("click", deleteValue); //delete button
var calc = []; //array for storing user input

function clearScreen() {
    userInput.innerHTML = 0; //reset display total to 0
    calc = []; //empty the array of previous inputs
}

for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener("click", addValues); //add an event listener to all numerical and operator buttons
}

function addValues() {
    //prevent the number 0 being shown on display prior to user input from being added to the calc array by setting it to empty
    if (userInput.innerHTML == 0) {
        userInput.innerHTML = "";
    }

    userInput.innerHTML += this.innerHTML; //display html value of clicked button on screen
    calc.push(this.innerHTML); //push the value of button into the calc array
}

function calcValues() {
    var arith;
    var equation;
    var calculated = 0;

    //loop through calc array and ensure operators are in proper format
    for (var i = 0; i < calc.length; i++) {
        if (calc[i] == "÷") {
            calc[i] = "/";
        } else if (calc[i] == "×") {
            calc[i] = "*";
        } else if (calc[i] == "−") {
            calc[i] = "-";
        } else if (calc[i] == "%") { //set % to divide by 100 when calculating percentage;
            calc[i] = "/100";
        }
    }

    if (calc.length === 0) { //if calc array contains no value, display 0 instead of 'undefined' if user clicks equal button
        userInput.innerHTML = 0;
    } else {
        equation = calc.join(""); //join values in calc array to create an equation
        arith = eval(equation); //evaluate the equation to perform calculation since the equation is a string
        calculated = Math.round(arith * 1000) / 1000; //round to 3 decimal places if needed
        userInput.innerHTML = calculated; //display result
    }
    
    console.log(equation + " = " + arith);
}

function deleteValue() { //delete last user input
    calc.pop(); //remove last value pushed into calc array
    var equation = calc.join(""); //join calc array values to create an equation

    if (equation == "") { //if the equation is empty display 0
        userInput.innerHTML = 0;
    } else {
        userInput.innerHTML = equation; //display equation values
    }
}