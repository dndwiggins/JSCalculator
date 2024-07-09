
var displayNum = document.querySelector("#result");


let stringTotal1 = "";

let stringTotal2 = "";

let number1 = 0;

let operator = "";

let number2 = 0;

let operateBool = false; //operate bool has not been clicked



const numBtns = document.querySelectorAll("#num");

const clear = document.querySelector("#clear");

clear.addEventListener('click', function () {
    window.location.reload();
});


for (let i = 0; i < numBtns.length; i++) {

    const numBtn = numBtns[i];


    numBtn.addEventListener("click", function (e) {

        var target = e.target;


        if (operateBool == true) {



            stringTotal2 += target.innerHTML;

            displayNum.innerHTML = stringTotal2;

            return;
        }


        stringTotal1 += target.innerHTML;

        displayNum.innerHTML = stringTotal1;



    });

}



const operatorBtns = document.querySelectorAll("#operator");


for (let i = 0; i < operatorBtns.length; i++) {

    const operatorBtn = operatorBtns[i];

    operatorBtn.addEventListener("click", function (e) {

        var target = e.target;


        if (operateBool == true && stringTotal2 !== "") { //operate bool already been clicked


            stringTotal1 = operate(operator, Number(stringTotal1), Number(stringTotal2));

            stringTotal2 = "";

            displayNum.innerHTML = stringTotal1;

        }


        operator = target.innerHTML;

        if (operator == "=") {
            operateBool == false
            operate("+", stringTotal1, 0);
            return
        }


        operateBool = true;


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
        return 0; //maybe just put zero here
        alert("Bruh");
    }

    return num1 / num2;

}

function operate(operator, num1, num2) {

    if (operator == "=") {
        if (stringTotal2 == "") {
            operate("+", stringTotal1, 0);
        }
        return stringTotal1;
    }
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