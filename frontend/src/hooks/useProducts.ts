import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const useProducts = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["get-products", page],
    queryFn: async () => {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query GetProducts($page: Int, $limit: Int) {
              allProducts(page: $page, limit: $limit) {
                id
                name
                price_in_cents
                image_url
              }
            }
          `,
          variables: { page, limit },
        }),
      });
      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }
      const { data } = await response.json();
      return data.allProducts;
    },
  });
};
