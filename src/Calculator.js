class Calculator {
  constructor(displayId, logId) {
    this.display = document.getElementById(displayId)
    this.logDisplay = document.getElementById(logId)
    this.inputBuffer = ''
    this.operator = ''
    this.pendingOperation = false
    this.log = ''
  }

  appendToDisplay(value) {
    if (this.pendingOperation) {
      this.inputBuffer = value
      this.display.value = value
      this.pendingOperation = false
    } else {
      this.inputBuffer += value
      this.display.value = this.inputBuffer
    }
  }

  clearDisplay() {
    this.inputBuffer = ''
    this.display.value = ''
  }

  operate(op) {
    if (this.inputBuffer !== '') {
      this.operator = op
      this.inputBuffer += op
      this.display.value = this.inputBuffer
    }
  }

  calculateResult() {
    if (this.inputBuffer !== '') {
      try {
        const result = eval(this.inputBuffer)

        if (this.operator) {
          this.log += `${this.inputBuffer} = ${result}\n`
          this.logDisplay.value = this.log 
        }

        this.inputBuffer = ''
        this.pendingOperation = true
      } catch (error) {
        this.display.value = 'Erro'
      }
    }
  }
}

export { Calculator }
