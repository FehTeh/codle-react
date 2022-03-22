import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the code in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the code.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value={2}
          status="correct"
        />
        <Cell value={6} />
        <Cell value={1} />
        <Cell value={9} />
        <Cell value={5} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 2 is in the code and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={2} />
        <Cell value={1} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value={5}
          status="present"
        />
        <Cell value={7} />
        <Cell value={1} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 5 is in the code but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={1} />
        <Cell value={3} />
        <Cell value={8} />
        <Cell isRevealing={true} isCompleted={true} value={2} status="absent" />
        <Cell value={5} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 2 is not in the code in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        There is available one hint per column in the info icon.
      </p>
    </BaseModal>
  )
}
