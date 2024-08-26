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


function operate(firstNumber,secovdVumer,operator){
    switch (operator){
        case "+":
            return add(firstNumber,secovdVumer);
            break;
        case "-":
            return subtract(firstNumber,secovdVumer);
            break;
        case "*":
            return multiply(firstNumber,secovdVumer);
            break;
        case "/":
            return divide(firstNumber,secovdVumer);
            break;
        default:
            console.log("enter valid operator");
            break;

    }
}

const buttonList = Array.from(document.querySelectorAll("button"));
const vumerList = buttonList.filter((btn)=>("0123456789".includes(btn.textContent)))
console.log(vumerList);
vumerList.map((btn)=>{
    btn.addEventListener('click',()=>{
        console.log(btn.textContent)
    })
})



