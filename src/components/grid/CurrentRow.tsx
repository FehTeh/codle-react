import { MAX_CODE_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'
import { splitIntoNumbers } from '../../lib/codes'

type Props = {
  guess: string
  className: string
  inGame: boolean
}

export const CurrentRow = ({ 
  guess, 
  className,
  inGame
}: Props) => {
  const splitGuess = splitIntoNumbers(guess)
  const emptyCells = Array.from(Array(MAX_CODE_LENGTH - splitGuess.length))
  const classes = `flex justify-center mb-1 ${className}`

  return (
    <div className={classes}>
      {splitGuess.map((number, i) => (
        <Cell key={i} isCurrentRow={true} inGame={inGame} value={number} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} isCurrentRow={true} inGame={inGame} isCurrentCell={i === 0}/>
      ))}
    </div>
  )
}
