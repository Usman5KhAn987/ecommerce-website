// components/Email.js
import React from 'react';
import Style from '@/styles/Email.module.css';

export default function Email() {
    return (
        <div className={Style.maincontainer}>
            <div className={Style.heading}>
                <h3 className={Style.h3}>Subscribe To Get Discount Offers</h3>
            </div>
            <div className={Style.para}>
                <p className={Style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <input type="email" placeholder="Enter your email" className={Style.input} />
            <div>  
                <button className={Style.button}>SUBSCRIBE</button>
            </div>
        </div>
    );
}
