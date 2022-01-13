import React from 'react';
import { Button } from '../../ButtonElements';
import './elements.css'
import carsbg from '../../../images/react.png'

const Left = () => {
    return (
        <>
        <div className="container">
        <div className="left-side">
            <span className="logo">fashion</span>
            <div className="sm-product">
                <h1 className="product-index">01</h1>
                <div className="sm-product-img-container">
                    <img src={carsbg} className="sm-product-img" alt="" />
                </div>
                <p className="sm-product-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia adipisci aspernatur</p>
            </div>
            <div className="logo">
                <h2>calasanz</h2>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Left
