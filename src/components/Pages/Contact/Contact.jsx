import React from 'react'
import Layout from '../../Layout/Layout'
// import Header from './Sections/Header'
import ContactForm from './Sections/ContactForm'
import Header from '../../Shared/Header/Header'

const Contact = () => {
  return (
    <>
      <Header pageName="Contact Us" path="contact"/>
      <ContactForm/>
    </>
  )
}

export default Contact
