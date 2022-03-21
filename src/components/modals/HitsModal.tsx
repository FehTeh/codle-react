import { BaseModal } from './BaseModal'
import { getHit, hits } from '../../lib/codes'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const HitsModal = ({ isOpen, handleClose }: Props) => {

  return (
    <BaseModal title="Hits" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        These are the hits to crack the code:
      </p>
      <br></br>
      {hits.map((hit, i) => (
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {getHit(hit, i)}
        </p>
      ))}
    </BaseModal>
  )
}
