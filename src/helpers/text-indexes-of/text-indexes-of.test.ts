import textIndexesOf from './text-indexes-of'

describe('textIndexesOf', () => {
  it('should return the positions and chunk sizes of search terms in the text', () => {
    const text = 'Hello, world! This is a test.'
    const searchTerms = ['Hello', 'world', 'test']
    const expectedPositionsAndChunkSizes: [number, number][] = [
      [0, 5],
      [7, 5],
      [24, 4]
    ]
    const result = textIndexesOf(text, searchTerms)
    expect(result).toEqual(expectedPositionsAndChunkSizes)
  })

  it('should handle empty text', () => {
    const text = ''
    const searchTerms = ['Hello', 'world', 'test']
    const expectedPositionsAndChunkSizes: [number, number][] = []
    const result = textIndexesOf(text, searchTerms)
    expect(result).toEqual(expectedPositionsAndChunkSizes)
  })

  it('should handle empty search terms', () => {
    const text = 'Hello, world! This is a test.'
    const searchTerms: string[] = []
    const expectedPositionsAndChunkSizes: [number, number][] = []
    const result = textIndexesOf(text, searchTerms)
    expect(result).toEqual(expectedPositionsAndChunkSizes)
  })

  it('should handle search terms not found in the text', () => {
    const text = 'Hello, world! This is a test.'
    const searchTerms = ['foo', 'bar']
    const expectedPositionsAndChunkSizes: [number, number][] = []
    const result = textIndexesOf(text, searchTerms)
    expect(result).toEqual(expectedPositionsAndChunkSizes)
  })
})
