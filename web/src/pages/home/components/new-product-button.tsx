import { Plus } from 'lucide-react'

export function NewProductButton() {
  return (
    <a
      href="#"
      className="grid-in-newProduct bg-green-600 flex items-center justify-center gap-2.5 font-bold transition hover:bg-green-400 hover:text-green-800"
    >
      <Plus className="size-8 text-green-800" />
      NOVO PRODUTO
    </a>
  )
}
