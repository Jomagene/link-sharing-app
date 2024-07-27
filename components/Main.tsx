//components/Main.tsx
"use client";
import Image from "next/image";
import PhoneContent from "./PhoneContent";
import { Button } from "./ui/button";
import { useState } from "react";
import SelectSite from "./SelectSite";
import ImageIcon from "./icons/ImageIcon";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";

export default function Main({ choiceMenu }: { choiceMenu: string }) {
  let [edit, setEdit] = useState(0);
  let [listSite, setListSite] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
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
        <PhoneContent myList={listSite} file={file} />
      </section>
      <section className="flex-[5] flex flex-col rounded-[12px] bg-white">
        {choiceMenu === "links" ? (
          <div className="flex flex-col p-10 gap-10 h-[740px]">
            <div className="flex flex-col gap-2">
              <h1 className="text-[32px] font-bold">Customize your links</h1>
              <p className="text-[16px] text-[#737373] font-normal">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>
            <div className="flex gap-6 flex-col">
              <Button
                onClick={() => setEdit(edit + 1)}
                className="text-4 h-[46px] w-full font-semibold text-[#633CFF] rounded-[8px] border border-[#633CFF] hover:bg-[#EFEBFF]">
                <Plus className="h-3 w-3" /> Add new link
              </Button>
              <div className="flex flex-col gap-6 max-h-[470px] overflow-y-scroll subtle-scrollbar">
                {edit ? (
                  Array(edit)
                    .fill(" ")
                    .map((_el, id) => (
                      <SelectSite
                        key={id}
                        ind={id}
                        update={setListSite}
                        list={listSite}
                      />
                    ))
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
                          have more than one link, you can reorder and edit
                          them. We’re here to help you share your profiles with
                          everyone!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col p-10 gap-10 h-[740px]">
            <div className="flex flex-col gap-2">
              <h1 className="text-[32px] font-bold">Profile Details</h1>
              <p className="text-[16px] text-[#737373] font-normal">
                Add your details to create a personal touch to your profile.
              </p>
            </div>
            <div className="flex gap-6 flex-col">
              <div className="h-[233px] rounded-[12px] flex bg-[#FAFAFA] p-5 gap-4 items-center">
                <p className="text-[16px] text-[#737373] font-normal flex-1">
                  Profile picture
                </p>
                <div className="h-[193px] w-[193px] bg-[#EFEBFF] rounded-[12px] overflow-hidden">
                  <form
                    action=""
                    className="flex items-center justify-center h-full">
                    {file && (
                      <Image
                        src={URL.createObjectURL(file)}
                        alt="Empty"
                        width={193}
                        height={193}
                      />
                    )}
                    {file === null && (
                      <label
                        htmlFor="file"
                        className="flex flex-col justify-center items-center h-full cursor-pointer">
                        <ImageIcon />
                        <p className="text-[16px] text-[#633CFF] font-normal">
                          + Upload image
                        </p>
                      </label>
                    )}
                    <input
                      type="file"
                      id="file"
                      onChange={(e) =>
                        setFile(e.target.files ? e.target.files[0] : null)
                      }
                      style={{ display: "none" }}
                    />
                  </form>
                </div>
                <p className="text-[12px] text-[#737373] font-normal pl-3 flex-1">
                  Image must be below 1024x1024px. <br />
                  Use PNG or JPG format.
                </p>
              </div>
              <form className="h-[208px] rounded-[12px] bg-[#FAFAFA] text-[#737373] flex p-5 gap-3 flex-col">
                <div className="flex items-center">
                  <label htmlFor="firstName" className="flex-[1]">
                    First name*
                  </label>
                  <Input
                    type="text"
                    name=""
                    id="firstName"
                    placeholder="e.g. John"
                    className="px-4 py-3 h-[48px] flex-[2] rounded-lg"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="firstName" className="flex-[1]">
                    Last name*
                  </label>
                  <Input
                    type="text"
                    name=""
                    id="lastName"
                    placeholder="e.g. Appleseed"
                    className="px-4 py-3 h-[48px] flex-[2] rounded-lg"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="mail" className="flex-[1]">
                    Email
                  </label>
                  <Input
                    type="email"
                    name=""
                    id="mail"
                    placeholder="e.g. email@example.com"
                    className="px-4 py-3 h-[48px] flex-[2] rounded-lg"
                  />
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="flex justify-end py-6 px-10 h-[94px] border-t w-full">
          {edit || file !== null ? (
            <Button
              className={`text-[16px] h-[46px] w-full lg:w-[91px] font-semibold text-white opacity-100 rounded-[8px] border bg-[#633CFF]`}>
              Save
            </Button>
          ) : (
            <Button
              className={`text-[16px] h-[46px] w-full lg:w-[91px] font-semibold opacity-25 text-white rounded-[8px] border bg-[#633CFF]`}>
              Save
            </Button>
          )}
        </div>
      </section>
    </main>
  );
}
