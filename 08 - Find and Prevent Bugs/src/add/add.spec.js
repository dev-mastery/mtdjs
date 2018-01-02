import add from './add'

describe('Add functionality', () => {
  it('adds two numbers and returns their sum', () => {
    expect(add(2, 2)).toBe(4)
  })
  it('works with negative numbers', () => {
    expect(add(-1, 2)).toBe(1)
  })
  it('works with numeric strings', () => {
    expect(add('2', '2')).toBe(4)
  })
  it('fails when given non-numeric values', () => {
    expect(() => add(null, true)).toThrow(TypeError)
  })
  it('works with more than 2 numbers', () => {
    expect(add(2, 2, 2, 2)).toBe(8)
  })
})
