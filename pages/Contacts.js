import Newcloths from '@/components/Newcloths'
import React from 'react'
import style from '@/styles/Contacts.module.css'
import Footer2 from './Footer2'
import Navbar from '@/components/Navbar'

export default function Contacts() {
  return (
    <>
    <Navbar/>
    <div className={style.Contactsbox}>
       Contacts
    </div>
    <div class={style.form}>
    <div class={style.formbox}>
        <input className={style.input} type="text" placeholder="Enter Your Full Name" />
        <input  className={style.input} type="email" placeholder="Enter Your Email Address" />
        <input  className={style.input} type="text" placeholder="Enter Subject" />
        <textarea  className={style.input} placeholder="Enter Your Message"></textarea>
        <button className={style.button} type="submit">Submit</button>
    </div>
</div>
    <Newcloths/>
    <Footer2/>
    </>
  )
}
