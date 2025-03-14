import { CategoryFilterType } from "@/types/category-filter-type";
import { OrderFilterType } from "@/types/order-filter-type";
import { ProductType } from "@/types/product-type";
import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const useProducts = (
  page: number,
  perPage: number,
  categoryFilter: CategoryFilterType,
  orderFilter: OrderFilterType | null
) => {
  const categoryFilterParsed = categoryFilter
    ? {
        category:
          categoryFilter === CategoryFilterType.all
            ? undefined
            : categoryFilter,
      }
    : {};
  const orderFilterParsed: { sortField?: string; sortOrder?: string } = {};
  if (orderFilter) {
    if (orderFilter === OrderFilterType.news) {
      orderFilterParsed.sortField = orderFilter;
      orderFilterParsed.sortOrder = "ASC";
    } else if (orderFilter === OrderFilterType.sales) {
      orderFilterParsed.sortField = orderFilter;
      orderFilterParsed.sortOrder = "DESC";
    } else if (orderFilter === OrderFilterType.priceAsc) {
      orderFilterParsed.sortField = "price_in_cents";
      orderFilterParsed.sortOrder = "ASC";
    } else if (orderFilter === OrderFilterType.priceDesc) {
      orderFilterParsed.sortField = "price_in_cents";
      orderFilterParsed.sortOrder = "DESC";
    }
  }
  return useQuery({
    queryKey: ["get-products", page, categoryFilter, orderFilter],
    queryFn: async () => {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query Products($page: Int, $perPage: Int, $filter: ProductFilter, $sortField: String, $sortOrder: String) {
              allProducts(page: $page, perPage: $perPage, filter: $filter, sortField: $sortField, sortOrder: $sortOrder) {
                id
                name
                price_in_cents
                image_url
              }
            }
          `,
          variables: {
            page,
            perPage,
            filter: categoryFilterParsed,
            sortField: orderFilterParsed.sortField,
            sortOrder: orderFilterParsed.sortOrder,
          },
        }),
      });
      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }
      const { data } = await response.json();
      const products = data.allProducts.map((product: ProductType) => ({
        ...product,
        quantity: 0,
      }));
      return products;
    },
  });
};
