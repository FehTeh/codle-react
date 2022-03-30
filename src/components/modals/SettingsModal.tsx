import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import { localized } from '../../lib/localize'
import { GAME_TITLE } from '../../constants/settings'
import { format } from 'react-string-format'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHighContrastMode: boolean
  handleHighContrastMode: Function
  locale: string
  handleLangChange: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHighContrastMode,
  handleHighContrastMode,
  locale,
  handleLangChange,
}: Props) => {
  return (
    <BaseModal
      title={localized['app.settingsmodal.title']}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <div className="flex flex-col mt-2 divide-y">
        <SettingsToggle
          settingName={localized['app.settingsmodal.highcontrast']}
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={localized['app.settingsmodal.highcontrastinfo']}
        />
        <select
          value={locale}
          onChange={(event) => handleLangChange(event.target.value)}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </div>
      <p className="mt-6 italic text-sm text-gray-300">
        {format(localized['app.settingsmodal.basedon'], GAME_TITLE)} -{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle"
          className="underline font-bold"
        >
          {localized['app.settingsmodal.wordle']}
        </a>{' '}
      </p>
    </BaseModal>
  )
}
