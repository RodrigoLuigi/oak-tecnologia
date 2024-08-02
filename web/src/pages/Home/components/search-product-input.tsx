import { Search } from 'lucide-react'

interface SearchProductInputProps {
  setSearch: (search: string) => void
}

export function SearchProductInput({ setSearch }: SearchProductInputProps) {
  return (
    <div className="flex items-center pl-4 rounded-lg bg-[#596a7466] gap-3">
      <Search className="text-[#A1A1AA]" />
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar pelo nome do produto"
        className="w-full h-14 p-3 rounded-lg outline-none bg-transparent border-none focus:ring-green-500 focus:ring-2"
      />
    </div>
  )
}
