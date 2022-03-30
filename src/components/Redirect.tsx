import { GAME_TITLE, REDIRECT_URL } from '../constants/settings'
import { localized } from '../lib/localize'

export const Redirect = () => {
  return (
    <div className="redirect h-screen w-screen">
      <p className="text-xl ml-2.5 font-bold text-white">{GAME_TITLE}</p>

      <img className="object-contain" src="logo192.png" alt="logo" />

      <p className="mt-6 italic text-sm text-gray-300">
        {localized['app.redirect.newlocation']}{' '}
      </p>
      <p className="mt-6 italic text-sm text-gray-300">
        <a href={REDIRECT_URL} className="underline font-bold">
          {REDIRECT_URL}
        </a>{' '}
      </p>
      <p className="mt-6 italic text-sm text-gray-300">
        {localized['app.redirect.thankyou']}
      </p>
    </div>
  )
}
