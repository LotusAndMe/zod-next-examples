import React from 'react'
import { z } from 'zod'

const cartSchema = z.array(z.object({
    id: z.number(),
    quantity: z.number().int().positive(),
}))

function Cart() {
    const cart: unknown = JSON.parse(localStorage.getItem('cart') || '[]')
    
    const validatedCard = cartSchema.safeParse(cart)

    if (!validatedCard.success) {
        localStorage.removeItem('cart')
        return
    }

    console.log(validatedCard.data.map(item=>item.id))


  
  return (
      <div>Cart</div>
  )
}

export default Cart