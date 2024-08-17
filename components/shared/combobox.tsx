"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "Alfa Romeo",
    label: "Alfa Romeo",
  },
  {
    value: "Audi",
    label: "Audi",
  },
  {
    value: "Bentley",
    label: "Bentley",
  },
  {
    value: "BMW",
    label: "BMW",
  },
  {
    value: "Chevrolet",
    label: "Chevrolet",
  },
  {
    value: "Chrysler",
    label: "Chrysler",
  },
  {
    value: "Citroen",
    label: "Citroen",
  },
  {
    value: "Daewoo",
    label: "Daewoo",
  },
  {
    value: "Fiat",
    label: "Fiat",
  },
  {
    value: "Ford",
    label: "Ford",
  },
  {
    value: "Honda",
    label: "Honda",
  },
  {
    value: "Hyundai",
    label: "Hyundai",
  },
  {
    value: "Infiniti",
    label: "Infiniti",
  },
  {
    value: "Jaguar",
    label: "Jaguar",
  },
  {
    value: "Jeep",
    label: "Jeep",
  },
  {
    value: "Kia",
    label: "Kia",
  },
  {
    value: "Lada",
    label: "Lada",
  },
  {
    value: "Land Rover",
    label: "Land Rover",
  },
  {
    value: "Lexus",
    label: "Lexus",
  },
  {
    value: "Mazda",
    label: "Mazda",
  },
  {
    value: "Mercedes Benz",
    label: "Mercedes Benz",
  },
  {
    value: "Mitsubishi",
    label: "Mitsubishi",
  },
  {
    value: "Nissan",
    label: "Nissan",
  },
  {
    value: "Opel",
    label: "Opel",
  },
  {
    value: "Peugeot",
    label: "Peugeot",
  },
  {
    value: "Porsche",
    label: "Porsche",
  },
  {
    value: "Renault",
    label: "Renault",
  },
  {
    value: "Saab",
    label: "Saab",
  },
  {
    value: "Seat",
    label: "Seat",
  },
  {
    value: "Skoda",
    label: "Skoda",
  },
  {
    value: "Ssang Yong",
    label: "Ssang Yong",
  },
  {
    value: "Subaru",
    label: "Subaru",
  },
  {
    value: "Suzuki",
    label: "Suzuki",
  },
  {
    value: "Toyota",
    label: "Toyota",
  },
  {
    value: "Volkswagen",
    label: "Volkswagen",
  },
  {
    value: "Volvo",
    label: "Volvo",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Марка авто"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Поиск авто" />
          <CommandList>
            <CommandEmpty>Ничего не найдено</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
