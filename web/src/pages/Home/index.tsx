import { useEffect, useState, type FormEvent } from 'react'
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
import { api } from '../../services/api'

interface ProductProps {
  id: number
  name: string
  description: string
  price: number
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [search, setSearch] = useState('')
  const [filterSelectedValue, setFilterSelectedValue] =
    useState<FilterOptionsProps>({
      all: true,
      'lowest-price': false,
      'biggest-price': false,
    })
  const [filteredProducts, setFilteredProducts] =
    useState<ProductProps[]>(products)

  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false)
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productAvaliable, setProductAvaliable] = useState<boolean>(false)

  function openNewProductModal() {
    setIsNewProductModalOpen(true)
  }

  function closeNewProductModal() {
    setIsNewProductModalOpen(false)
  }

  function handleCreateNewProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log({
      productName,
      productDescription,
      productPrice: Number(productPrice),
      productAvaliable,
    })
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
      try {
        const response = await api.get(`/products?name=${search}`)
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [search])

  return (
    <>
      <div
        className={`w-full h-screen grid grid-cols-layout grid-rows-layout grid-areas-layout transition ease-linear duration-200 ${isNewProductModalOpen ? 'blur-sm' : ''}`}
      >
        <Brand />

        <Header />

        <aside className="grid-in-menu bg-[#20272A] relative ">
          <img src={bgDetail} alt="" className="absolute h-full" />

          <FilterOptionsMenu
            filterSelectedValue={filterSelectedValue}
            setFilterSelectedValue={setFilterSelectedValue}
          />
        </aside>

        <div className="grid-in-search pt-16 px-24">
          <SearchProductInput setSearch={setSearch} />
        </div>

        <div className="grid-in-content px-24 pt-4 space-y-6 ">
          <div className="space-y-4">
            <h2 className="text-xl">Produtos</h2>
            <div className="h-px w-full bg-[#47B368]" />
          </div>

          <div className="h-max-content overflow-y-scroll scrollbar-thin scrollbar-thin-rounded-full scrollbar-thumb-[#47b368] scrollbar-track-[#20272A] pr-4">
            <ProductListContent products={filteredProducts} />
          </div>
        </div>

        <NewProductButton onClick={openNewProductModal} />
      </div>

      {isNewProductModalOpen && (
        <NewProductModal
          closeNewProductModal={closeNewProductModal}
          setProductName={setProductName}
          setProductDescription={setProductDescription}
          setProductPrice={setProductPrice}
          setProductAvaliable={setProductAvaliable}
          handleCreateNewProduct={handleCreateNewProduct}
        />
      )}
    </>
  )
}
