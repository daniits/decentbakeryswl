import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const {pathname} = useLocation()
  return (
    <div>
      <div className="bg-[url('/images/image/breadcrumbsBg.webp')] bg-cover bg-center sm:h-[35vh] lg:h-[50vh] flex items-center">
          <div className="p-10">
            <h1 className="text-5xl font-playfair font-bold">About Us</h1>
              <h3 className="font-semibold text-lg">Home <span className="text-pink">// {pathname === "/about" ? "About Us" : "" }</span></h3>
          </div>
        </div>
    </div>
  )
}

export default Header
