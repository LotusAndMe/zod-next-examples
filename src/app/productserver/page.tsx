import { z } from "zod"

const searchParamsSchema = z.object({
    id: z.coerce.number(),
    color:z.enum(["red","green","blue"])
})

export default function ServerProductPage({
    searchParams
}: {
    searchParams: {
        [key:string]:string | string[] | undefined
    }
    }) {
    
    const parsedSearchParams = searchParamsSchema.safeParse(searchParams)

    if (!parsedSearchParams.success) {
        return (
            <div className="flex flex-col items-center justify-between p-24">
                <h1 className="bg-red-500 text-white">Search params have error</h1>
                <p>{ String(parsedSearchParams.error) }</p>
            </div>
        )
    }
    
    return (
        <div className="flex flex-col items-center justify-between p-24">
            <h1>SSR Product url check example</h1>

            <p> Color: {parsedSearchParams.data.color}</p>
            <p> ID: {parsedSearchParams.data.id}</p>
            
        </div>
    )
}