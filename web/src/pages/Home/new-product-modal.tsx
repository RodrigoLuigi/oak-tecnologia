import { X } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import { NumericFormat } from 'react-number-format'
import { api } from '../../services/api'

interface NewProductModalProps {
  closeNewProductModal: () => void
}

export function NewProductModal({
  closeNewProductModal,
}: NewProductModalProps) {
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productAvailable, setProductAvailable] = useState(false)

  async function handleCreateNewProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newProduct = {
      name: productName,
      description: productDescription,
      price: Number(productPrice),
      available: productAvailable,
    }

    await api
      .post('/products', newProduct)
      .then(() => {
        alert('Produto cadastrado com sucesso!')
        window.location.reload()
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar')
        }
      })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      onClick={closeNewProductModal}
      className="absolute top-0 left-0 h-screen w-screen bg-[#00000079] flex items-center justify-center overflow-hidden"
    >
      <form
        onSubmit={handleCreateNewProduct}
        onClick={(e) => e.stopPropagation()}
        className="bg-customDarker md:rounded-lg shadow-lg w-screen h-screen md:w-[500px] md:h-auto flex flex-col justify-between animate-showScreen "
      >
        <div className="space-y-10 p-6 pt-14 md:p-6">
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

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
                    setProductAvailable(event.target.value === 'yes')
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
            className="hidden md:block w-full py-6 rounded-lg bg-green-600 text-xl font-medium transition hover:bg-green-500 uppercase"
          >
            Salvar
          </button>
        </div>
        <button
          type="submit"
          className="md:hidden w-full py-6 bg-green-600 text-xl font-medium transition hover:bg-green-500 uppercase"
        >
          Salvar
        </button>
      </form>
    </div>
  )
}
