import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import { localized } from '../../lib/localize'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
  locale: string
  handleLangChange: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
  locale,
  handleLangChange
}: Props) => {
  return (
    <BaseModal title={localized['app.settingsmodal.title']} isOpen={isOpen} handleClose={handleClose}>
      <div className="flex flex-col mt-2 divide-y">
        <SettingsToggle
          settingName={localized['app.settingsmodal.darkmode']}
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName={localized['app.settingsmodal.highcontrast']}
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={localized['app.settingsmodal.highcontrastinfo']}
        />
        <select value={locale} onChange={(event) => handleLangChange(event.target.value)}>
          <option value='pt'>Português</option>
          <option value='en'>English</option>
        </select>
      </div>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        {localized['app.settingsmodal.opensourceinfo']} -{' '}
        <a
          href="https://github.com/fehteh/codle-react"
          className="underline font-bold"
        >
          {localized['app.settingsmodal.checkcode']}
        </a>{' '}
      </p>
    </BaseModal>
  )
}
