function add(a,b){
    return a+b;

}

function multiply(a,b){
    return a*b;

}

function subtract(a,b){
    return a-b;

}

function divide(a,b){
    return a/b;

}
function modulo(a,b){
    return a%b;
}


function operate(firstNumber,secondNumber,operator){
    switch (operator){
        case "+":
            return add(firstNumber,secondNumber);
            break;
        case "-":
            return subtract(firstNumber,secondNumber);
            break;
        case "*":
            return multiply(firstNumber,secondNumber);
            break;
        case "/":
            return divide(firstNumber,secondNumber);
            break;
        case '%':
            return modulo(firstNumber,secondNumber);
            break;
        default:
            console.log("enter valid operator");
            break;

    }
}

function calcAndDisplayResult(){
    secondNumber = Number(resultBox.textContent);
    let result = operate(firstNumber,secondNumber,operator);
    resultBox.textContent = `${result}`;
    //setting result to firstNumber will allow calculation of more than single pair
    firstNumber = result;
}

function inputNumber(key){
    if(key ==='.'){
        if(isDecimalExist){
            return 0;
        }
        isDecimalExist = true
    }
    if(isNumberNotEditable){
        clearResultBox("");
        isNumberNotEditable = false
    }
    resultBox.textContent+=key
}


function inputOperator(key){
    if(OPERATOR_STRING.includes(key)){
        if (operator===undefined){
            firstNumber = Number(resultBox.textContent);
        }
        else{
            calcAndDisplayResult();
        }
        operator = key;
    }
    else if(key==='='){
        calcAndDisplayResult()
        operator = undefined;
    }
    else if(key==='C'){
        resultBox.textContent = resultBox.textContent.slice(0,resultBox.textContent.length-1);
        return 0;

    }
    else if(key==='A.C'){
        clearResultBox("0");
    }
    isNumberNotEditable=true;
    isDecimalExist = false
    console.log(key)
}

function convertKeyboardKeyToMathOperator(key){
    switch(key){
        case 'Enter':
            return '=';
            break;
        case 'Backspace':
            return 'C';
            break;
        case 'Delete':
            return 'A.C'
            break;
        default:
            return key
            
    }

}










const OPERATOR_STRING = '+-*/%';
const NUMBER_STRING = "0123456789."
let firstNumber = undefined
let secondNumber = undefined
let operator = undefined
const buttonList = Array.from(document.querySelectorAll("button"));
const numberList = buttonList.filter((btn)=>(NUMBER_STRING.includes(btn.textContent)))
const resultBox = document.querySelector('.display');
let isNumberNotEditable = true;
let isDecimalExist = false
clearResultBox = (str)=>resultBox.textContent = str;




console.log(numberList);
numberList.map((btn)=>{
    btn.addEventListener('click',()=>{
        inputNumber(btn.textContent)
    })
})
const operatorList = buttonList.filter((btn)=>!(NUMBER_STRING.includes(btn.textContent)))
operatorList.map((btn)=>{
    btn.addEventListener('click',()=>{
        inputOperator(btn.textContent)
    })
     
})

document.addEventListener('keyup',(event)=>{
    key = convertKeyboardKeyToMathOperator(event.key);
    console.log(key+'somethig');
    if(NUMBER_STRING.includes(key)){
        inputNumber(key)
    }
    else{
        inputOperator(key)

    }
})



