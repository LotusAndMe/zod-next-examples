import { z } from 'zod'

export const productSchema = z.object({
    name: z.string(),
    price:z.number().positive(),
})

export type Product = z.infer<typeof productSchema>
