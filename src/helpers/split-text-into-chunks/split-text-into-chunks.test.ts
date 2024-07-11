import splitTextIntoChunks from './split-text-into-chunks'

describe('splitTextIntoChunks', () => {
  it('splits text into chunks correctly', () => {
    const text = 'The quick brown fox jumps over the lazy dog'
    const positionsAndChunksSizes: [number, number][] = [
      [0, 3],
      [4, 5],
      [10, 5],
      [16, 3],
      [20, 5]
    ]
    const result = splitTextIntoChunks(text, positionsAndChunksSizes)
    expect(result).toEqual([
      'The',
      ' ',
      'quick',
      ' ',
      'brown',
      ' ',
      'fox',
      ' ',
      'jumps',
      ' over the lazy dog'
    ])
  })

  it('handles empty text', () => {
    const text = ''
    const positionsAndChunksSizes: [number, number][] = [[0, 3]]
    const result = splitTextIntoChunks(text, positionsAndChunksSizes)
    expect(result).toEqual([])
  })

  it('handles text without positions and chunk sizes', () => {
    const text = 'sample text'
    const positionsAndChunksSizes: [number, number][] = []
    const result = splitTextIntoChunks(text, positionsAndChunksSizes)
    expect(result).toEqual([])
  })

  it('handles overlapping chunks', () => {
    const text = 'abcdefghij'
    const positionsAndChunksSizes: [number, number][] = [
      [0, 4],
      [3, 4]
    ]
    const result = splitTextIntoChunks(text, positionsAndChunksSizes)
    expect(result).toEqual(['abcd', 'defg', 'hij'])
  })

  it('handles chunks at the end of text', () => {
    const text = 'end'
    const positionsAndChunksSizes: [number, number][] = [[1, 2]]
    const result = splitTextIntoChunks(text, positionsAndChunksSizes)
    expect(result).toEqual(['e', 'nd'])
  })

  it('handles chunks when index and size are 0', () => {
    const text = 'abcdefghij'
    const positionsAndChunksSizes: [number, number][] = [[0, 0]]
    const result = splitTextIntoChunks(text, positionsAndChunksSizes)
    expect(result).toEqual(['abcdefghij'])
  })
})
