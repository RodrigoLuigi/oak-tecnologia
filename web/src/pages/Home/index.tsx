import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { AxiosError } from 'axios'
import bgDetail from '../../assets/bg-detail.png'
import { Brand } from '../../components/brand'
import { Header } from '../../components/header'
import { SearchProductInput } from './components/search-product-input'
import { ProductListContent } from './components/product-list-content'
import { NewProductButton } from './components/new-product-button'
import {
  FilterOptionsMenu,
  type FilterOptionsProps,
} from './components/filter-options-menu'
import { NewProductModal } from './new-product-modal'

interface ProductProps {
  id: number
  name: string
  description: string
  price: number
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false)

  const [filterSelectedValue, setFilterSelectedValue] =
    useState<FilterOptionsProps>({
      all: true,
      'lowest-price': false,
      'biggest-price': false,
    })

  const [filteredProducts, setFilteredProducts] =
    useState<ProductProps[]>(products)

  function openNewProductModal() {
    setIsNewProductModalOpen(true)
  }

  function closeNewProductModal() {
    setIsNewProductModalOpen(false)
  }

  useEffect(() => {
    function getFilteredProducts() {
      if (filterSelectedValue['lowest-price']) {
        return products.slice().sort((a, b) => a.price - b.price)
      } else if (filterSelectedValue['biggest-price']) {
        return products.slice().sort((a, b) => b.price - a.price)
      } else {
        return products
      }
    }

    setFilteredProducts(getFilteredProducts())
  }, [filterSelectedValue, products])

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true)
      try {
        const response = await api.get(`/products?name=${search}`)
        setProducts(response.data)
      } catch (error) {
        if (error instanceof AxiosError) {
          alert(error.response?.data.message)
        } else {
          alert('Não foi possível carregar os produtos.')
        }
      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      }
    }

    fetchProducts()
  }, [search])

  return (
    <>
      <div
        className={`w-full h-screen grid grid-cols-layout grid-rows-layout grid-areas-layout transition ${isNewProductModalOpen ? 'blur-sm' : ''}`}
      >
        <Brand />

        <Header />

        <aside className="grid-in-menu bg-customDarker relative ">
          <img src={bgDetail} alt="" className="absolute h-full" />

          <FilterOptionsMenu
            filterSelectedValue={filterSelectedValue}
            setFilterSelectedValue={setFilterSelectedValue}
          />
        </aside>

        <div className="grid-in-search pt-16 px-24">
          <SearchProductInput search={search} setSearch={setSearch} />
        </div>

        <div className="grid-in-content px-24 pt-4 space-y-6 ">
          <div className="space-y-4">
            <h2 className="text-xl">Produtos</h2>
            <div className="h-px w-full bg-customGreen" />
          </div>

          <div className="h-max-content overflow-y-scroll scrollbar-thin scrollbar-thin-rounded-full scrollbar-thumb-customGreen scrollbar-track-customDarker pr-4">
            {isLoading ? (
              <div className="h-full w-full flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-t-transparent border-solid rounded-full animate-spin border-customGreen" />
              </div>
            ) : (
              <ProductListContent products={filteredProducts} />
            )}
          </div>
        </div>

        <NewProductButton onClick={openNewProductModal} disabled={isLoading} />
      </div>

      {isNewProductModalOpen && (
        <NewProductModal closeNewProductModal={closeNewProductModal} />
      )}
    </>
  )
}
