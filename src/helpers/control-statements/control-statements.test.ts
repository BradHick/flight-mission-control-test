import { choose, otherwise, when } from '..'

describe('control statements', () => {
  it('should return the result of the first matching condition', () => {
    const result = choose(
      () => ({ condition: true, render: () => 'First condition' }),
      () => ({ condition: false, render: () => 'Second condition' }),
      () => ({ condition: true, render: () => 'Third condition' })
    )

    expect(result).toBe('First condition')
  })

  it('should return null if no condition matches', () => {
    const result = choose(
      () => ({ condition: false, render: () => 'First condition' }),
      () => ({ condition: false, render: () => 'Second condition' })
    )

    expect(result).toBeNull()
  })

  it('should throw an error if no matchers are provided', () => {
    expect(() => choose()).toThrow(
      'Choose must have at least one matcher to be valid.'
    )
  })
  it('should return a matcher with condition true when `when` is called with true', () => {
    const render = () => 'Rendered'
    const matcher = when(true, render)
    const result = matcher()
    expect(result).toEqual({ condition: true, render })
  })

  it('should return a matcher with condition false when `when` is called with false', () => {
    const render = () => 'Rendered'
    const matcher = when(false, render)
    const result = matcher()
    expect(result).toEqual({ condition: false, render })
  })

  it('should return a matcher with condition true when `otherwise` is called', () => {
    const render = () => 'Rendered'
    const matcher = otherwise(render)
    const result = matcher()
    expect(result).toEqual({ condition: true, render })
  })
})
