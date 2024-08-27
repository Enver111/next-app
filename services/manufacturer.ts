import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { Manufacturer } from "@prisma/client";

export const getAll = async (): Promise<Manufacturer[]> => {
  return (await axiosInstance.get<Manufacturer[]>(ApiRoutes.MANUFACTURER)).data;
};
