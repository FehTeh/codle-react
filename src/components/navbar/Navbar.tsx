import {
  CakeIcon,
  ChartBarIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/settings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
  setIsSupportersModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
  setIsSupportersModalOpen,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <div className="left-icons">
          <CakeIcon
            className="h-6 w-6 mr-2 cursor-pointer stroke-white"
            onClick={() => setIsSupportersModalOpen(true)}
          />
          <QuestionMarkCircleIcon
            className="h-6 w-6 mr-2 cursor-pointer stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
        </div>
        <p className="title text-xl ml-2.5 font-bold text-white">
          {GAME_TITLE}
        </p>
        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
