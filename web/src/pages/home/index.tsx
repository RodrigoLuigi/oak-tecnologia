import { useEffect, useState } from 'react'
import { Brand } from '../../components/brand'
import { Header } from '../../components/header'
import { ProductListContent } from './components/product-list-content'
import { NewProductButton } from './components/new-product-button'
import {
  FilterOptionsMenu,
  type FilterOptionsProps,
} from './components/filter-options-menu'
import { SearchProductInput } from './components/search-product-input'

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

  const [products] = useState<ProductProps[]>([
    {
      id: 1,
      name: 'POCOPHONE F1',
      description:
        'Este modelo é para quem busca desempenho de aparelho top de linha, mas sem ter que pagar uma fortuna. Mas não é por isso que ele vai decepcionar e entregar uma qualidade de construção ruim.',
      price: 1398.99,
    },
    {
      id: 2,
      name: 'SAMSUNG A20',
      description:
        'O Samsung Galaxy A20 é um smartphone Android completo, que não tem muito a invejar aos mais avançados dispositivos. Surpreendente é sua tela Touchscreen de 6.4 polegadas, que coloca esse Samsung no topo de sua categoria. ',
      price: 1998.99,
    },
    {
      id: 3,
      name: 'APPLE IPHONE15',
      description:
        'O Apple iPhone 15 é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos.',
      price: 498.99,
    },
    {
      id: 4,
      name: 'HUAWEI P30 ',
      description:
        'O Huawei P30 é um smartphone Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.1 polegadas com uma resolução de 2340x1080 pixels.',
      price: 2498.99,
    },
    {
      id: 5,
      name: 'POCOPHONE F1',
      description:
        'Este modelo é para quem busca desempenho de aparelho top de linha, mas sem ter que pagar uma fortuna. Mas não é por isso que ele vai decepcionar e entregar uma qualidade de construção ruim.',
      price: 3498.99,
    },
    {
      id: 6,
      name: 'SAMSUNG A20',
      description:
        'O Samsung Galaxy A20 é um smartphone Android completo, que não tem muito a invejar aos mais avançados dispositivos. Surpreendente é sua tela Touchscreen de 6.4 polegadas, que coloca esse Samsung no topo de sua categoria. ',
      price: 98.99,
    },
    {
      id: 7,
      name: 'APPLE IPHONE15',
      description:
        'O Apple iPhone 15 é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos.',
      price: 498.99,
    },
    {
      id: 8,
      name: 'HUAWEI P30 ',
      description:
        'O Huawei P30 é um smartphone Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.1 polegadas com uma resolução de 2340x1080 pixels.',
      price: 1498.99,
    },
    {
      id: 9,
      name: 'POCOPHONE F1',
      description:
        'Este modelo é para quem busca desempenho de aparelho top de linha, mas sem ter que pagar uma fortuna. Mas não é por isso que ele vai decepcionar e entregar uma qualidade de construção ruim.',
      price: 1498.99,
    },
    {
      id: 10,
      name: 'SAMSUNG A20',
      description:
        'O Samsung Galaxy A20 é um smartphone Android completo, que não tem muito a invejar aos mais avançados dispositivos. Surpreendente é sua tela Touchscreen de 6.4 polegadas, que coloca esse Samsung no topo de sua categoria. ',
      price: 1498.99,
    },
    {
      id: 11,
      name: 'APPLE IPHONE15',
      description:
        'O Apple iPhone 15 é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos.',
      price: 1498.99,
    },
    {
      id: 12,
      name: 'HUAWEI P30 ',
      description:
        'O Huawei P30 é um smartphone Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.1 polegadas com uma resolução de 2340x1080 pixels.',
      price: 1498.99,
    },
  ])

  const [filteredProducts, setFilteredProducts] =
    useState<ProductProps[]>(products)

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

  return (
    <div className="w-full h-screen grid grid-cols-layout grid-rows-layout grid-areas-layout">
      <Brand />

      <Header />

      <aside className="grid-in-menu bg-[#20272A] relative ">
        <img src="../public/bg-detail.png" alt="" className="absolute h-full" />

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
