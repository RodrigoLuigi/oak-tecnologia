import { useNavigate } from 'react-router-dom'
import { Brand } from '../../components/brand'
import { Header } from '../../components/header'

export function Details() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/')
  }
  return (
    <div className="w-full h-screen grid grid-cols-layout grid-rows-layout grid-areas-layout">
      <Brand />

      <Header />

      <div className="grid-in-content">NEW PRODUCT</div>
      <button onClick={handleNavigate}>xx</button>
    </div>
  )
}
