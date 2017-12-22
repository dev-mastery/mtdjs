// Use test driven development to create a function that
// adds two numbers and returns their sum.

const add = (x, y) => x + y

const result = add(2, 2)
const expectedResult = 4

if (result !== expectedResult) {
  throw Error(`Test Failed! Got ${result}, expected ${expectedResult}`)
}

console.log('Test 1 passed!')

const nextResult = add(-1, 2)
const nextExpectedResult = 1

if (nextResult !== nextExpectedResult) {
  throw Error(`Test Failed! Got ${nextResult}, expected ${nextExpectedResult}`)
}

console.log('Test 2 passed!')
