import React from 'react';
import { Button } from '../ButtonElements';
import './Left/elements.css'
import image from '../../images/shop.jpg'

const ShopHero = () => {
    return (
        <>
        <div class="right-side">
            <img src={image} class="backdrop-img" alt=""/>
            <div class="content">
                <div class="product-detail">
                    <h1 class="product-name">Cotxes a demanda</h1>
                    <p class="product-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt assumenda doloribus, fugiat provident nemo.</p>
                    <Button style={{maxWidth: "50%"}}>Comprar</Button>
                </div>
                <div class="product-img-container">
                    <img src={image} class="product-img" alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}
export default ShopHero
