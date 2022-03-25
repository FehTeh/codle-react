export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const CORRECT_CODE_MESSAGE = (solution: string) =>
  `The code was ${solution}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_CODE_TEXT = 'New code in'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'

export const HINT_ODD = (position: string) => `${position} is a odd number`;
export const HINT_EVEN = (position: string) => `${position} is a even number`;
export const HINT_GREATER_THAN = (positionX: string, positionY: string) => `${positionX} is greater than ${positionY}`;
export const HINT_LESS_THAN = (positionX: string, positionY: string) => `${positionX} is less than ${positionY}`;
export const HINT_EQUALS_TO = (positionX: string, positionY: string) => `${positionX} is equals to ${positionY}`;
export const HINT_MULTIPLE_OF = (position: string, multiple: number) => `${position} is multiple of ${multiple}`;
export const HINT_NOT_MULTIPLE_OF = (position: string, multiple: number) => `${position} is not multiple of ${multiple}`;
export const HINT_PRIME = (position: string) => `${position} is a prime number`;
export const HINT_NOT_PRIME = (position: string) => `${position} is not a prime number`;
export const HINT_FIBONACCI = (position: string) => `${position} is part of fibonacci sequence`;
export const HINT_NOT_FIBONACCI = (position: string) => `${position} is not part of fibonacci sequence`;
export const HINT_CALC = (positionX: string, positionY: string, operation:string, result: number) => `${positionX} ${operation} ${positionY} = ${result}`;