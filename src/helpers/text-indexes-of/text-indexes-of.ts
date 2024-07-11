const textIndexesOf = (text: string, searchTerms: string[]) => {
  const positionsAndChunksSizes: [number, number][] = []

  searchTerms.forEach(searchTerm => {
    let i = text.indexOf(searchTerm)

    while (i !== -1) {
      positionsAndChunksSizes.push([i, searchTerm.length])
      i = text.indexOf(searchTerm, i + searchTerm.length)
    }
  })

  return positionsAndChunksSizes.sort((a, b) => a[0] - b[0])
}

export default textIndexesOf
