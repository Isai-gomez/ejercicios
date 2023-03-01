export const findMissingLetter = (array = []) => {
  for (let i = 0; i < array.length - 1; i++) {
    const current = array[i].charCodeAt(),
      next = array[i + 1].charCodeAt()
    const expected = current + 1
    if (next !== expected) {
      return String.fromCharCode(expected)
    }
  }
  return ''
}
