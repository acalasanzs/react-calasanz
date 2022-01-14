import React from 'react'
import InfoSection from '../components/InfoSection'
import ShopHero from '../components/ShopHero'
import Left from '../components/ShopHero/Left'
import {ShopContainer} from './shopElements'

const Shop = () => {
    return (
        <>
        <ShopContainer>
            <Left />
            
            <ShopHero />
        </ShopContainer>
        </>
    )
}

export default Shop
