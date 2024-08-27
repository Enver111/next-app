import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { ProductState } from "@prisma/client";

export const getAll = async (): Promise<ProductState[]> => {
  return (await axiosInstance.get<ProductState[]>(ApiRoutes.STATE)).data;
};
