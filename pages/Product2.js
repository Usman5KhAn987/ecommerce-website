import Products from '@/components/Products'
import React from 'react'
import Footer from './Footer2'
import Navbar from '@/components/Navbar'
import style from '@/styles/Contacts.module.css'
export default function Product2() {
  return (
    <>
    <div>
         <Navbar/>
    <div className={style.Contactsbox}>
    Product Grid
    </div>
      <Products/>
      <Footer/>
    </div>
    </>
  )
}
