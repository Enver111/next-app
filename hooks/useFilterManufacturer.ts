import { Api } from "@/services/api-client";
import { Manufacturer } from "@prisma/client";
import React from "react";

export const useFilterManufacturer = () => {
  const [manufacturer, setManufacturer] = React.useState<Manufacturer[]>([]);

  React.useEffect(() => {
    async function fetchManufacturer() {
      try {
        const manufacturer = await Api.manufacturer.getAll();
        setManufacturer(manufacturer);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    fetchManufacturer();
  }, []);

  return { manufacturer };
};
