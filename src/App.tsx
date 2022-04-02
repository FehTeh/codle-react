import { useState, useEffect } from 'react'
import { Grid } from './components/grid/Grid'
import { Keyboard } from './components/keyboard/Keyboard'
import { InfoModal } from './components/modals/InfoModal'
import { StatsModal } from './components/modals/StatsModal'
import { SettingsModal } from './components/modals/SettingsModal'
import {
  MAX_CODE_LENGTH,
  MAX_CHALLENGES,
  REVEAL_TIME_MS,
  GAME_LOST_INFO_DELAY,
  WELCOME_INFO_MODAL_MS,
  REDIRECT_URL,
} from './constants/settings'
import { isWinningWord, solution, codeLength } from './lib/codes'
import { addStatsForCompletedGame, loadStats } from './lib/stats'
import {
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
  setStoredIsHighContrastMode,
  getStoredIsHighContrastMode,
} from './lib/localStorage'

import { AlertContainer } from './components/alerts/AlertContainer'
import { useAlert } from './context/AlertContext'
import { Navbar } from './components/navbar/Navbar'
import { localized } from './lib/localize'
import { Fireworks } from 'fireworks-js/dist/react'
import { format } from 'react-string-format'
import { Redirect } from './components/Redirect'
import { SupportersModal } from './components/modals/SupportersModal'

