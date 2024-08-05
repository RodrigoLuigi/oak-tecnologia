import type { Dispatch, FormEvent, SetStateAction } from 'react'

export interface FilterOptionsProps {
  all: boolean
  'lowest-price': boolean
  'biggest-price': boolean
}

interface FilterOptionsMenuProps {
  filterSelectedValue: FilterOptionsProps
  setFilterSelectedValue: Dispatch<SetStateAction<FilterOptionsProps>>
}

export function FilterOptionsMenu({
  filterSelectedValue,
  setFilterSelectedValue,
}: FilterOptionsMenuProps) {
  function handleSelectedFilter(event: FormEvent<HTMLInputElement>) {
    const { name, checked } = event.currentTarget

    setFilterSelectedValue({
      all: name === 'all' ? checked : false,
      'lowest-price': name === 'lowest-price' ? checked : false,
      'biggest-price': name === 'biggest-price' ? checked : false,
    })
  }
  return (
    <div className="px-10 pt-16 space-y-6 relative">
      <h2 className="text-xl font-medium">Filtrar por:</h2>

      <div className="space-y-6 text-lg font-medium">
        <label className="flex items-center gap-2.5">
          <input
            type="checkbox"
            name="all"
            id="all"
            className="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 rounded focus:ring-green-400"
            checked={filterSelectedValue.all}
            onChange={handleSelectedFilter}
          />
          Todos
        </label>

        <label className="flex items-center gap-2.5">
          <input
            type="checkbox"
            name="lowest-price"
            id="lowest-price"
            className="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 rounded focus:ring-green-400"
            checked={filterSelectedValue['lowest-price']}
            onChange={handleSelectedFilter}
          />
          Menor Preço
        </label>

        <label className="flex items-center gap-2.5">
          <input
            type="checkbox"
            name="biggest-price"
            id="biggest-price"
            className="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 rounded focus:ring-green-400"
            checked={filterSelectedValue['biggest-price']}
            onChange={handleSelectedFilter}
          />
          Maior Preço
        </label>
      </div>
    </div>
  )
}
