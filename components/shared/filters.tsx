import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { ComboboxDemo } from "./combobox";
import { CheckboxFiltersGroup } from "./checkbox-filter-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="mt-5 border-b border-y-neutral-100 ">
        <p className="font-bold mb-3">Поиск по VIN</p>
        <div className="flex gap-3 mb-5">
          <Input type="text" placeholder="Введите код запчасти" />
        </div>
      </div>

      <div className="mt-5 border-b border-y-neutral-100">
        <p className="font-bold mb-3">Марка авто</p>
        <div className="flex gap-3 mb-5">
          <ComboboxDemo />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <p className="font-bold mb-3">Состояние</p>
        <FilterCheckbox text="Все" value="1" />
        <FilterCheckbox text="Новые" value="2" />
        <FilterCheckbox text="Б/у" value="3" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена, ₽ от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={30000} placeholder="30000" />
        </div>

        <RangeSlider min={0} max={30000} step={10} value={[0, 30000]} />
      </div>

      <CheckboxFiltersGroup
        title="Производитель"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "Германия", value: "1" },
          { text: "Корея", value: "2" },
          { text: "Китай", value: "3" },
          { text: "Франция", value: "4" },
          { text: "Испания", value: "5" },
          { text: "Италия", value: "6" },
          { text: "Америка", value: "7" },
        ]}
        items={[
          { text: "Германия", value: "1" },
          { text: "Корея", value: "2" },
          { text: "Китай", value: "3" },
          { text: "Франция", value: "4" },
          { text: "Испания", value: "5" },
          { text: "Италия", value: "6" },
          { text: "Америка", value: "7" },
        ]}
      />
    </div>
  );
};
