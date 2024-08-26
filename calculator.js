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
        if(btn.textContent ==='.'){
            if(isDecimalExist){
                return 0;
            }
            isDecimalExist = true
        }
        if(isNumberNotEditable){
            clearResultBox("");
            isNumberNotEditable = false
        }
        resultBox.textContent+=btn.textContent
    })
})
const operatorList = buttonList.filter((btn)=>!(NUMBER_STRING.includes(btn.textContent)))
operatorList.map((btn)=>{
    btn.addEventListener('click',()=>{
        if(OPERATOR_STRING.includes(btn.textContent)){
            if (operator===undefined){
                firstNumber = Number(resultBox.textContent);
            }
            else{
                calcAndDisplayResult();
            }
            operator = btn.textContent;
        }
        else if(btn.textContent==='='){
            calcAndDisplayResult()
            operator = undefined;
        }
        else if(btn.textContent==='C'){
            resultBox.textContent = resultBox.textContent.slice(0,resultBox.textContent.length-1);

        }
        isNumberNotEditable=true;
        isDecimalExist = false
        console.log(btn.textContent)
    })
     
})

document.addEventListener('keyup',(event)=>{
    console.log(event.key);
})




