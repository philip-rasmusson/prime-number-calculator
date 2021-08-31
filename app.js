'use strict'
//Main array to store prime numbers
let primeNumbers = []
//Background colors for display-message
const green = '#8AD385'
const red = '#D8596F'
const white = '#fff'
//
const evenEnding = [0, 2, 4, 5, 6, 8]

const primeQuery = () => {
  const input = document.getElementById("userInput").value
  const lastDigit = Number(input.toString().split('').reverse()[0])
  //Checks if input is a whole number
  if (!isNaN(input) && input > 0 && input % 1 === 0) {
    //Checks if input is less than max safe int
    if (input < Number.MAX_SAFE_INTEGER) {
      //If input is > 9 and ends with 0, 2, 4, 5, 6 or 8
      //it's not a prime number
      if ((input > 9 && evenEnding.includes(lastDigit))) {
        setMessage(`Sorry! ${input} is NOT a prime number...`, red)
        setWarioImg('wario-default', 'wario-success', 'wario-fail')
      } else {
        if (checkIfPrime(parseInt(input))) {
          setMessage(`Yay! ${input} is a prime number! Try another one!`, green)
          setWarioImg('wario-default', 'wario-fail', 'wario-success')
          addToArray(input)
        } else {
          setMessage(`Sorry! ${input} is NOT a prime number...`, red)
          setWarioImg('wario-default', 'wario-success', 'wario-fail')
        }
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

//Function to find out if an int is a Prime Number
function checkIfPrime(n) {
  let primeNumber = true
  //Checks if n is dividable any anything else than n
  for (let i = 2; i <= n / 2; i++)
    if (n % i === 0) primeNumber = false
  //1 is not a prime
  if (n === 1) return false
  else
    return primeNumber
}

//Toggles display of the next prime number
const showNextPrime = () => {
  //Assigns highest number in the array to a var
  const highestPrimeNumber = primeNumbers.sort((function (a, b) { return b - a }))[0]
  if (highestPrimeNumber != undefined) {
    const nextPrime = findNextPrime(highestPrimeNumber)
    const showNextPrime = document.getElementById('show-next-prime')
    showNextPrime.innerHTML = `<p>The next prime number is ${nextPrime}</p>`
    if (showNextPrime.style.display === 'none') {
      showNextPrime.style.display = 'inline'
    }
    else {
      showNextPrime.style.display = 'none'
    }
  }
}
//Finds the next prime number
function findNextPrime(highestPrimeNumber) {
  let loop = true
  let nextPrime = Number(highestPrimeNumber)
  while (loop) {
    let count = 1
    nextPrime += count
    checkIfPrime(nextPrime) ? loop = false : count++
  }
  return nextPrime
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
const setWarioImg = (hidden, hidden2, show) => {
  document.getElementById(`${hidden}`).style.display = 'none'
  document.getElementById(`${hidden2}`).style.display = 'none'
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
  }
  else {
    document.getElementById('prime-numbers-array').style.display = 'none'
  }
}

//Resets the display of WArio, array and next prime
const resetWario = () => {
  setWarioImg('wario-fail', 'wario-success', 'wario-default')
  document.getElementById('prime-numbers-array').style.display = 'none'
  document.getElementById('show-next-prime').style.display = 'none'
  setMessage('HAH! I AM THE PRIME MINISTER!', white)
}

module.exports = checkIfPrime


