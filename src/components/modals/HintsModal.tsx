import { BaseModal } from './BaseModal'
import { getHint, hints } from '../../lib/codes'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const HintsModal = ({ isOpen, handleClose }: Props) => {

  return (
    <BaseModal title="Hints" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        These are the hints to crack the code:
      </p>
      <br></br>
      {hints.map((hint, i) => (
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {getHint(hint, i)}
        </p>
      ))}
    </BaseModal>
  )
}
