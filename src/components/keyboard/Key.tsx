import { ReactNode } from 'react'
import classnames from 'classnames'
import { MAX_CODE_LENGTH, REVEAL_TIME_MS } from '../../constants/settings'

type Props = {
  children?: ReactNode
  value: string
  width?: number
  onClick: (value: string) => void
  isRevealing?: boolean
}

export const Key = ({
  children,
  width = 40,
  value,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * MAX_CODE_LENGTH

  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400',
    {
      'transition ease-in-out': isRevealing
    }
  )

  const styles = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
    width: `${width}px`,
    height: '58px',
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button style={styles} className={classes} onClick={handleClick}>
      {children || value}
    </button>
  )
}
