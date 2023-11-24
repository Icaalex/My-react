import '../App.css' 
import { useState } from 'react'
import { ShopifyNav } from '../components/ShopifyNav'
import { PaintSection } from '../components/ShopifyPaint'
import { ShopifyFooter } from '../components/ShopifyFooter'


export const Shopify = () => {
    return(
        <>
          <ShopifyNav/>
          <PaintSection/>
          <ShopifyFooter/>

        </>
    )
}