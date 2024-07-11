type Renderer<T> = () => T
type Matcher<T> = () => {
  condition: boolean
  render: () => T
}

const choose = <T>(...matchers: Matcher<T>[]): T | null => {
  const [currentMatcher, ...rest] = matchers

  if (!currentMatcher) {
    throw new Error('Choose must have at least one matcher to be valid.')
  }

  const { condition, render } = currentMatcher()

  if (condition) return render()
  if (rest.length) return choose(...rest)

  return null
}

const when =
  <T>(condition: boolean, render: Renderer<T>) =>
  () => ({
    condition,
    render
  })

const otherwise = <T>(render: Renderer<T>) => when<T>(true, render)

export { choose, when, otherwise }
