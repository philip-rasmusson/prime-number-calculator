'use strict'
//Creates an empty array at the beginning of the script
let primeNumbers = []
//Background colors for display-message
const green = '#8AD385'
const red = '#D8596F'
const white = '#fff'

function primeQuery() {
  const input = document.getElementById("userInput").value
  //Checks is input is a whole number
  if (!isNaN(input) && input > 0 && input % 1 === 0) {
    //Checks if input is less than max safe int
    if (input < Number.MAX_SAFE_INTEGER) {
      //Sets message and wario img based on if input is a Prime Number      
      if (checkIfPrime(parseInt(input))) {
        setMessage(`Yay! ${input} is a prime number! Try another one!`, green)
        setWarioImg('wario-default', 'wario-fail', 'wario-success')
        addToArray(input)
      } else {
        setMessage(`Sorry! ${input} is NOT a prime number...`, red)
        setWarioImg('wario-default', 'wario-success', 'wario-fail')
      }
    } else {
      setMessage('HAHA! Thats WAYYYY too high! Be more serious...', red)
      setWarioImg('wario-default', 'wario-success', 'wario-fail')
    }
  }
  else {
    setMessage('GAH! Wrong input! ONLY USE DIGITS! No more funny stuff, try again...', red)
    setWarioImg('wario-default', 'wario-success', 'wario-fail')
  }
  //Resets user input
  document.getElementById('userInput').value = ''
}

//Method to fins out if an int is a Prime Number
const checkIfPrime = (n) => {
  //An array containing all known prime numbers between 0-10
  const primesBetween0and10 = [2, 3, 5, 7]
  //An array containing all even numbers, and 5. If the input number ends with any of these,
  //it's not a prime number
  const evenEnding = [0, 2, 4, 5, 6, 8]
  //The last digit of input number
  const lastDigit = Number(n.toString().split('').reverse()[0])

  //If input number is any of the known prime numbers between 0-10, returns true
  if (primesBetween0and10.includes(n))
    return true
  //If input is not a prime number, returns false
  else if (evenEnding.includes(lastDigit) || n === 1 || (n.toString().split('').reduce((x, y) => Number(x) + Number(y)) % 3 === 0))
    return false
  //If all statements above are passed, it's a prime number
  else return true
}

//Adds prime number to array
const addToArray = (primeNumber) => {
  if (!primeNumbers.includes(primeNumber))
    primeNumbers.push(primeNumber)
}

//Removes all inputs to the array
const resetArray = () => {
  primeNumbers = []
  resetWario()
}

//Sets which Wario img to show
const setWarioImg = (noShow1, noShow2, show) => {
  document.getElementById(`${noShow1}`).style.display = 'none'
  document.getElementById(`${noShow2}`).style.display = 'none'
  document.getElementById(`${show}`).style.display = 'block'
}

//Sets what message to show
const setMessage = (message, bgcolor) => {
  document.getElementById('display-message').innerHTML = message
  document.getElementById('display-message').style.backgroundColor = bgcolor
}

//Toggles display of the array with all stored prime numbers
const showArray = () => {
  const sortedArray = primeNumbers.sort((function (a, b) { return b - a })).map(item => {
    return `<p class="array-item">${item.toString()}</p>`
  })
  document.getElementById('prime-numbers-array').innerHTML = sortedArray.join(',').replace(/,/g, ' ')
  if (document.getElementById('prime-numbers-array').style.display === 'none') {
    document.getElementById('prime-numbers-array').style.display = 'inline'
    document.getElementById('speech').style.display = 'none'
  }
  else {
    document.getElementById('prime-numbers-array').style.display = 'none'
    document.getElementById('speech').style.display = 'grid'
  }
}

//Resets the Wario-img to default
const resetWario = () => {
  document.getElementById('speech').style.display = 'grid'
  setWarioImg('wario-fail', 'wario-success', 'wario-default')
  document.getElementById('prime-numbers-array').style.display = 'none'
  setMessage('HAH! I AM THE PRIME MINISTER!', white)
}

module.exports = checkIfPrime


