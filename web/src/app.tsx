import { Plus, Search } from 'lucide-react'
import { Brand } from './components/brand'
import { Header } from './components/header'

export function App() {
  return (
    <div className="w-full h-screen grid grid-cols-layout grid-rows-layout grid-areas-layout">
      <Brand />

      <Header />

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
              <label htmlFor="lowest-price">Menor preço</label>
            </div>

            <div className="flex items-center gap-2.5">
              <input type="checkbox" name="biggest-price" id="biggest-price" />
              <label htmlFor="biggest-price">Maior preço</label>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-in-search pt-16 px-16">
        <div className="flex items-center pl-4 rounded-lg bg-[#596a7466] ">
          <Search className="text-[#A1A1AA]" />
          <input
            type="text"
            placeholder="Pesquisar pelo nome do produto"
            className="w-full h-14 p-3 outline-none bg-transparent"
          />
        </div>
      </div>

      <div className="grid-in-content px-16 pt-4 space-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl">Produtos</h2>
          <div className="h-px w-full bg-[#47B368]" />
        </div>

        <div className="h-max-content overflow-auto space-y-2.5">
          <div className="flex flex-col w-full p-6 gap-4 bg-[#596a7466] rounded-md">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">POCOPHONE F1</h2>
              <p className="max-h-24 text-[#A9A9A9] truncate">
                Este modelo é para quem busca desempenho de aparelho top de
                linha, mas sem ter que pagar uma fortuna. Mas não é por isso que
                ele vai decepcionar e entregar uma qualidade de construção ruim.
                Por fora, ele aparenta ser um aparelho simples, mas há também
                uma opção mais cara com traseira em Kevlar.
              </p>
            </div>

            <span className="flex items-center justify-center w-24 h-10 text-sm font-medium bg-[#47B368] rounded-md">
              R$1499,99
            </span>
          </div>

          <div className="flex flex-col w-full p-6 gap-4 bg-[#596a7466] rounded-md">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">POCOPHONE F1</h2>
              <p className="max-h-24 text-[#A9A9A9] text-ellipsis overflow-hidden line-clamp-2">
                Este modelo é para quem busca desempenho de aparelho top de
                linha, mas sem ter que pagar uma fortuna. Mas não é por isso que
                ele vai decepcionar e entregar uma qualidade de construção ruim.
                Por fora, ele aparenta ser um aparelho simples, mas há também
                uma opção mais cara com traseira em Kevlar.
              </p>
            </div>

            <span className="flex items-center justify-center w-24 h-10 text-sm font-medium bg-[#47B368] rounded-md">
              R$1499,99
            </span>
          </div>

          <div className="flex flex-col w-full p-6 gap-4 bg-[#596a7466] rounded-md">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">POCOPHONE F1</h2>
              <p className="max-h-24 text-[#A9A9A9] text-ellipsis overflow-hidden line-clamp-2">
                Este modelo é para quem busca desempenho de aparelho top de
                linha, mas sem ter que pagar uma fortuna. Mas não é por isso que
                ele vai decepcionar e entregar uma qualidade de construção ruim.
                Por fora, ele aparenta ser um aparelho simples, mas há também
                uma opção mais cara com traseira em Kevlar.
              </p>
            </div>

            <span className="flex items-center justify-center w-24 h-10 text-sm font-medium bg-[#47B368] rounded-md">
              R$1499,99
            </span>
          </div>

          <div className="flex flex-col w-full p-6 gap-4 bg-[#596a7466] rounded-md">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">POCOPHONE F1</h2>
              <p className="max-h-24 text-[#A9A9A9] text-ellipsis overflow-hidden line-clamp-2">
                Este modelo é para quem busca desempenho de aparelho top de
                linha, mas sem ter que pagar uma fortuna. Mas não é por isso que
                ele vai decepcionar e entregar uma qualidade de construção ruim.
                Por fora, ele aparenta ser um aparelho simples, mas há também
                uma opção mais cara com traseira em Kevlar.
              </p>
            </div>

            <span className="flex items-center justify-center w-24 h-10 text-sm font-medium bg-[#47B368] rounded-md">
              R$1499,99
            </span>
          </div>

          <div className="flex flex-col w-full p-6 gap-4 bg-[#596a7466] rounded-md">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">POCOPHONE F1</h2>
              <p className="max-h-24 text-[#A9A9A9] text-ellipsis overflow-hidden line-clamp-2">
                Este modelo é para quem busca desempenho de aparelho top de
                linha, mas sem ter que pagar uma fortuna. Mas não é por isso que
                ele vai decepcionar e entregar uma qualidade de construção ruim.
                Por fora, ele aparenta ser um aparelho simples, mas há também
                uma opção mais cara com traseira em Kevlar.
              </p>
            </div>

            <span className="flex items-center justify-center w-24 h-10 text-sm font-medium bg-[#47B368] rounded-md">
              R$1499,99
            </span>
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
