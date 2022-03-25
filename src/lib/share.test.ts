import { generateEmojiGrid } from './share'

const mockSolutionGetter = jest.fn()
jest.mock('./codes', () => ({
  ...jest.requireActual('./codes'),
  get solution() {
    return mockSolutionGetter()
  },
}))

describe('generateEmojiGrid', () => {

  test('generates grid for codes', () => {
    const guesses = ['54321', '67890', '12345']
    const tiles = ['C', 'P', 'A'] // Correct, Present, Absemt
    mockSolutionGetter.mockReturnValue('12345')

    const grid = generateEmojiGrid(guesses, tiles)
    const gridParts = grid.split('\n')
    expect(gridParts[0]).toBe('PPCPP')
    expect(gridParts[1]).toBe('AAAAA')
    expect(gridParts[2]).toBe('CCCCC')
  })

})
