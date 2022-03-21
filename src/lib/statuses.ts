import { solution, splitIntoNumbers } from './codes'

export type CharStatus = 'absent' | 'present' | 'correct'

export const getGuessStatuses = (guess: string): CharStatus[] => {
  const splitSolution = splitIntoNumbers(solution)
  const splitGuess = splitIntoNumbers(guess)

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if(letter + 2 < splitSolution[i] || letter - 2 > splitSolution[i])
    {
      statuses[i] = 'present'
      return
    }

    statuses[i] = 'absent'
  })

  return statuses
}
