import md5 from 'md5'
import { format } from 'react-string-format'
import { MAX_CODE_LENGTH } from '../constants/settings'
import { localized } from './localize'

export const isWinningWord = (code: string) => {
  return solution === code
}

export const splitIntoNumbers = (code: string) => {
  return code.split('').map((i) => Number(i))
}

export const codeLength = (code: string) => {
  return splitIntoNumbers(code).length
}

export const getHint = (position: number) => {
  let solutionSplit = splitIntoNumbers(solution)
  const positionCompare = position + 1 === MAX_CODE_LENGTH ? 0 : position + 1
  const letter = String.fromCharCode(65 + position)
  const letterCompare = String.fromCharCode(65 + positionCompare)

  switch (hints[position]) {
    case 1: {
      // x ><= y
      if (solutionSplit[position] > solutionSplit[positionCompare]) {
        return format(localized['app.hint.greaterthan'], letter, letterCompare)
      }
      if (solutionSplit[position] < solutionSplit[positionCompare]) {
        return format(localized['app.hint.lessthan'], letter, letterCompare)
      }
      return format(localized['app.hint.equalsto'], letter, letterCompare)
    }
    case 2: {
      // multiple of 3
      if (solutionSplit[position] % 3 === 0) {
        return format(localized['app.hint.multipleof'], letter, 3)
      }
      return format(localized['app.hint.notmultipleof'], letter, 3)
    }
    case 3: {
      if (solutionSplit[position] % 4 === 0) {
        return format(localized['app.hint.multipleof'], letter, 4)
      }
      return format(localized['app.hint.notmultipleof'], letter, 4)
    }
    case 4: {
      if (solutionSplit[position] % 5 === 0) {
        return format(localized['app.hint.multipleof'], letter, 5)
      }
      return format(localized['app.hint.notmultipleof'], letter, 5)
    }
    case 5: {
      // is prime
      if ([2, 3, 5, 7].includes(solutionSplit[position])) {
        return format(localized['app.hint.prime'], letter)
      }
      return format(localized['app.hint.notprime'], letter)
    }
    case 6: {
      // is inside fibonacci
      if ([0, 1, 2, 3, 5, 8].includes(solutionSplit[position])) {
        return format(localized['app.hint.fibonacci'], letter)
      }
      return format(localized['app.hint.notfibonacci'], letter)
    }
    case 7: {
      return format(
        '{0} {1} {2} = {3}',
        letter,
        '+',
        letterCompare,
        solutionSplit[position] + solutionSplit[positionCompare]
      )
    }
    case 8: {
      return format(
        '{0} {1} {2} = {3}',
        letter,
        '-',
        letterCompare,
        solutionSplit[position] - solutionSplit[positionCompare]
      )
    }
    case 9: {
      return format(
        '{0} {1} {2} = {3}',
        letter,
        '*',
        letterCompare,
        solutionSplit[position] * solutionSplit[positionCompare]
      )
    }
    default: {
      //odd or event
      if (solutionSplit[position] % 2 === 0) {
        return format(localized['app.hint.even'], letter)
      }
      return format(localized['app.hint.odd'], letter)
    }
  }
}

export const getSolutionOfDay = () => {
  const epochMs = new Date(2022, 0).valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  const today = new Date().toISOString().split('T')[0]
  const encodedToday = md5(today)

  let encodedTodayCharCodeList = []

  for (var i = 0; i < encodedToday.length; i++) {
    if (isNaN(+encodedToday[i])) {
      var letterPosition = (encodedToday.charCodeAt(i) - 96).toString()
      var lastValue = letterPosition[letterPosition.length - 1]
      encodedTodayCharCodeList.push(lastValue)
    } else {
      encodedTodayCharCodeList.push(encodedToday[i])
    }
  }

  const encodedTodayCharCode = encodedTodayCharCodeList.join('')

  const pin = encodedTodayCharCode.substring(0, MAX_CODE_LENGTH)
  const possibleHints = splitIntoNumbers(
    encodedTodayCharCode.substring(MAX_CODE_LENGTH, MAX_CODE_LENGTH * 2)
  )

  let hints = [possibleHints[0]]

  for (var j = 1; j < possibleHints.length; j++) {
    let toAdd = possibleHints[j]

    while (hints.length === j) {
      var duplicated = false

      for (var k = 0; k < hints.length; k++) {
        if (hints[k] === toAdd) {
          duplicated = true
          break
        }
      }

      if (!duplicated) {
        hints.push(toAdd)
      } else {
        toAdd++
        if (toAdd > 9) {
          toAdd = 0
        }
      }
    }
  }

  return {
    solution: pin,
    hints: hints,
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, hints, solutionIndex, tomorrow } = getSolutionOfDay()
