import { localized } from '../../lib/localize'
import { Cell } from '../grid/Cell'

export const SequencesInfo = () => {
  return (
    <>
      <p className="text-sm text-gray-300">
        {localized['app.infomodal.sequencesinfo']}
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell isRevealing={true} isCompleted={true} status="absent" value={1} />
        <Cell isRevealing={true} isCompleted={true} status="absent" value={4} />
        <Cell isRevealing={true} isCompleted={true} status="absent" value={9} />
      </div>
      <p className="text-sm text-gray-300">
        {localized['app.infomodal.perfectsquarenumbers']}
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell isRevealing={true} isCompleted={true} status="absent" value={2} />
        <Cell isRevealing={true} isCompleted={true} status="absent" value={3} />
        <Cell isRevealing={true} isCompleted={true} status="absent" value={5} />
        <Cell isRevealing={true} isCompleted={true} status="absent" value={7} />
      </div>
      <p className="text-sm text-gray-300">
        {localized['app.infomodal.primenumbers']}
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell isRevealing={true} isCompleted={true} status="absent" value={1} />
        <Cell isRevealing={true} isCompleted={true} status="absent" value={2} />
        <Cell isRevealing={true} isCompleted={true} status="absent" value={6} />
      </div>
      <p className="text-sm text-gray-300">
        {localized['app.infomodal.factorialnumbers']}
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell isRevealing={true} isCompleted={true} status="absent" value={1} />
        <Cell isRevealing={true} isCompleted={true} status="absent" value={2} />
        <Cell isRevealing={true} isCompleted={true} status="absent" value={3} />
        <Cell isRevealing={true} isCompleted={true} status="absent" value={5} />
        <Cell isRevealing={true} isCompleted={true} status="absent" value={8} />
      </div>
      <p className="text-sm text-gray-300">
        {localized['app.infomodal.fibonaccinumbers']}
      </p>
    </>
  )
}
