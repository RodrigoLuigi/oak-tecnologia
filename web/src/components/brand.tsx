import oakLogo from '../assets/oak-logo.png'

export function Brand() {
  return (
    <div className="grid-in-brand py-2.5 flex items-center justify-center bg-oak-gradient border-b border-[#47B368]">
      <img src={oakLogo} alt="" className="w-34 h-full" />
    </div>
  )
}
