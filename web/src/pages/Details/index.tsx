import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { AxiosError } from 'axios'
import { api } from '../../services/api'
import bgDetail from '../../assets/bg-detail.png'
import { Brand } from '../../components/brand'
import { Header } from '../../components/header'

interface ProductProps {
  id: number
  name: string
  description: string
  price: number
  available: boolean
}

export function Details() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [productData, setProductData] = useState<ProductProps | null>(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true)
      try {
        const response = await api.get(`/products/${id}`)
        const data = {
          ...response.data,
          available: response.data.available === '1',
        }
        setProductData(data)
      } catch (error) {
        if (error instanceof AxiosError) {
          alert(error.response?.data.message)
        } else {
          alert('Não foi possível carregar os dados do produto.')
        }
      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      }
    }

    fetchProduct()
  }, [id])

  return (
    <div className="w-full h-screen grid grid-cols-layout grid-rows-layout2 grid-areas-layout2">
      <Brand />

      <Header />

      <div className="grid-in-content  relative">
        <img src={bgDetail} alt="" className="absolute h-full" />
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-t-transparent border-solid rounded-full animate-spin border-customGreen" />
          </div>
        ) : (
          <div className="flex flex-col gap-16 py-16  max-w-[550px] mx-auto">
            <button
              onClick={handleBack}
              className="self-end flex gap-1 text-customGreen hover:text-green-300 hover:gap-2 transition-all duration-300"
            >
              <ArrowLeft /> Voltar
            </button>

            <div className="space-y-6">
              <h2 className="text-4xl">{productData?.name}</h2>
              <div className="h-px w-full bg-customGreen" />
              <p className="text-green-200">{productData?.description}</p>
              <div className="flex items-center justify-between">
                <span className="p-3 rounded-md bg-customDarker ring-1 ring-green-500 text-white font-bold text-sm">
                  R$ {productData?.price.toFixed(2).replace('.', ',')}
                </span>
                <strong
                  className={`${productData?.available ? 'text-[#26ff12]' : 'text-red-500'}`}
                >
                  {productData?.available ? 'Disponível' : 'Indisponível'}
                </strong>
              </div>
              <button className="w-full h-20 bg-green-600 rounded-xl text-xl font-medium transition hover:bg-green-500">
                Editar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
