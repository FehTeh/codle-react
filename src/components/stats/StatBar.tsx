import { GameStats } from '../../lib/localStorage'
import { localized } from '../../lib/localize'

type Props = {
  gameStats: GameStats
}

const StatItem = ({
  label,
  value,
}: {
  label: string
  value: string | number
}) => {
  return (
    <div className="items-center justify-center m-1 w-1/4 dark:text-white">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  )
}

export const StatBar = ({ gameStats }: Props) => {
  return (
    <div className="flex justify-center my-2">
      <StatItem label={localized['app.statsbar.totaltries']} value={gameStats.totalGames} />
      <StatItem label={localized['app.statsbar.successrate']} value={`${gameStats.successRate}%`} />
      <StatItem label={localized['app.statsbar.currentstreak']} value={gameStats.currentStreak} />
      <StatItem label={localized['app.statsbar.beststreak']} value={gameStats.bestStreak} />
    </div>
  )
}
