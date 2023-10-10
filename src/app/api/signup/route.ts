import { signUpSchema } from "@/lib/types/type"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const body:unknown = await request.json()

    const result = signUpSchema.safeParse(body)
    let zodErrors = {}
    if (!result.success) {
        result.error.issues.forEach(issue => {
            zodErrors = {
                ...zodErrors, [issue.path[0]]:issue.message
            }
        })
    }
    return NextResponse.json(
        Object.keys(zodErrors).length > 0
            ? { errors: zodErrors }
            : {success:true}
    )

}

// one more example of response

// if(!parsedFrom.success){
//  return NextResponse.json(parsedForm.error, {
//     status:422,
// })