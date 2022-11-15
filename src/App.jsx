import { useState } from 'react'
import RootLayout from './shared/layouts/RootLayout'
import ProductLayout from './shared/layouts/ProductLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Product from './pages/Product'
import AddProduct from './pages/AddProduct'
import NotFoundPage from './pages/NotFoundPage'
import { Route, Routes, Link } from 'react-router-dom'

function App() {

  return (
        <Routes>
          <Route element={<RootLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/About" element={<About/>}/>
          </Route>

          <Route element={<ProductLayout/>}>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/Products/edit" element={<AddProduct/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        
  )
}

export default App
