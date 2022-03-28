import { BaseModal } from './BaseModal'
import { getHint, hints } from '../../lib/codes'
import { localized } from '../../lib/localize'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const HintsModal = ({ isOpen, handleClose }: Props) => {

  return (
    <BaseModal title={localized['app.hintsmodal.title']} isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-300">
        {localized['app.hintsmodal.info']}
      </p>
      <br></br>
      {hints.map((_, i) => (
        <p key={i} className="text-sm text-gray-300">
          {getHint(i)}
        </p>
      ))}
    </BaseModal>
  )
}
