"use client";
import websites from "@/public/websites";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface PhoneContentProps {
  myList: string[];
}

const PhoneContent: React.FC<PhoneContentProps> = ({ myList }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [src, setSrc] = useState("");
  const links = ["", "", "", "", ""];
  const myCompleteList = myList.map((element) =>
    websites.filter((website) => website.value == element)
  );
  const colors = myCompleteList.map((el) => el[0]?.color);

  return (
    <aside className="w-[237px] h-[514px] absolute flex flex-col gap-14">
      <section className="flex flex-col gap-[25px] items-center">
        <div className="w-24 h-24 rounded-full bg-[#EEE] overflow-hidden object-cover flex justify-center items-center">
          {src && <Image src={src} width={96} height={96} alt={name} />}
        </div>
        <div className="w-40 h-[37px] flex flex-col justify-between items-center">
          <h2 className="h-[16px] w-full rounded-[8px] bg-[#EEE] text-[18px] font-semibold">
            {name}
          </h2>
          <p className="h-2 w-[72px] rounded-[4px] bg-[#EEE]">{email}</p>
        </div>
      </section>
      <section className="flex flex-col gap-5 overflow-y-scroll subtle-scrollbar ">
        {myList[0]
          ? myList.map((link, id) => (
              <div
                key={id}
                style={{ backgroundColor: colors[id] }}
                className="w-full min-h-11 rounded-[8px] text-white text-[12px] flex items-center justify-between px-4">
                <p className="leading-[44px] font-normal capitalize">{link}</p>
                <ArrowRight className="text-white h-[11px] w-[11px]" />
              </div>
            ))
          : links.map((el, id) => (
              <p key={id} className="w-full h-11 rounded-[8px] bg-[#EEE]">
                {el}
              </p>
            ))}
      </section>
    </aside>
  );
};

export default PhoneContent;
