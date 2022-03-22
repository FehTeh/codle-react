import md5 from 'md5'
import { MAX_CODE_LENGTH } from '../constants/settings'
import { HINT_CALC, 
         HINT_EQUALS_TO, 
         HINT_EVEN, 
         HINT_FIBONACCI, 
         HINT_GREATER_THAN, 
         HINT_LESS_THAN, 
         HINT_MULTIPLE_OF, 
         HINT_NOT_FIBONACCI, 
         HINT_NOT_MULTIPLE_OF, 
         HINT_NOT_PRIME, 
         HINT_ODD, 
         HINT_PRIME } 
from '../constants/strings'

export const isWinningWord = (code: string) => {
  return solution === code
}

export const splitIntoNumbers = (code: string) => {
  return code.split('').map( (i) => Number(i));
}

export const codeLength = (code: string) => {
  return splitIntoNumbers(code).length
}

export const getHint = (hint: number, position:number) => {
  let solutionSplit = splitIntoNumbers(solution);
  const positionCompare = position + 1 === (MAX_CODE_LENGTH - 1) ? 0 : position + 1
  const letter = String.fromCharCode(65 + position);
  const letterCompare = String.fromCharCode(65 + positionCompare);

  switch(hint) {
    case 1: { // x ><= y
      if(solutionSplit[position] > solutionSplit[positionCompare]){
        return HINT_GREATER_THAN(letter, letterCompare);
      }
      if(solutionSplit[position] < solutionSplit[positionCompare]){
        return HINT_LESS_THAN(letter, letterCompare);
      }
      return HINT_EQUALS_TO(letter, letterCompare);
    }
    case 2: { // multiple of 3
      if(solutionSplit[position] % 3 === 0){
        return HINT_MULTIPLE_OF(letter, 3);
      }
      return HINT_NOT_MULTIPLE_OF(letter, 3);
    }
    case 3: {
      if(solutionSplit[position] % 4 === 0){
        return HINT_MULTIPLE_OF(letter, 4);
      }
      return HINT_NOT_MULTIPLE_OF(letter, 4);
    }
    case 4: {
      if(solutionSplit[position] % 5 === 0){
        return HINT_MULTIPLE_OF(letter, 5);
      }
      return HINT_NOT_MULTIPLE_OF(letter, 5);
    }
    case 5: { // is prime
      if([2,3,5,7].includes(solutionSplit[position])) {
        return HINT_PRIME(letter);
      }
      return HINT_NOT_PRIME(letter);
    }
    case 6: { // is inside fibonacci
      if([0,1,2,3,5,8].includes(solutionSplit[position])) {
        return HINT_FIBONACCI(letter);
      }
      return HINT_NOT_FIBONACCI(letter);
    }
    case 7: {
      return HINT_CALC(letter, letterCompare, "+", solutionSplit[position] + solutionSplit[positionCompare])
    }
    case 8: {
      return HINT_CALC(letter, letterCompare, "-", solutionSplit[position] - solutionSplit[positionCompare])
    }
    case 9: {
      return HINT_CALC(letter, letterCompare, "*", solutionSplit[position] * solutionSplit[positionCompare])
    }
    default: { //odd or event
      if(solutionSplit[position] % 2 === 0){
        return HINT_EVEN(letter);
      }
      return HINT_ODD(letter);
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
  const encodedToday = md5(today);

  let encodedTodayCharCodeList = [];

  for(var i = 0; i < encodedToday.length; i++)
  {
      encodedTodayCharCodeList.push(encodedToday.charCodeAt(i));
  }

  const encodedTodayCharCode = encodedTodayCharCodeList.join('');

  const pin = encodedTodayCharCode.substring(0, MAX_CODE_LENGTH);
  const hints = encodedTodayCharCode.substring(MAX_CODE_LENGTH, MAX_CODE_LENGTH * 2);

  return {
    solution: pin,
    hints: splitIntoNumbers(hints),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, hints, solutionIndex, tomorrow } = getSolutionOfDay()
