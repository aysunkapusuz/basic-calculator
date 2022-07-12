class Calculator {
    constructor(preOperandTextElemet, currentOperandTextElemet){
        this.preOperandTextElemet = preOperandTextElemet
        this.currentOperandTextElemet = currentOperandTextElemet
        this.clear()
    }
    clear (){
        this.currentOperand = ''
        this.preOperand = ''
        this.operation = undefined

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
        this.currentOperandTextElemet.innerText = this.currentOperand

    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const equalButton = document.querySelector('[data-equals]')

const preOperandTextElemet = document.querySelector('[data-pre-operand')
const currentOperandTextElemet = document.querySelector('[data-current-operand')

const calculator = new Calculator(preOperandTextElemet,
    currentOperandTextElemet)

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText)
            calculator.updateDisplay()
        })
    })