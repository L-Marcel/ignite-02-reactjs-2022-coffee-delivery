import { ReactNode, useEffect, useState } from "react";
import { Select } from ".";

type SelectItem = {
  text: string;
  icon?: ReactNode;
};

interface SelectGroupProps {
  items: SelectItem[];
  onChangeSelectedItem: (index: number) => void; 
}

export function SelectGroup({ items, onChangeSelectedItem }: SelectGroupProps) {
  const [selectedItem, setSelectedItem] = useState(new Array(items.length).fill(false));

  return (
    <>
      {
        items.map(({ text, icon }, currentItemIndex) => {
          const isSelected = selectedItem[currentItemIndex];

          function handleOnChangeSelectedItem() {
            setSelectedItem(items => items.map((_, index) => index === currentItemIndex));
            onChangeSelectedItem(currentItemIndex);
          }

          //Como vai ser estático, vou usar o index como key mesmo...
          return (
            <Select 
              key={currentItemIndex} 
              isSelected={isSelected} 
              onChange={handleOnChangeSelectedItem}
              icon={icon}
              className="min-w-[11.25rem]"
            >
              {text}
            </Select>
          );
        })
      }
    </>
  );
}