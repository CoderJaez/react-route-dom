import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
const ProductLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default ProductLayout