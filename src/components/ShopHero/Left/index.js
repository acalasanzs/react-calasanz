import React, { useEffect, useState } from 'react';
import { Button } from '../../ButtonElements';
import './elements.css'
import carsbg from '../../../images/section1.jpg'

const Left = () => {
    const [load,isLoad] = useState(false);
    useEffect(_=>{
        isLoad(true);
    });
    return (
        <>
        <div className={"left-side" + (load ? " active" : "")}>
            <span className="logo">need for <br/><strong>speed</strong></span>
            <div className="sm-product">
                <h1 className="product-index">01</h1>
                <div className="sm-product-img-container">
                    <img src={carsbg} className="sm-product-img" alt="" />
                </div>
                <p className="sm-product-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia adipisci aspernatur</p>
            </div>
            <div className="logob">
                <h2>calasanz</h2>
            </div>
        </div>
        
        </>
    )
}
export default Left
