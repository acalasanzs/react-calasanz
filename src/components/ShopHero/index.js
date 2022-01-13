import React from 'react';
import { Button } from '../ButtonElements';
import './Left/elements.css'

const ShopHero = () => {
    return (
        <>
        <div class="right-side">
            <img src="img/img1.jpg" class="backdrop-img" alt=""/>
            <div class="content">
                <div class="product-detail">
                    <h1 class="product-name">yellow tracksuit</h1>
                    <p class="product-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt assumenda doloribus, fugiat provident nemo.</p>
                    <a href="#" class="buy-btn">buy now</a>
                    <button class="nxt-btn"><img src="img/arrow.png" alt=""/></button>
                </div>
                <div class="product-img-container">
                    <img src="img/img1.jpg" class="product-img" alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}
export default ShopHero
