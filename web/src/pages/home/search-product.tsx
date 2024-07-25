import { Search } from 'lucide-react'

export function SearchProduct() {
  return (
    <div className="grid-in-search pt-16 px-24">
      <div className="flex items-center pl-4 rounded-lg bg-[#596a7466] ">
        <Search className="text-[#A1A1AA]" />
        <input
          type="text"
          placeholder="Pesquisar pelo nome do produto"
          className="w-full h-14 p-3 outline-none bg-transparent"
        />
      </div>
    </div>
  )
}
