import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/codes'
import { BaseModal } from './BaseModal'
import {
  SHARE_TEXT,
} from '../../constants/strings'
import { localized } from '../../lib/localize'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  isDarkMode: boolean
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
  isDarkMode,
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
        <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
          If you like my work please feel free to buy me a coffee
          <a className="buymeacoffee" href="https://www.buymeacoffee.com/fehteh" target="_blank" rel="noreferrer">
            <img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"/>
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
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {localized['app.statsmodal.guessdistribution']}
      </h4>
      <Histogram
        gameStats={gameStats}
        numberOfGuessesMade={numberOfGuessesMade}
      />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
          <div>
            <h5>{localized['app.statsmodal.newcode']}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
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
                isDarkMode,
                isHighContrastMode,
                handleShareToClipboard
              )
            }}
          >
            {SHARE_TEXT}
          </button>
        </div>
      )}
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        If you like my work please feel free to buy me a coffee
        <a className="buymeacoffee" href="https://www.buymeacoffee.com/fehteh" target="_blank" rel="noreferrer">
          <img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"/>
        </a>
      </p>
    </BaseModal>
  )
}
