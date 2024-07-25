//components/SelectSite.tsx
import React, { FC, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import Image from "next/image";
import websites from "@/public/websites";

interface SelectSiteProps {
  update: React.Dispatch<React.SetStateAction<string[]>>;
  list: string[];
}

const SelectSite: FC<SelectSiteProps> = ({ list, update }) => {
  let [selected, setSelected] = useState("");

  const handleChange = (value: string) => {
    setSelected(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newList = [...list, selected];
    update(newList);
  };

  return (
    <div className="flex flex-col w-full rounded-[12px] h-[228px] bg-[#FAFAFA] p-5">
      <Select onValueChange={handleChange}>
        <SelectTrigger className="h-12 rounded-md text-sm w-full transition focus:border-none focus:!outline-[#633CFF] focus:shadow-shadowInput pl-7">
          <SelectValue placeholder="Select a website" />
        </SelectTrigger>
        <SelectContent className="p-3 w-[95%]">
          {websites.map((website, id) => (
            <SelectItem
              key={id}
              value={website.value}
              className="pb-3 hover:!bg-[#333] h-12 border-b">
              {website.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <form className="relative" onSubmit={handleSubmit}>
        <Input
          placeholder={
            websites.filter((website) => website.value === selected)[0]
              ?.placeholder
          }
          className="text-sm focus:border-none focus:!outline-[#633CFF] focus:shadow-shadowInput pl-7"
        />
        <Image
          src="/icons/enveloppe.svg"
          width={16}
          height={16}
          alt="email input"
          className="top-9 left-2 absolute"
        />
      </form>
    </div>
  );
};

export default SelectSite;
