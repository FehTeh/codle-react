import { solution, splitIntoNumbers } from './codes'

export type CharStatus = 'absent' | 'present' | 'correct'

export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}
  const splitSolution = splitIntoNumbers(solution)

  guesses.forEach((code) => {
    splitIntoNumbers(code).forEach((number, i) => {
      if (!splitSolution.includes(number)) {
        // make status absent
        return (charObj[number] = 'absent')
      }

      if (number === splitSolution[i]) {
        //make status correct
        return (charObj[number] = 'correct')
      }

      if (charObj[number] !== 'correct') {
        //make status present
        return (charObj[number] = 'present')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
  const splitSolution = splitIntoNumbers(solution)
  const splitGuess = splitIntoNumbers(guess)

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((number, i) => {
    if (number === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((number, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(number)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === number && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}