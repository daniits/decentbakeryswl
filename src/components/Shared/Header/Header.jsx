import React, { useState } from 'react'

const Header = ({ pageName, path }) => {
    
  return (
    <div className="bg-[url('/images/image/breadcrumbsBg.webp')] bg-cover bg-center sm:h-[35vh] lg:h-[50vh] flex items-center">
      <div className="p-10">
        <h1 className="text-5xl font-playfair font-bold">{pageName}</h1>
        <h3 className={`font-semibold text-lg ${path === "false" ? "hidden" : "block"} ${path === "singleProduct" ? "hidden" : "block" }`}>Home <span className="text-pink">// {path === "shop" ? "Shop" : path === "about" ? "About Us" : path === "contact" ? "Contact Us" : ""  }</span></h3>
      </div>
    </div>
  )
}

export default Header
