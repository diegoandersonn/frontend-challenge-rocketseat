import { CategoryFilterType } from "@/types/category-filter-type";
import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const useProducts = (
  page: number,
  perPage: number,
  categoryFilter: CategoryFilterType
) => {
  const categoryFilterParsed = categoryFilter
    ? {
        category:
          categoryFilter === CategoryFilterType.all ? undefined : categoryFilter,
      }
    : {};
  return useQuery({
    queryKey: ["get-products", page, categoryFilter],
    queryFn: async () => {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query Products($page: Int, $perPage: Int, $filter: ProductFilter) {
              allProducts(page: $page, perPage: $perPage, filter: $filter) {
                id
                name
                price_in_cents
                image_url
              }
            }
          `,
          variables: { page, perPage, filter: categoryFilterParsed },
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
