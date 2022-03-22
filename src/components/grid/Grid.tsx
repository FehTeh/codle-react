import { MAX_CHALLENGES } from '../../constants/settings'
import { getHint, hints } from '../../lib/codes'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import { HeaderRow } from './HeaderRow'

type Props = {
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  currentRowClassName: string
  showHint: boolean
}

export const Grid = ({
  guesses,
  currentGuess,
  isRevealing,
  currentRowClassName,
  showHint
}: Props) => {
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : []

  return (
    <div className='game'>
      <div className='gameGrid'>
        <HeaderRow />
        {guesses.map((guess, i) => (
          <CompletedRow
            key={i}
            guess={guess}
            isRevealing={isRevealing && guesses.length - 1 === i}
          />
        ))}
        {guesses.length < MAX_CHALLENGES && (
          <CurrentRow guess={currentGuess} className={currentRowClassName} />
        )}
        {empties.map((_, i) => (
          <EmptyRow key={i} />
        ))}
      </div>
      {showHint && (
        <div className="flex justify-center mb-1">
          <p className="mx-0.5 text-2xl font-bold dark:text-white correct shadowed">
            {getHint(hints[currentGuess.length], currentGuess.length)}
          </p>
        </div>
      )}
    </div>
  )
}
