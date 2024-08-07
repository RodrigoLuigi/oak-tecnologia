import { Plus } from 'lucide-react'

export function NewProductButton({ ...rest }) {
  return (
    <button
      className="grid-in-newProduct py-6 bg-green-600 text-xl font-medium flex items-center justify-center gap-2.5  transition  hover:bg-green-500 disabled:brightness-50 disabled:hover:bg-green-600  disabled:hover:text-zinc-50 disabled:active:scale-100"
      {...rest}
    >
      <Plus className="size-8" />
      NOVO PRODUTO
    </button>
  )
}
