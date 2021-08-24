
const { expect } = require('@jest/globals')
const checkIfPrime = require('./app')

test('returns false if input ends with 0, 2, 4, 5, 6 or 8', () => {
  expect(checkIfPrime(244)).toEqual(false)
  expect(checkIfPrime(8484842)).toEqual(false)
  expect(checkIfPrime(283940576)).toEqual(false)
})

test('returns true if input is  2', () => {
  expect(checkIfPrime(2)).toEqual(true)
})

test('returns false if all numbers individually added together is dividable by 3', () => {
  expect(checkIfPrime(36)).toEqual(false)
  expect(checkIfPrime(37)).toEqual(true)
})

test('returns true if input is one of the known primes between 0-100', () => {
  expect(checkIfPrime(29)).toEqual(true)
  expect(checkIfPrime(37)).toEqual(true)
  expect(checkIfPrime(19)).toEqual(true)
  expect(checkIfPrime(67)).toEqual(true)
  expect(checkIfPrime(72)).toEqual(false)
  expect(checkIfPrime(80)).toEqual(false)
})

test('returns true when input known prime numbers over 100', () => {
  expect(checkIfPrime(101)).toEqual(true)
  expect(checkIfPrime(103)).toEqual(true)
  expect(checkIfPrime(107)).toEqual(true)
  expect(checkIfPrime(109)).toEqual(true)
  expect(checkIfPrime(113)).toEqual(true)
  expect(checkIfPrime(127)).toEqual(true)
  expect(checkIfPrime(131)).toEqual(true)
  expect(checkIfPrime(137)).toEqual(true)
  expect(checkIfPrime(149)).toEqual(true)
  expect(checkIfPrime(151)).toEqual(true)
  expect(checkIfPrime(157)).toEqual(true)
  expect(checkIfPrime(163)).toEqual(true)
  expect(checkIfPrime(167)).toEqual(true)
  expect(checkIfPrime(173)).toEqual(true)
  expect(checkIfPrime(179)).toEqual(true)
  expect(checkIfPrime(181)).toEqual(true)
  expect(checkIfPrime(191)).toEqual(true)
  expect(checkIfPrime(193)).toEqual(true)
  expect(checkIfPrime(197)).toEqual(true)
  expect(checkIfPrime(199)).toEqual(true)
  expect(checkIfPrime(198)).toEqual(false)
  expect(checkIfPrime(192)).toEqual(false)
  expect(checkIfPrime(159)).toEqual(false)
})

test('returns true when input known prime numbers over 1000', () => {
  expect(checkIfPrime(1787)).toEqual(true)
  expect(checkIfPrime(1789)).toEqual(true)
  expect(checkIfPrime(2113)).toEqual(true)
  expect(checkIfPrime(2129)).toEqual(true)
  expect(checkIfPrime(2423)).toEqual(true)
  expect(checkIfPrime(2909)).toEqual(true)
  expect(checkIfPrime(9859)).toEqual(true)
  expect(checkIfPrime(9341)).toEqual(true)
  expect(checkIfPrime(9884)).toEqual(false)
  expect(checkIfPrime(9222)).toEqual(false)
})