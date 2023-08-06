import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Slider from '../components/Slider'
import Categories from '../components/categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <NavigationBar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </>
  )
}
