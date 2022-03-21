import md5 from 'md5'
import { MAX_CODE_LENGTH } from '../constants/settings'

export const isWinningWord = (code: string) => {
  return solution === code
}

export const splitIntoNumbers = (code: string) => {
  return code.split('').map( (i) => Number(i));
}

export const codeLength = (code: string) => {
  return splitIntoNumbers(code).length
}

export const getSolutionOfDay = () => {
  const epochMs = new Date(2022, 0).valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  const today = new Date().toISOString().split('T')[0]
  const encodedToday = md5(today);

  let encodedTodayCharCodeList = [];

  for(var i = 0; i < encodedToday.length; i++)
  {
      encodedTodayCharCodeList.push(encodedToday.charCodeAt(i));
  }

  const encodedTodayCharCode = encodedTodayCharCodeList.join('');

  const pin = encodedTodayCharCode.substring(0, MAX_CODE_LENGTH);
  const hits = encodedTodayCharCode.substring(MAX_CODE_LENGTH, MAX_CODE_LENGTH * 2);

  return {
    solution: pin,
    hits: hits,
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getSolutionOfDay()
