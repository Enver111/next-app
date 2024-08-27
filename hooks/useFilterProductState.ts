import { Api } from "@/services/api-client";
import { ProductState } from "@prisma/client";
import React from "react";

export const useFilterProductState = () => {
  const [productState, setProductState] = React.useState<ProductState[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchProductState() {
      try {
        setLoading(true);
        const productState = await Api.productStates.getAll();
        setProductState(productState);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProductState();
  }, []);

  return { productState, loading };
};
