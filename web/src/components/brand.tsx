import oakLogo from '../assets/oak-logo-invert.png'
import oakLogo2 from '../assets/oak-logo.png'

export function Brand() {
  return (
    <div className="grid-in-brand p-6 border-b border-customGreen md:p-0 md:py-2.5 md:flex md:items-center md:justify-center md:bg-oak-gradient">
      <img src={oakLogo2} alt="" className="w-34 h-full hidden md:block" />
      <img src={oakLogo} alt="" className="w-24 md:hidden" />
    </div>
  )
}
