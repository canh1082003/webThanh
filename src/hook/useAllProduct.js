import { useQuery } from "@tanstack/react-query";
import { PRODUCT_QUERY } from "../util/constants";
import { productApi } from "../Api/Api.product";

export const useAllProduct = (queryParams) => {
  return useQuery({
    queryKey: [PRODUCT_QUERY, queryParams],
    queryFn: () => {
      return productApi(queryParams);
    },
  });
};
