'use strict'
//Creates an empty array at the beginning of the script
let PrimeNumbers = []
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
        setWarioImg('wario-default', 'wario-success')
        addToArray(input)
      } else {
        setMessage(`Sorry! ${input} is NOT a prime number...`, red)
        setWarioImg('wario-default', 'wario-fail')
      }
    } else {
      setMessage('HAHA! Thats WAYYYY too high! Be more serious...', red)
      setWarioImg('wario-default', 'wario-fail')
    }
  }
  else {
    setMessage('GAH! Wrong input! ONLY USE DIGITS! No more funny stuff, try again...', red)
    setWarioImg('wario-default', 'wario-fail')
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
  //Number 1 is not a prime number
  else if (n === 1)
    return false
  //If input number ends with an even number, or 0, or 5, returns false
  else if (evenEnding.includes(lastDigit))
    return false
  //If all numbers in input is seperated and added together, and that sum is 
  //dividable by 3, its not a prime
  else if (n.toString().split('').reduce((x, y) => Number(x) + Number(y)) % 3 === 0)
    return false
  //If all statements above are passed, it's a prime number
  else return true
}
//Adds prime number to array
const addToArray = (primeNumber) => {
  if (!PrimeNumbers.includes(primeNumber))
    PrimeNumbers.push(primeNumber)
}
//Removes all inputs to the array
const resetArray = () => {
  PrimeNumbers = []
  resetWario()
}
//Sets which Wario img to show
const setWarioImg = (noShow, show) => {
  document.getElementById(`${noShow}`).style.display = 'none'
  document.getElementById(`${show}`).style.display = 'block'
}
//Sets what message to show
const setMessage = (message, bgcolor) => {
  document.getElementById('display-message').innerHTML = message
  document.getElementById('display-message').style.backgroundColor = bgcolor
}
//Toggles display of the array with all stored prime numbers
const showArray = () => {
  const sortedArray = PrimeNumbers.sort((function (a, b) { return b - a })).map(item => {
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

  document.getElementById('wario-default').style.display = 'block'
  document.getElementById('wario-success').style.display = 'none'
  document.getElementById('wario-fail').style.display = 'none'
  document.getElementById('prime-numbers-array').style.display = 'none'
  setMessage('HAH! I AM THE PRIME MINISTER!', white)
}

module.exports = checkIfPrime


