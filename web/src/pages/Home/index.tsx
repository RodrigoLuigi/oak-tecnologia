import { useEffect, useState } from 'react'
import { Brand } from '../../components/brand'
import { Header } from '../../components/header'
import { SearchProductInput } from './components/search-product-input'
import { ProductListContent } from './components/product-list-content'
import { NewProductButton } from './components/new-product-button'
import {
  FilterOptionsMenu,
  type FilterOptionsProps,
} from './components/filter-options-menu'

interface ProductProps {
  id: number
  name: string
  description: string
  price: number
}

export function Home() {
  const [filterSelectedValue, setFilterSelectedValue] =
    useState<FilterOptionsProps>({
      all: true,
      'lowest-price': false,
      'biggest-price': false,
    })

  const [products, setProducts] = useState<ProductProps[]>([])

  const [filteredProducts, setFilteredProducts] =
    useState<ProductProps[]>(products)

  function getFilteredProducts() {
    if (filterSelectedValue['lowest-price']) {
      return products.slice().sort((a, b) => a.price - b.price)
    } else if (filterSelectedValue['biggest-price']) {
      return products.slice().sort((a, b) => b.price - a.price)
    } else {
      return products
    }
  }

  useEffect(() => {
    setFilteredProducts(getFilteredProducts())
  }, [filterSelectedValue, products])

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error loading data:', error))
  }, [])

  return (
    <div className="w-full h-screen grid grid-cols-layout grid-rows-layout grid-areas-layout">
      <Brand />

      <Header />

      <aside className="grid-in-menu bg-[#20272A] relative ">
        <img src="bg-detail.png" alt="" className="absolute h-full" />

        <FilterOptionsMenu
          filterSelectedValue={filterSelectedValue}
          setFilterSelectedValue={setFilterSelectedValue}
        />
      </aside>

      <div className="grid-in-search pt-16 px-24">
        <SearchProductInput />
      </div>

      <div className="grid-in-content px-24 pt-4 space-y-6 ">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl">Produtos</h2>
          <div className="h-px w-full bg-[#47B368]" />
        </div>

        <div className="h-max-content overflow-y-scroll scrollbar-thin scrollbar-thin-rounded-full scrollbar-thumb-[#47b368] scrollbar-track-[#20272A] pr-4">
          <ProductListContent products={filteredProducts} />
        </div>
      </div>

      <NewProductButton />
    </div>
  )
}
