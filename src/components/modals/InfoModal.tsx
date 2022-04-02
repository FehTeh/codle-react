import { localized } from '../../lib/localize'
import { BaseModal } from './BaseModal'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { HowToPlayInfo } from './HowToPlayInfo'
import { SequencesInfo } from './SequencesInfo'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title={localized['app.infomodal.title']}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <Carousel showArrows={false} emulateTouch={true} showStatus={false}>
        <div>
          <HowToPlayInfo></HowToPlayInfo>
        </div>
        <div>
          <SequencesInfo></SequencesInfo>
        </div>
      </Carousel>
    </BaseModal>
  )
}
