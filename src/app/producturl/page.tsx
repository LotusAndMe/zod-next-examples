'use client'

import { useSearchParams } from "next/navigation"
import { z } from "zod"

const searchParamsSchema = z.object({
    id: z.coerce.number(),
    color:z.enum(["red","green","blue"]),
})

export default function Product() {
    const searchParams = useSearchParams()

    const searchParamsObj = Object.fromEntries(searchParams)

    const validatedSearchParams = searchParamsSchema.safeParse(searchParamsObj)

    if (!validatedSearchParams.success) {
        console.log('error')
        return
    }

    console.log(validatedSearchParams.data.id.toFixed())

    return <div className="flex flex-col items-center justify-between p-24">
        <h1>Product</h1>

        <h2>id must be number, colors: green,red,blue</h2>
        {validatedSearchParams.success && (<div>
        <p>Id: {validatedSearchParams.data.id}</p>
        <p>Color: {validatedSearchParams.data.color}</p>
            
        </div>)}
    </div>
}