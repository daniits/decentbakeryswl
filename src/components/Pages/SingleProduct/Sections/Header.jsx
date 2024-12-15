import React from 'react'

const Header = () => {
  return (
    <div className="bg-[url('/images/image/breadcrumbsBg.webp')] bg-cover bg-center sm:h-[35vh] lg:h-[50vh] flex items-center">
      <div className="p-10">
        <h1 className="text-5xl font-playfair font-bold">Single Product</h1>
        {/* <h3 className="font-semibold text-lg">Home <span className="text-pink">// {pathname === "/product/:productId" ? "Single Product" : ""}</span></h3> */}
      </div>
    </div>
  )
}

export default Header
