import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantePage from './pages/Restaurantes'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<RestaurantePage />} />
  </Routes>
)

export default AppRoutes
