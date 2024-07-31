import { X } from 'lucide-react'
import type { FormEvent } from 'react'
import { NumericFormat } from 'react-number-format'

interface NewProductModalProps {
  closeNewProductModal: () => void
  setProductName: (name: string) => void
  setProductDescription: (description: string) => void
  setProductPrice: (price: string) => void
  setProductAvaliable: (avaliable: boolean) => void
  handleCreateNewProduct: (event: FormEvent<HTMLFormElement>) => void
}

export function NewProductModal({
  closeNewProductModal,
  setProductName,
  setProductDescription,
  setProductPrice,
  setProductAvaliable,
  handleCreateNewProduct,
}: NewProductModalProps) {
  return (
    <div
      onClick={closeNewProductModal}
      className="absolute top-0 left-0 h-screen w-screen bg-[#00000079] flex items-center justify-center"
    >
      <form
        onSubmit={handleCreateNewProduct}
        onClick={(e) => e.stopPropagation()}
        className="bg-customDarker p-6 rounded-lg shadow-lg w-[500px] space-y-8"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Novo Produto</h2>

            <button
              type="button"
              onClick={closeNewProductModal}
              className="self-start cursor-pointer"
            >
              <X className="size-5 text-zinc-400 transition hover:text-zinc-300" />
            </button>
          </div>

          <div className="h-px w-full bg-[#47B368]" />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-2 text-zinc-300" htmlFor="name">
              Nome
            </label>
            <input
              className="w-full p-2 rounded-lg bg-customDark text-white focus:ring-green-500 focus:ring-2 focus:border-transparent"
              type="text"
              id="name"
              name="name"
              onChange={(event) => setProductName(event.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-zinc-300" htmlFor="description">
              Descrição
            </label>
            <textarea
              className="w-full h-28 p-2 rounded-lg bg-customDark text-white resize-none focus:ring-green-500 focus:ring-2 focus:border-transparent"
              id="description"
              name="description"
              onChange={(event) => setProductDescription(event.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="block mb-2 text-zinc-300" htmlFor="price">
                Preço
              </label>
              <NumericFormat
                className="w-full p-2 rounded-lg bg-customDark text-white outline-none focus:ring-green-500 focus:ring-2 focus:border-transparent"
                id="price"
                onValueChange={(values) => setProductPrice(values.value)}
                allowLeadingZeros={false}
                allowNegative={false}
                decimalScale={2}
                fixedDecimalScale={true}
                thousandSeparator="."
                decimalSeparator=","
                allowedDecimalSeparators={['.']}
                prefix="R$ "
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-zinc-300" htmlFor="available">
                Disponível para vendas
              </label>
              <select
                className="w-full p-2 rounded-lg bg-customDark text-white focus:ring-green-500 focus:ring-2 focus:border-transparent"
                id="available"
                name="available"
                onChange={(event) =>
                  setProductAvaliable(event.target.value === 'yes')
                }
                required
              >
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-green-600 rounded-xl text-xl font-medium transition hover:bg-green-500"
        >
          Salvar
        </button>
      </form>
    </div>
  )
}
