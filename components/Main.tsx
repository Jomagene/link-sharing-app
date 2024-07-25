"use client";
import Image from "next/image";
import PhoneContent from "./PhoneContent";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import SelectSite from "./SelectSite";

export default function Main() {
  let [edit, setEdit] = useState(0);
  let arr: string[] = [];

  return (
    <main className="w-full flex gap-6 max-w-[1440px]  m-auto px-6 pb-6">
      <section className="flex-[4] h-[834px] rounded-[12px] bg-white xl:flex hidden items-center justify-center relative">
        <Image src="/icons/phone1.svg" width={307} height={631} alt="logo" />
        <Image
          src="/icons/phone2.svg"
          width={285}
          height={611}
          alt="logo"
          className="absolute"
        />
        <PhoneContent />
      </section>
      <section className="flex-[5] flex flex-col rounded-[12px] bg-white">
        <div className="flex flex-col p-10 gap-10 h-[]">
          <div className="flex flex-col gap-2">
            <h1 className="text-[32px] font-bold">Customize your links</h1>
            <p className="text-[16px] text-[#737373] font-normal">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <div className="flex flex-col">
            <Button
              onClick={() => setEdit(edit + 1)}
              className="text-4 h-[46px] w-full font-semibold text-[#633CFF] rounded-[8px] border border-[#633CFF] hover:bg-[#EFEBFF]">
              <Plus className="h-3 w-3" /> Add new link
            </Button>
            <div className=" max-h-[470px] overflow-y-scroll no-scrollbar">
              {edit ? (
                Array(edit)
                  .fill(" ")
                  .map((el, id) => <SelectSite key={id} />)
              ) : (
                <div className="flex flex-col p-5 justify-center items-center bg-[#FAFAFA] h-[469px] rounded-[12px]">
                  <div className="flex flex-col items-center gap-10 max-w-[488px]">
                    <Image
                      src="/icons/get-started.svg"
                      width={250}
                      height={160}
                      alt="get started icon"
                    />
                    <div className="flex flex-col gap-6">
                      <h1 className="text-[32px] font-bold text-center">
                        Let’s get you started{" "}
                      </h1>
                      <p className="text-[16px] text-[#737373] font-normal text-center">
                        Use the “Add new link” button to get started. Once you
                        have more than one link, you can reorder and edit them.
                        We’re here to help you share your profiles with
                        everyone!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end py-6 px-10 h-[94px] border-t w-full">
          <Button className="text-[16px] h-[46px] w-full lg:w-[91px] font-semibold text-white  opacity-25 rounded-[8px] border bg-[#633CFF] ">
            Save
          </Button>
        </div>
      </section>
    </main>
  );
}