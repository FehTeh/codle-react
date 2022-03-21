import md5 from 'md5'
import { MAX_CODE_LENGTH } from '../constants/settings'
import { HIT_CALC, HIT_EQUALS_TO, 
         HIT_EVEN, 
         HIT_FIBONACCI, 
         HIT_GREATER_THAN, 
         HIT_LESS_THAN, 
         HIT_MULTIPLE_OF, 
         HIT_NOT_FIBONACCI, 
         HIT_NOT_MULTIPLE_OF, 
         HIT_NOT_PRIME, 
         HIT_ODD, 
         HIT_PRIME } 
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

export const getHit = (hit: number, position:number) => {
  let solutionSplit = splitIntoNumbers(solution);
  const positionCompare = position + 1 === (MAX_CODE_LENGTH - 1) ? 0 : position + 1
  const letter = String.fromCharCode(65 + position);
  const letterCompare = String.fromCharCode(65 + positionCompare);

  switch(hit) {
    case 1: { // x ><= y
      if(solutionSplit[position] > solutionSplit[positionCompare]){
        return HIT_GREATER_THAN(letter, letterCompare);
      }
      if(solutionSplit[position] < solutionSplit[positionCompare]){
        return HIT_LESS_THAN(letter, letterCompare);
      }
      return HIT_EQUALS_TO(letter, letterCompare);
    }
    case 2: { // multiple of 3
      if(solutionSplit[position] % 3 === 0){
        return HIT_MULTIPLE_OF(letter, 3);
      }
      return HIT_NOT_MULTIPLE_OF(letter, 3);
    }
    case 3: {
      if(solutionSplit[position] % 4 === 0){
        return HIT_MULTIPLE_OF(letter, 4);
      }
      return HIT_NOT_MULTIPLE_OF(letter, 4);
    }
    case 4: {
      if(solutionSplit[position] % 5 === 0){
        return HIT_MULTIPLE_OF(letter, 5);
      }
      return HIT_NOT_MULTIPLE_OF(letter, 5);
    }
    case 5: { // is prime
      if([2,3,5,7].findIndex((i) => i === solutionSplit[position]) > 0) {
        return HIT_PRIME(letter);
      }
      return HIT_NOT_PRIME(letter);
    }
    case 6: { // is inside fibonacci
      if([0,1,2,3,5,8].findIndex((i) => i === solutionSplit[position]) > 0) {
        return HIT_FIBONACCI(letter);
      }
      return HIT_NOT_FIBONACCI(letter);
    }
    case 7: {
      return HIT_CALC(letter, letterCompare, "+", solutionSplit[position] + solutionSplit[positionCompare])
    }
    case 8: {
      return HIT_CALC(letter, letterCompare, "-", solutionSplit[position] - solutionSplit[positionCompare])
    }
    case 9: {
      return HIT_CALC(letter, letterCompare, "*", solutionSplit[position] * solutionSplit[positionCompare])
    }
    default: { //odd or event
      if(solutionSplit[position] % 2 === 0){
        return HIT_EVEN(letter);
      }
      return HIT_ODD(letter);
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
  const hits = encodedTodayCharCode.substring(MAX_CODE_LENGTH, MAX_CODE_LENGTH * 2);

  return {
    solution: pin,
    hits: splitIntoNumbers(hits),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, hits, solutionIndex, tomorrow } = getSolutionOfDay()
