import { Button } from "@/components/ui/button";
import { CircleUserRound, Link as CustomLinkIcon, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Empty() {
  return (
    <>
      <header className="p-6 h-[126px] max-w-[1440px] m-auto">
        <div className="h-full w-full bg-white py-[16px] pl-[24px] pr-[16px] rounded-[12px]">
          <nav className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/icons/logo.svg"
                width={146}
                height={32}
                alt="logo"
                className="hidden sm:block"
              />
              <Image
                src="/icons/logo-mini.svg"
                width={32}
                height={32}
                alt="logo"
                className="block sm:hidden"
              />
            </Link>
            <div className="flex">
              <Button>
                <Link
                  href="/"
                  className="text-4 text-[#633CFF] bg-[#EFEBFF] rounded-[8px] flex items-center justify-center gap-2 h-[46px] py-[11px] px-[27px] font-semibold">
                  <CustomLinkIcon className="h-5 w-5" />
                  <span className="hidden sm:block">Links</span>
                </Link>
              </Button>
              <Link
                href="/"
                className="text-4 text-[#737373] hover:text-[#633CFF] flex items-center justify-center gap-2 h-[46px] py-[11px] px-[27px] font-semibold">
                <CircleUserRound className="h-5 w-5" />
                <span className="hidden sm:block">Profile details</span>
              </Link>
            </div>
            <Button className="text-4 h-[46px] py-[11px] px-[27px] font-semibold text-[#633CFF] rounded-[8px] border border-[#633CFF] hover:bg-[#EFEBFF] hidden sm:block">
              Preview
            </Button>
            <Image
              src="/icons/view-mini.svg"
              alt="View icon"
              width={20}
              height={20}
              className="block sm:hidden"
            />
          </nav>
        </div>
      </header>
      <main className="w-full flex gap-6 max-w-[1440px] m-auto px-6 pb-6">
        <section className="flex-[4] h-[834px] rounded-[12px] bg-white xl:flex hidden items-center justify-center relative">
          <Image src="/icons/phone1.svg" width={307} height={631} alt="logo" />
          <Image
            src="/icons/phone2.svg"
            width={285}
            height={611}
            alt="logo"
            className="absolute"
          />
        </section>
        <section className="flex-[5] flex flex-col rounded-[12px] bg-white">
          <div className="flex flex-col p-10 gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-[32px] font-bold">Customize your links</h1>
              <p className="text-[16px] text-[#737373] font-normal">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>
            <div className="flex flex-col gap-6 ">
              <Button className="text-4 h-[46px] w-full font-semibold text-[#633CFF] rounded-[8px] border border-[#633CFF] hover:bg-[#EFEBFF]">
                <Plus className="h-3 w-3" /> Add new link
              </Button>
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
                      We’re here to help you share your profiles with everyone!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end py-6 px-10 h-[94px] border-t border-[]">
            <Button className="text-4 h-[46px] w-full lg:w-[91px] font-semibold text-white  opacity-25 rounded-[8px] border bg-[#633CFF] ">
              Save
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
