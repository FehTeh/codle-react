import { MAX_CODE_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(MAX_CODE_LENGTH))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
