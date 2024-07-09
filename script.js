
var displayNum = document.querySelector("#result");


let stringTotal1 = "";

let stringTotal2 = "";

let number1 = 0;

let operator = "+";

let number2 = 0;

let operateBool = false; //operate bool has not been clicked




const numBtns = document.querySelectorAll("#num");


for (let i = 0; i < numBtns.length; i++) {

    const numBtn = numBtns[i];


    numBtn.addEventListener("click", function (e) {


        if (operateBool == true) {

            var target = e.target;

            stringTotal2 += target.innerHTML;

            displayNum.innerHTML = stringTotal2;

            return;
        }



        var target = e.target;

        stringTotal1 += target.innerHTML;

        displayNum.innerHTML = stringTotal1;



    });

}



const operatorBtns = document.querySelectorAll("#operator");


for (let i = 0; i < operatorBtns.length; i++) {

    const operatorBtn = operatorBtns[i];

    operatorBtn.addEventListener("click", function (e) {


        if (operateBool == false) {
            var target = e.target;

            operator = target.innerHTML;
        }

        if (operateBool == true) { //operate bool already been clicked

            stringTotal1 = operate(operator, Number(stringTotal1), Number(stringTotal2));

            stringTotal2 = "";

            displayNum.innerHTML = stringTotal1;

            operateBool = false;

            return;
        }

        var target = e.target;


        operator = target.innerHTML;

        operateBool = true;

        // operate(operatorSign, Number(stringTotal),)

    });


}











function add(num1, num2) {

    return num1 + num2;

}

function subtract(num1, num2) {

    return num1 - num2;

}


function multiply(num1, num2) {

    return num1 * num2;
}


function divide(num1, num2) {

    if (num2 == 0) {
        return "undefined"; //maybe just put zero here
    }

    return num1 / num2;

}

function operate(operator, num1, num2) {

    if (operator == "+") {
        return add(num1, num2);
    }
    if (operator == "-") {
        return subtract(num1, num2);
    }
    if (operator == "*") {
        return multiply(num1, num2);
    }
    if (operator == "/") {
        return divide(num1, num2);
    }

}