const splitTextIntoChunks = (
  text: string,
  positionsAndChunksSizes: [number, number][]
) => {
  const chunks = positionsAndChunksSizes.reduce<string[]>(
    (acc, currentPositionAndChunkSize, index) => {
      const previousIndex = index === 0 ? 0 : index - 1
      const [previousPosition, previousChunkSize] =
        positionsAndChunksSizes[previousIndex]!
      const previousChunkEndPosition = previousPosition! + previousChunkSize!
      const [currentPosition, currentChunkSize] = currentPositionAndChunkSize
      const firstChunk =
        index === 0 && currentPosition !== 0
          ? [text.slice(0, currentPosition)]
          : []
      const previousChunk =
        previousChunkEndPosition !== 0
          ? [text.slice(previousChunkEndPosition, currentPosition)]
          : []
      const currentChunk = text.slice(
        currentPosition,
        currentPosition + currentChunkSize
      )
      const lastChunk =
        index === positionsAndChunksSizes.length - 1
          ? [text.slice(currentPosition + currentChunkSize, text.length)]
          : []

      return [
        ...acc,
        ...firstChunk,
        ...previousChunk,
        currentChunk,
        ...lastChunk
      ]
    },
    []
  )

  return chunks.filter(chunk => chunk !== '')
}

export default splitTextIntoChunks
