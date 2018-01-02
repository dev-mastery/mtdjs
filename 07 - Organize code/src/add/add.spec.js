import add from './add'

describe('Add functionality', () => {
  it('adds two numbers and returns their sum', () => {
    expect(add(2, 2)).toBe(4)
  })
  it('works with negative numbers', () => {
    expect(add(-1, 2)).toBe(1)
  })
})
