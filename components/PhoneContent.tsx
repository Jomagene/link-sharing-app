"use client";
import Image from "next/image";
import { useState } from "react";

const PhoneContent: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [src, setSrc] = useState("");
  const [links, setLinks] = useState(["", "", "", "", ""]);

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
      <section className="flex flex-col gap-5">
        {links.map((link, id) => (
          <p key={id} className="w-full h-11 rounded-[8px] bg-[#EEE]">
            {link}
          </p>
        ))}
      </section>
    </aside>
  );
};

export default PhoneContent;
