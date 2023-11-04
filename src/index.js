import { Calculator } from './Calculator.js'

const calculator = new Calculator('display', 'log')
const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value')
    const operator = button.getAttribute('data-operator')
    const action = button.getAttribute('data-action')

    if (value !== null) {
      calculator.appendToDisplay(value)
    } else if (operator !== null) {
      calculator.operate(operator)
    } else if (action === 'clear') {
      calculator.clearDisplay()
    } else if (action === 'calculate') {
      calculator.calculateResult()
    }
  })
})

document.addEventListener('keydown', (event) => {
  if (/[0-9\+\-\*\/\r\n]/.test(event.key)) {
    calculator.appendToDisplay(event.key)
  } else if (event.key === 'Enter') {
    calculator.calculateResult()
  } else if (event.key === 'Escape') {
    calculator.clearDisplay()
  }
})
