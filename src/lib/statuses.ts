import { solution, splitIntoNumbers } from './codes'

export type CharStatus = 'far' | 'near' | 'correct'

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

    let nearLetterPlus = letter + 1;
    if(nearLetterPlus > 9) {
      nearLetterPlus = 0;
    }

    let nearLetterMinus = letter - 1;
    if(nearLetterMinus < 0) {
      nearLetterMinus = 9;
    }

    if(nearLetterPlus === splitSolution[i] || nearLetterMinus === splitSolution[i]) {
      statuses[i] = 'near'
      return
    }

    statuses[i] = 'far'
  })

  return statuses
}
