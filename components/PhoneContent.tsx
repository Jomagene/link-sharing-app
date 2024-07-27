import websites from "@/public/websites";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PhoneContentProps {
  myList: string[];
  file: File | null;
}

const PhoneContent: React.FC<PhoneContentProps> = ({ myList, file }) => {
  const links = ["", "", "", "", ""];
  const myCompleteList = myList.map((element) =>
    websites.filter((website) => website.value == element)
  );
  const colors = myCompleteList.map((el) => el[0]?.color);
  const icons = myCompleteList.map((el) => el[0]?.src);

  return (
    <aside className="w-[237px] h-[514px] absolute flex flex-col gap-14">
      <section className="flex flex-col gap-[25px] items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden object-cover flex justify-center items-center">
          {file !== null && (
            <Image
              src={URL.createObjectURL(file)}
              alt="Empty"
              width={96}
              height={96}
            />
          )}
        </div>
        <div className="w-40 h-[37px] flex flex-col justify-between items-center">
          <h2 className="h-[16px] w-full rounded-[8px] bg-[#EEE] text-[18px] font-semibold"></h2>
          <p className="h-2 w-[72px] rounded-[4px] bg-[#EEE]"></p>
        </div>
      </section>
      <section className="flex flex-col gap-5 overflow-y-scroll subtle-scrollbar ">
        {myList[0]
          ? myList.map((link, id) => (
              <div
                key={id}
                style={{ backgroundColor: colors[id] }}
                className="w-full min-h-11 rounded-[8px] text-white text-[12px] px-4">
                <Link
                  target="_blank"
                  href=""
                  className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    {icons[id]}
                    <p className="leading-[44px] font-normal capitalize">
                      {link}
                    </p>
                  </div>
                  <ArrowRight className="text-white h-[11px] w-[11px]" />
                </Link>
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