function App() {
  const [lang, setLang] = useState(
    localStorage.getItem('lang')
      ? (localStorage.getItem('lang') as string)
      : localized.getInterfaceLanguage()
  )

  const { showError: showErrorAlert, showSuccess: showSuccessAlert } =
    useAlert()
  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameWon, setIsGameWon] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
  const [isSupportersModalOpen, setIsSupportersModalOpen] = useState(false)
  const [currentRowClass, setCurrentRowClass] = useState('')
  const [isGameLost, setIsGameLost] = useState(false)

  const [isHighContrastMode, setIsHighContrastMode] = useState(
    getStoredIsHighContrastMode()
  )
  const [isRevealing, setIsRevealing] = useState(false)
  const [guesses, setGuesses] = useState<string[]>(() => {
    const loaded = loadGameStateFromLocalStorage()
    if (loaded?.solution !== solution) {
      return []
    }
    const gameWasWon = loaded.guesses.includes(solution)
    if (gameWasWon) {
      setIsGameWon(true)
    }
    if (loaded.guesses.length === MAX_CHALLENGES && !gameWasWon) {
      setIsGameLost(true)
      showErrorAlert(format(localized['app.correctcode'], solution), {})
    }
    return loaded.guesses
  })

  const [stats, setStats] = useState(() => loadStats())

  useEffect(() => {
    // if no game state on load,
    // show the user the how-to info modal
    if (!loadGameStateFromLocalStorage()) {
      setTimeout(() => {
        setIsInfoModalOpen(true)
      }, WELCOME_INFO_MODAL_MS)
    }
  }, [])

  useEffect(() => {
    if (isHighContrastMode) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [isHighContrastMode])

  const handleLangChange = (lang: string) => {
    localized.setLanguage(lang)
    setLang(lang)
    localStorage.setItem('lang', lang)
  }

  const handleHighContrastMode = (isHighContrast: boolean) => {
    setIsHighContrastMode(isHighContrast)
    setStoredIsHighContrastMode(isHighContrast)
  }

  const clearCurrentRowClass = () => {
    setCurrentRowClass('')
  }

  useEffect(() => {
    saveGameStateToLocalStorage({ guesses, solution })
  }, [guesses])

  useEffect(() => {
    if (isGameWon) {
      const winMessages = [
        localized['app.win1'],
        localized['app.win2'],
        localized['app.win3'],
      ]
      const winMessage =
        winMessages[Math.floor(Math.random() * winMessages.length)]
      const delayMs = REVEAL_TIME_MS * MAX_CODE_LENGTH

      showSuccessAlert(winMessage, {
        delayMs,
        onClose: () => setIsStatsModalOpen(true),
      })
    }

    if (isGameLost) {
      setTimeout(() => {
        setIsStatsModalOpen(true)
      }, GAME_LOST_INFO_DELAY)
    }
  }, [isGameWon, isGameLost, showSuccessAlert])

  const onChar = (value: string) => {
    if (
      codeLength(`${currentGuess}${value}`) <= MAX_CODE_LENGTH &&
      guesses.length < MAX_CHALLENGES &&
      !isGameWon
    ) {
      setCurrentGuess(`${currentGuess}${value}`)
    }
  }

  const onDelete = () => {
    setCurrentGuess(currentGuess.split('').slice(0, -1).join(''))
  }

  const onEnter = () => {
    if (isGameWon || isGameLost) {
      return
    }

    if (!(codeLength(currentGuess) === MAX_CODE_LENGTH)) {
      setCurrentRowClass('jiggle')
      return showErrorAlert(localized['app.notenoughnumbers'], {
        onClose: clearCurrentRowClass,
      })
    }

    setIsRevealing(true)
    // turn this back off after all
    // chars have been revealed
    setTimeout(() => {
      setIsRevealing(false)
    }, REVEAL_TIME_MS * MAX_CODE_LENGTH)

    const winningWord = isWinningWord(currentGuess)

    if (
      codeLength(currentGuess) === MAX_CODE_LENGTH &&
      guesses.length < MAX_CHALLENGES &&
      !isGameWon
    ) {
      setGuesses([...guesses, currentGuess])
      setCurrentGuess('')

      if (winningWord) {
        setStats(addStatsForCompletedGame(stats, guesses.length))
        return setIsGameWon(true)
      }

      if (guesses.length === MAX_CHALLENGES - 1) {
        setStats(addStatsForCompletedGame(stats, guesses.length + 1))
        setIsGameLost(true)
        showErrorAlert(format(localized['app.correctcode'], solution), {
          delayMs: REVEAL_TIME_MS * MAX_CODE_LENGTH + 1,
        })
      }
    }
  }

  return (
    <>
      <Navbar
        setIsInfoModalOpen={setIsInfoModalOpen}
        setIsStatsModalOpen={setIsStatsModalOpen}
        setIsSettingsModalOpen={setIsSettingsModalOpen}
        setIsSupportersModalOpen={setIsSupportersModalOpen}
      />
      <Grid
        guesses={guesses}
        currentGuess={currentGuess}
        isRevealing={isRevealing}
        currentRowClassName={currentRowClass}
        inGame={!isGameWon && !isGameLost}
        showHint={
          !isGameWon && !isGameLost && currentGuess.length < MAX_CODE_LENGTH
        }
      />
      {!isGameWon && !isGameLost && (
        <Keyboard
          onChar={onChar}
          onDelete={onDelete}
          onEnter={onEnter}
          guesses={guesses}
          isRevealing={isRevealing}
        />
      )}

      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
      <StatsModal
        isOpen={isStatsModalOpen}
        handleClose={() => setIsStatsModalOpen(false)}
        guesses={guesses}
        gameStats={stats}
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        handleShareToClipboard={() =>
          showSuccessAlert(localized['app.gamecopied'])
        }
        isHighContrastMode={isHighContrastMode}
        numberOfGuessesMade={guesses.length}
      />
      <SettingsModal
        isOpen={isSettingsModalOpen}
        handleClose={() => setIsSettingsModalOpen(false)}
        isHighContrastMode={isHighContrastMode}
        handleHighContrastMode={handleHighContrastMode}
        locale={lang}
        handleLangChange={handleLangChange}
      />
      <SupportersModal
        isOpen={isSupportersModalOpen}
        handleClose={() => setIsSupportersModalOpen(false)}
      />
      <AlertContainer />
      {isGameWon && <Fireworks className="firework" />}
      {REDIRECT_URL != null && <Redirect />}
    </>
  )
}

export default App
