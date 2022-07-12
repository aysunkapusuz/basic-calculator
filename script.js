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
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }

    appendNumber (number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.preOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.preOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute(){
        let computation 
        const prev = parseFloat(this.preOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.preOperand = ''
    }

    getDisplayNumber (number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay 
        if(isNaN(integerDigits)){
            integerDisplay = ''
        }else {
            integerDisplay = integerDigits.toLocaleString('en' , {
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else{
            return integerDisplay
        }
    }

    updateDisplay(){
        this.currentOperandTextElemet.innerText = 
        this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
        this.preOperandTextElemet.innerText = 
        `${this.getDisplayNumber(this.preOperand)} ${this.operation}`
        }else {
           this.preOperandTextElemet.innerText =  ''
        }
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

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText)
            calculator.updateDisplay()
    })
    })

    equalButton.addEventListener('click' , button =>{
        calculator.compute()
        calculator.updateDisplay()
    })

    allClearButton.addEventListener('click' , button =>{
        calculator.clear()
        calculator.updateDisplay()
    })

    deleteButton.addEventListener('click' , button =>{
        calculator.delete()
        calculator.updateDisplay()
    })