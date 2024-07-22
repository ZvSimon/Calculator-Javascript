const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserNumberInput(){
    return parseInt(userInput.value);
}
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);
}
function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
    const logEntry = {
        operation:operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
}
function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType==='ADD') {
        currentResult = currentResult + enteredNumber;
        mathOperator='+'
    }
    else {
        currentResult = currentResult-enteredNumber;
        mathOperator='+'
    }
     createAndWriteOutput(mathOperator,initialResult,enteredNumber);
     writeToLog(calculationType,initialResult,enteredNumber,currentResult);
}
function add(){
  calculateResult('ADD');
    
}
function subtract(){
    calculateResult('SUBSTRACT')
}
function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
}
function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
