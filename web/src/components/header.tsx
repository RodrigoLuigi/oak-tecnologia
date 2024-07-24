import { Github, Instagram, Linkedin } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center bg-[#1E2326] grid-in-header px-20 border-b border-solid border-[#47B368]">
      <div className="flex justify-center gap-4 flex-1">
        <a
          href="#"
          className="h-12 w-12 bg-[#18181B] rounded-md flex items-center justify-center text-[#47B368] hover:text-[#6bfa98]"
        >
          <Instagram className="size-8" />
        </a>

        <a
          href="#"
          className="h-12 w-12 bg-[#18181B] rounded-md flex items-center justify-center text-[#47B368] hover:text-[#6bfa98]"
        >
          <Linkedin className="size-8" />
        </a>

        <a
          href="#"
          className="h-12 w-12 bg-[#18181B] rounded-md flex items-center justify-center text-[#47B368] hover:text-[#6bfa98]"
        >
          <Github className="size-8" />
        </a>
      </div>

      <span className="text-[#A1A1AA]">
        Desenvolvido por: <br />
        Rodrigo Luigi
      </span>
    </header>
  )
}
