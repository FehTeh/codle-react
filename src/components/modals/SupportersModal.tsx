import { localized } from '../../lib/localize'
import { supporters } from '../../lib/supporters'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const SupportersModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title={localized['app.supportersmodal.title']}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm mb-4 text-gray-300">
        {localized['app.supportersmodal.info']}
      </p>

      {supporters.map((name, i) => (
        <p key={i} className="text-sm italic text-gray-300">
          {name}
        </p>
      ))}
    </BaseModal>
  )
}
