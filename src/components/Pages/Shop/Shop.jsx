import React from 'react'
import Header from '../../Shared/Header/Header'
import Layout from '../../Layout/Layout'
import Items from './Sections/Items'
import SidePanel from './Sections/SidePanel'

const Shop = () => {
  return (
    <>
      <Header pageName="Shop" path="shop" />
      <div className="flex lg:flex-row sm:flex-col-reverse gap-5 sm:px-5 md:px-10 lg:px-32 py-20">
        <SidePanel/>
        <Items />
      </div>
    </>
  )
}

export default Shop
