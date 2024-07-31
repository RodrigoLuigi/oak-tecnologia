import { Plus } from 'lucide-react'

export function NewProductButton({ ...rest }) {
  return (
    <button
      className="grid-in-newProduct bg-green-400 text-green-800 flex items-center justify-center gap-2.5 font-bold transition hover:bg-green-500 hover:text-green-50"
      {...rest}
    >
      <Plus className="size-8" />
      NOVO PRODUTO
    </button>
  )
}
