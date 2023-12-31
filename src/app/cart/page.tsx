'use client'
import React, { useState } from 'react'
import { z } from 'zod'


const cartSchema = z.array(z.object({
    id: z.number(),
    quantity: z.number().int().positive(),
}))

type TcartSchema = z.infer<typeof cartSchema>



function Cart() {

    const [cart, setCart] = useState<TcartSchema>([])
    const [errorsMsg,setErrorsMsg]=useState('')

    function getData() {
        try {
            setErrorsMsg('')
            setCart([])
        // const cart: unknown = JSON.parse(localStorage.getItem('cart') || '[]')
        const data: unknown = JSON.parse(localStorage.getItem('cart') || '')
    
               console.log(cart)
        const validatedCard = cartSchema.safeParse(data)

        if (!validatedCard.success) {
            localStorage.removeItem('cart')
            console.log('Bad data removed succ')
            return
        }

        setCart(validatedCard.data)
        console.log('Get data copied from cookies succesfull')
 
    } catch (error: any) {
               console.log(error.message)
               setErrorsMsg(error.message)
    }
}
    function saveData() {
        const data:TcartSchema= [
            {
                id: 23,
                quantity:31
            },
            {
                id: 25,
                quantity:40
            }
        ]
        setCart([])
           try {
               localStorage.setItem('cart', JSON.stringify(data))
               console.log('Success save')
     
    } catch (error: any) {
               console.log(error.message)  
    }
    }
    
    function saveBadData() {
         const data= [
            {
                name: 'John',
                quantity:31
            },
            {
                name: "Piter",
                quantity:40
            }
        ]
         try {
               localStorage.setItem('cart', JSON.stringify(data))
               console.log('Success save')
     
    } catch (error: any) {
        console.log(error.message)
    }
    }
  
  return (
       <div className="flex min-h-screen flex-col items-center justify-between p-24">

            <div  className="flex flex-col gap-y-2">
   <h1>After get bad data from local storage it will be removed automatically</h1>
                <button
                  type="button"
                  onClick={()=>getData()}
                    className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
                >Get data from storage</button>
                <button
                  type="button"
                  onClick={()=>saveData()}
                    className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
                >Save normal data</button>
                <button
                  type="button"
                  onClick={()=>saveBadData()}
                    className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
                >Save bad data</button>
          </div>
          <div className="flex flex-col gap-y-2">
              {errorsMsg != '' &&<p className='text-red-500'>{errorsMsg}</p>}
              
              
              {cart.map(cartItem => (
                  <div>
                      <div>
                          <p>ID: { cartItem.id}</p>
                      </div>
                      <div>
                          <p>Quantity: { cartItem.quantity}</p>
                      </div>
            </div>
        ))}
                
          </div>

        </div>
  )
}

export default Cart