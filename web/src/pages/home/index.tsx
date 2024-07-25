import { Brand } from '../../components/brand'
import { Header } from '../../components/header'
import { FiltersMenu } from './filters-menu'
import { SearchProduct } from './search-product'
import { ProductContentList } from './product-content-list'
import { NewProductButton } from './new-product-button'

export function Home() {
  return (
    <div className="w-full h-screen grid grid-cols-layout grid-rows-layout grid-areas-layout">
      <Brand />

      <Header />

      <FiltersMenu />

      <SearchProduct />

      <ProductContentList />

      <NewProductButton />
    </div>
  )
}
