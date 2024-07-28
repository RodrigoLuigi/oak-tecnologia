import { useNavigate } from 'react-router-dom'
import { Brand } from '../../components/brand'
import { Header } from '../../components/header'
import { ArrowLeft } from 'lucide-react'

export function Details() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/')
  }
  return (
    <div className="w-full h-screen grid grid-cols-layout grid-rows-layout2 grid-areas-layout2">
      <Brand />

      <Header />

      <div className="grid-in-content  relative">
        <img src="/bg-detail.png" alt="" className="absolute h-full" />
        <div className="flex flex-col gap-16 py-16  max-w-[550px] mx-auto">
          <button
            onClick={handleNavigate}
            className="self-end flex gap-1 text-customGreen hover:text-green-300"
          >
            <ArrowLeft /> Voltar
          </button>

          <div className="space-y-6">
            <h2 className="text-4xl">POCOPHONE F1</h2>
            <div className="h-px w-full bg-customGreen" />
            <p className="text-green-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex items-center justify-between">
              <span className="p-3 bg-[#18181B] rounded-md font-bold text-sm text-green-500">
                R$1499,99
              </span>
              <strong className="flex gap-2.5 text-gray-500">
                Disponível para venda:{' '}
                <span className="flex items-center gap-1.5 text-[#26ff12]">
                  <div className="w-2 h-2 rounded-full bg-[#26ff12]" />
                  sim
                </span>{' '}
              </strong>
            </div>
            <button className="w-full h-20 bg-green-600 rounded-xl text-xl font-medium transition hover:bg-green-500">
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
