import { Search } from 'lucide-react'

interface SearchProductInputProps {
  search: string
  setSearch: (search: string) => void
}

export function SearchProductInput({
  search,
  setSearch,
}: SearchProductInputProps) {
  return (
    <div className="flex items-center rounded-lg bg-customDarker relative">
      <Search className="text-green-400 absolute left-3" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar pelo nome do produto"
        className="w-full h-14 p-3 pl-12 rounded-lg outline-none bg-transparent border-none placeholder-gray-400 focus:ring-green-500 focus:ring-2"
      />
    </div>
  )
}
