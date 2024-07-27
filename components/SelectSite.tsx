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
import websites from "@/public/websites";
import { Equal, Link as LinkIcon } from "lucide-react";
import { Button } from "./ui/button";

interface SelectSiteProps {
  update: React.Dispatch<React.SetStateAction<string[]>>;
  list: string[];
  ind: number;
}

const SelectSite: FC<SelectSiteProps> = ({ list, update, ind }) => {
  let [selected, setSelected] = useState("");
  let [deleted, setDeleted] = useState(false);

  const handleChange = (value: string) => {
    setSelected(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newList = [...list, selected];
    update(newList);
  };

  const handleClick = () => {
    setDeleted(true);
    let newList = [...list];
    newList.splice(ind, 1);
    update(newList);
  };

  return (
    deleted || (
      <div className="flex flex-col w-full rounded-[12px] h-[228px] bg-[#FAFAFA] p-5 gap-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-[16px] text-[#737373] flex items-center">
            <Equal className="h-[20px]" />
            {`Link #${ind + 1}`}
          </h1>
          <Button className="text-[#737373] font-normal" onClick={handleClick}>
            Remove
          </Button>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[12px]">Platform</span>
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
        </div>
        <div className="flex flex-col gap-1 relative">
          <span className="text-[12px]">Link</span>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder={
                websites.filter((website) => website.value === selected)[0]
                  ?.placeholder
              }
              className="text-sm focus:border-none focus:!outline-[#633CFF] focus:shadow-shadowInput pl-7"
            />
            <LinkIcon
              width={16}
              height={16}
              className="top-9 left-2 absolute text-[#737373]"
            />
          </form>
        </div>
      </div>
    )
  );
};

export default SelectSite;
