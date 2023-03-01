import { findMissingLetter } from './findMissingLetter.js'
describe('Test findMissingLetter', () => {
  test('FindMissingLetterTests', () => {
    expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e')
    expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P')
  })
})
