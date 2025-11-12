import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurante from './pages/Restaurantes'
import Product from './pages/Product'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Restaurante />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
