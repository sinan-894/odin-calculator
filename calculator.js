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


const operatorStr = '+-*/';
let firstNumber = undefined
let secondNumber = undefined
let operator = undefined
const buttonList = Array.from(document.querySelectorAll("button"));
const numberList = buttonList.filter((btn)=>("0123456789".includes(btn.textContent)))
const resultBox = document.querySelector('.display');
let isNumberNotEditable = true;
clearResultBox = (str)=>resultBox.textContent = str;
console.log(numberList);
numberList.map((btn)=>{
    btn.addEventListener('click',()=>{
        if(isNumberNotEditable){
            clearResultBox("");
            isNumberNotEditable = false
        }
        resultBox.textContent+=btn.textContent
    })
})
const operatorList = buttonList.filter((btn)=>!("0123456789".includes(btn.textContent)))
operatorList.map((btn)=>{
    btn.addEventListener('click',()=>{
        if(operatorStr.includes(btn.textContent)){
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
        else{
            clearResultBox('0');
        }
        isNumberNotEditable=true;
        console.log(btn.textContent)
    })
})




