import { useQuery } from "@tanstack/react-query"

export const useProduct = (id: string) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
    const {data, isLoading, isError} = useQuery({
        queryKey: ['get-product'],
        queryFn: async () => {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: `
                        query Product($id: ID!) {
                            Product(id: $id) {
                            id
                            name
                            description
                            image_url
                            category
                            price_in_cents
                        }
                     }
                    `,
                    variables: { id: id }
                })
            })
            return await response.json();
        }
    })
    console.log(data)
}