import React from 'react'
import { data } from 'react-router-dom'

const Testimonial = () => {

    const testimonial = [
        {
            img: "/images/image/testimonial.webp",
            name: "Brock Lesnar",
            role: "Customer",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicingl elit, sed do eiusmod tempor incididunt ut laboredolor magna aliqua. Ut enim ad minim veniam, quis nostru exercitation ullamco laboris"
        },
    ]

    return (
        <div className="bg-[url('/images/image/testimonialBg.webp')] bg-cover bg-center sm:h-[85vh] lg:h-[70vh] flex items-center justify-center">
        <div className="sm:w-full lg:w-[60vw] flex flex-col ">
          {testimonial.map((data, i) => (
            <div key={i} className="flex sm:flex-col lg:flex-row items-center justify-center gap-10 mx-auto sm:text-center lg:text-start">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <img src={data.img} alt="" className=" sm:w-[70%] lg:w-full h-auto  object-cover" />
              </div>
              {/* Text Section */}
              <div className="sm:w-[80%] lg:w-[50%] flex flex-col gap-4">
                <div>
                <h3 className="text-3xl font-medium font-playfair">{data.name}</h3>
                <h3 className="text-lg mt-[-5px] font-playfair text-gray-700">{data.role}</h3>
                </div>
                <p className="text-gray-700 font-playfair italic">{data.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    )
}

export default Testimonial
