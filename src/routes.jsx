import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { QuemSomos } from './pages/QuemSomos'

export const Rotas = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/quemsomos'
          element={<QuemSomos/>}
        />
      </Routes>
    </BrowserRouter>
  )
}
