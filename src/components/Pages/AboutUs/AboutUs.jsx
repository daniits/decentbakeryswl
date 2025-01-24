import React from 'react'
import Layout from '../../Layout/Layout'
import VideoSection from './Sections/VideoSection'
import Partners from '../Home/Sections/Partners/Partners'
import Team from './Sections/Team'
import Testimonial from './Sections/Testimonial'
import Category2 from './Sections/Category2'
import Header from '../../Shared/Header/Header'

const AboutUs = () => {


  return (
    <t>
      <Header pageName="About Us" path="about" />
      <div className="bg-[#f9f9f9] sm:px-5 md:px-20 lg:px-32 py-20 flex flex-col gap-32">
        <VideoSection />
        <div className="flex flex-col sm:gap-10 lg:gap-32">
          <Partners />
          <Team />
        </div>
      </div>
      <Testimonial/>
      <Category2/>
    </t>
  )
}

export default AboutUs
