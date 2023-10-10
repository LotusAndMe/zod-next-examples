import { NextResponse } from "next/server"
import path from "path"
import {promises as fs} from 'fs'
import { productSchema } from "@/lib/schema/productschema"

// First example static const

// export async function GET(request: Request) {
//     const product = {
//         id: 1,
//         name: 'Cool jeans',
//         price:100
//     }

//     return NextResponse.json(product)
// }


// Second example (json validation)

export async function GET(request: Request) {
    const jsonDir = path.join(process.cwd(),"/src/data/")
    const fileContents = await fs.readFile(jsonDir + "/products.json", "utf8")
    const fileContentsObj = await JSON.parse(fileContents)
    const parsedProduct = productSchema.safeParse(fileContentsObj)

    console.log(parsedProduct)

    if (!parsedProduct.success) {
        return NextResponse.json(parsedProduct.error, {
            status:422
        })
    }

    return NextResponse.json(parsedProduct)
}

