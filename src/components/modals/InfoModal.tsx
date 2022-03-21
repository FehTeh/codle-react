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
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
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
        The number 2 is in the correct spot.
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
        The number 1 is closer to the correct value.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={1} />
        <Cell value={3} />
        <Cell value={8} />
        <Cell isRevealing={true} isCompleted={true} value={2} status="absent" />
        <Cell value={5} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 2 way too far from the correct.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
