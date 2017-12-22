// Use test driven development to create a function that
// adds two numbers and returns their sum.

const add = (x, y) => x + y

describe('The Add Module', () => {
  it('adds two numbers and returns their sum', () => {
    expect(add(2, 2)).toBe(4)
  })

  it('works with negative numbers', () => {
    expect(add(-1, 2)).toBe(1)
  })
})

// test('adds two integers', () => {
//   expect(add(2, 2)).toBe(4)
// })

// test('adds one positive integer and a negative integer', () => {
//   expect(add(-1, 2)).toBe(1)
// })
