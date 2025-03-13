import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const useProducts = () => {
  return useQuery({
    queryKey: ["get-products"], // Chave única para cache
    queryFn: async () => {
      const response = await fetch(API_URL, {
        method: "POST", // GraphQL geralmente é POST
        headers: {
          "Content-Type": "application/json", // Header correto para GraphQL
        },
        body: JSON.stringify({
          query: `
            query {
              allProducts {
                id
                name
                price_in_cents
                image_url
                description
              }
            }
          `,
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
