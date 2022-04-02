import { localized } from '../../lib/localize'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

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
          <p className="text-sm text-gray-300">
            {localized['app.infomodal.info']}
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
          <p className="text-sm text-gray-300">
            {localized['app.infomodal.correct']}
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
          <p className="text-sm text-gray-300">
            {localized['app.infomodal.present']}
          </p>

          <div className="flex justify-center mb-1 mt-4">
            <Cell value={1} />
            <Cell value={3} />
            <Cell value={8} />
            <Cell
              isRevealing={true}
              isCompleted={true}
              value={7}
              status="absent"
            />
            <Cell value={5} />
          </div>
          <p className="text-sm text-gray-300">
            {localized['app.infomodal.absent']}
          </p>

          <p className="mt-6 italic text-sm text-gray-300">
            {localized['app.infomodal.neweveryday']}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-300">
            {localized['app.infomodal.perfectsquarenumbers']}
          </p>
          <div className="flex justify-center mb-1">
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={1}
            />
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={4}
            />
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={9}
            />
          </div>
          <p className="text-sm text-gray-300">
            {localized['app.infomodal.primenumbers']}
          </p>
          <div className="flex justify-center mb-1">
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={2}
            />
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={3}
            />
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={5}
            />
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={7}
            />
          </div>
          <p className="text-sm text-gray-300">
            {localized['app.infomodal.factorialnumbers']}
          </p>
          <div className="flex justify-center mb-1">
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={1}
            />
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={2}
            />
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={6}
            />
          </div>
          <p className="text-sm text-gray-300">
            {localized['app.infomodal.fibonaccinumbers']}
          </p>
          <div className="flex justify-center mb-1  ">
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={1}
            />
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={2}
            />
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={3}
            />
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={5}
            />
            <Cell
              isRevealing={true}
              isCompleted={true}
              status="absent"
              value={8}
            />
          </div>
        </div>
      </Carousel>
    </BaseModal>
  )
}
