import { Github, Instagram, Linkedin } from 'lucide-react'

export function Header() {
  return (
    <header className="flex flex-col justify-end gap-2 items-center bg-customDark grid-in-header p-6 border-b border-solid border-customGreen lg:items-center lg:flex-row lg:p-0 lg:px-24">
      <div className="flex justify-center gap-4 lg:flex-1">
        <a
          href="https://www.instagram.com/lrodrigo_luigi/"
          className="size-9 lg:size-12 bg-[#18181B] rounded-md flex items-center justify-center text-[#47B368] hover:text-[#6bfa98]"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram className="size-6 lg:size-8" />
        </a>

        <a
          href="https://www.linkedin.com/in/rodrigo-luigi/"
          className="size-9 lg:size-12 bg-[#18181B] rounded-md flex items-center justify-center text-[#47B368] hover:text-[#6bfa98]"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="size-6 lg:size-8" />
        </a>

        <a
          href="https://github.com/RodrigoLuigi"
          className="size-9 lg:size-12 bg-[#18181B] rounded-md flex items-center justify-center text-[#47B368] hover:text-[#6bfa98]"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="size-6 lg:size-8" />
        </a>
      </div>

      <span className="bg-oak-gradient bg-clip-text text-transparent text-xs text-clip lg:text-base">
        Developed by: <br className="hidden lg:block" /> Rodrigo Luigi
      </span>
    </header>
  )
}
