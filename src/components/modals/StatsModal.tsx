import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/codes'
import { BaseModal } from './BaseModal'
import { localized } from '../../lib/localize'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  isHighContrastMode,
  numberOfGuessesMade,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={localized['app.statsmodal.title']}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
        <p className="mt-6 italic text-sm text-gray-300">
          {localized['app.statsmodal.buymeacoffee']}
          <a
            className="buymeacoffee"
            href="https://ko-fi.com/J3J2BUDV7"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
        </p>
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={localized['app.statsmodal.title']}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-100">
        {localized['app.statsmodal.guessdistribution']}
      </h4>
      <Histogram
        gameStats={gameStats}
        numberOfGuessesMade={numberOfGuessesMade}
      />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 text-white">
          <div>
            <h5>{localized['app.statsmodal.newcode']}</h5>
            <Countdown
              className="text-lg font-medium text-gray-100"
              date={tomorrow}
              daysInHours={true}
            />
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(
                guesses,
                isGameLost,
                isHighContrastMode,
                handleShareToClipboard
              )
            }}
          >
            {localized['app.statsmodal.share']}
          </button>
        </div>
      )}
      <p className="mt-6 italic text-sm text-gray-300">
        {localized['app.statsmodal.buymeacoffee']}
        <a
          className="buymeacoffee"
          href="https://ko-fi.com/J3J2BUDV7"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
      </p>
    </BaseModal>
  )
}
