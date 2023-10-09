'use client'
import React, { useEffect, useState } from 'react'
import { z } from 'zod'

// type Product = {
//     name: string,
//     price:number
// }

const productSchema = z.object({
    name: z.string(),
    price:z.number().positive(),
})

type Product = z.infer<typeof productSchema>

const getPriceFromProduct = (product:Product)=>product.price

export default function Products() {
    const [product, setProduct] = useState<Product>()
    
    useEffect(() => {
        fetch('/api/product')
            .then((res) => res.json())
            // .then((product:Product) => {
            .then((product:unknown) => {
                // console.log(product?.name?.toUpperCase())
                // if(typeof product.price=== 'number')
                // console.log(product?.price?.toFixed(2))
                
                // use Zod to validate the product
                const validatedProduct = productSchema.safeParse(product)

                if (!validatedProduct.success) {
                    console.log('Validate problems', validatedProduct.error)
                    return
                }
                console.log(validatedProduct.data.name.toUpperCase())
                console.log(validatedProduct.data.price.toFixed(2))
                setProduct(validatedProduct.data)
            })
        
    }, [])
    
  return (
       <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>Products</h1>
          <br />
          <p>Some fake product</p>
          <p>{product?.name}</p>
          <p>{product?.price} $</p>
          
    </div>
  )
}
