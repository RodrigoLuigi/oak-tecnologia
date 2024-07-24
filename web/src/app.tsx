import { Plus } from 'lucide-react'
import { Brand } from './components/brand'
import { Header } from './components/header'

export function App() {
  return (
    <div className="w-full h-screen grid grid-cols-layout grid-rows-layout grid-areas-layout">
      <Header />

      <Brand />

      <div className="grid-in-menu bg-[#20272A] relative ">
        <img src="../public/bg-detail.png" alt="" className="absolute h-full" />

        <div className="px-10 pt-16 space-y-6 relative">
          <h2 className="text-xl font-medium">Filtrar por:</h2>
          <div className="space-y-6 text-lg font-medium">
            <div className="flex items-center gap-2.5">
              <input type="checkbox" name="all" id="all" />
              <label htmlFor="all">Todos</label>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" name="lowest-price" id="lowest-price" />
              <label htmlFor="all">Menor preço</label>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" name="biggest-price" id="biggest-price" />
              <label htmlFor="all">Maior preço</label>
            </div>
          </div>
        </div>
      </div>

      <button className="grid-in-newProduct bg-[#1C8894] flex items-center justify-center gap-2.5 hover:bg-[#1c8894cc] text-zinc-50">
        <Plus className="size-8 text-[#32ee32]" />
        NOVO PRODUTO
      </button>
    </div>
  )
}
