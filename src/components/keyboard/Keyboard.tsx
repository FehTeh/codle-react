import { Key } from './Key'
import { useEffect } from 'react'
import { BackspaceIcon } from '@heroicons/react/outline'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  isRevealing,
}: Props) => {

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key
        if (key.length === 1 && key >= '0' && key <= '9') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div className='keyboard'>
      <div className="flex justify-center mb-1">
        {['1', '2', '3', '4', '5', '6'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        {['7','8','9','0'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="DELETE" onClick={onClick}>
          <BackspaceIcon className="h-6 w-6 cursor-pointer"/>
        </Key>
      </div>
    </div>
  )
}
