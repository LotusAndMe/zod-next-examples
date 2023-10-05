'use client'
import React, { useEffect } from 'react'

// type Product = {
//     name: string,
//     price:number
// }



export default function Products () {
    useEffect(() => {
        fetch('/api/product')
            .then((res) => res.json())
            // .then((product:Product) => {
            .then((product) => {
                // console.log(product?.name?.toUpperCase())
                // if(typeof product.price=== 'number')
                // console.log(product?.price?.toFixed(2))
                
                // use Zod to validate the product
        })
        
    }, [])
    
  return (
    <div>Products</div>
  )
}
