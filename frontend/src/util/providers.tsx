"use client";
import { FilterProvider } from "@/contexts/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <FilterProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </FilterProvider>
  );
}
