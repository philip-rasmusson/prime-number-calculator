'use strict'

let array = []
document.getElementById('display-array').innerHTML = array


function test() {

  let inputIsPrime = false

  document.getElementById('display-result').innerHTML = ''
  document.getElementById('display-message').innerHTML = ''

  const input = document.getElementById("userInput").value
  if (!isNaN(input) && input > 0 && input % 1 === 0)
    inputIsPrime = checkIfPrime(parseInt(input))
  else {
    document.getElementById('display-message').innerHTML = 'Wrong input'
  }
  document.getElementById('userInput').value = ''

  if (inputIsPrime) {
    document.getElementById('display-result').innerHTML = `Yay! ${input} is a prime number!`
    addToArray(input)
  } else {
    document.getElementById('display-result').innerHTML = `Sorry! ${input} is NOT a prime number...`
  }

}

const checkIfPrime = (n) => {
  //An array containing all known prime numbers between 0-100
  const primesBetween0and100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89]
  //An array containing all even numbers, and 5. If the input number ends with any of these,
  //it's not a prime number
  const evenEnding = [0, 2, 4, 5, 6, 8]
  //The last digit of input number
  const lastDigit = Number(n.toString().split('').reverse()[0])

  //If input number is any of the known prime numbers between 0-100, returns true
  if (primesBetween0and100.includes(n))
    return true
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

const addToArray = (primeNumber) => {
  array.push(primeNumber)
}

const showArray = () => {
  document.getElementById('display-array').innerHTML = array
  document.getElementById('display-array').style.display === 'none'
    ? document.getElementById('display-array').style.display = 'inline'
    : document.getElementById('display-array').style.display = 'none'
}


// module.exports = checkIfPrime


// else if ((n % 2 === 0 || n % 5 === 0))
//   return false



  // else if (Number(n.toString().split('').reverse()[0]) === 0 || Number(n.toString().split('').reverse()[0]) === 5)
  //   return false