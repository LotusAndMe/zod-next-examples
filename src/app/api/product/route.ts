import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const product = {
        id: 1,
        name: 'Cool jeans',
        price:100
    }

    return NextResponse.json(product)
}

