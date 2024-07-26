import { Search } from 'lucide-react'

export function SearchProductInput() {
  return (
    <div className="flex items-center pl-4 rounded-lg bg-[#596a7466] gap-3">
      <Search className="text-[#A1A1AA]" />
      <input
        type="text"
        placeholder="Pesquisar pelo nome do produto"
        className="w-full h-14 p-3 rounded-lg outline-none bg-transparent border-none focus:ring-green-500 focus:ring-2"
      />
    </div>
  )
}
