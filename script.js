class Calculator {
    constructor(preOperandTextElemet, currentOperandTextElemet){
        this.preOperandTextElemet = preOperandTextElemet
        this.currentOperandTextElemet = currentOperandTextElemet
    }
    clear (){
        this.currentOperand = ''
        this.currentOperand = ''

    }

    delete (){

    }

    appendNumber (number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const equalButton = document.querySelector('[data-equals]')

const preOperandTextElemet = document.querySelector('[data-pre-operand')
const currentOperandTextElemet = document.querySelector('[data-current-operand')

