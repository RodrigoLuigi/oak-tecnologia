import { Brand } from '../../components/brand'
import { Header } from '../../components/header'

export function Details() {
  return (
    <div className="w-full h-screen grid grid-cols-layout grid-rows-layout grid-areas-layout">
      <Brand />

      <Header />

      <h1>PRODUCT DETAILS</h1>
    </div>
  )
}
