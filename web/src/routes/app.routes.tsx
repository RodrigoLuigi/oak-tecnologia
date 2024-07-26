import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NewProduct } from '../pages/NewProduct'
import { Details } from '../pages/Details'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newproduct" element={<NewProduct />} />
      <Route path="/products/:id" element={<Details />} />
    </Routes>
  )
}
