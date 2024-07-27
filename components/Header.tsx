import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Link as CustomLinkIcon, CircleUserRound } from "lucide-react";

interface HeaderProps {
  setChoiceMenu: React.Dispatch<React.SetStateAction<string>>;
  choiceMenu: string;
}

const Header: React.FC<HeaderProps> = ({ setChoiceMenu, choiceMenu }) => {
  function handleChoice(a: string) {
    setChoiceMenu(a);
  }
  return (
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
                onClick={() => handleChoice("links")}
                className={`text-4 rounded-[8px] flex items-center ${
                  choiceMenu == "links"
                    ? "text-[#633CFF] bg-[#EFEBFF]"
                    : "text-[#737373] hover:text-[#633CFF]"
                } justify-center gap-2 h-[46px] py-[11px] px-[27px] font-semibold`}>
                <CustomLinkIcon className="h-5 w-5" />
                <span className="hidden sm:block">Links</span>
              </Link>
            </Button>
            <Link
              href="/"
              onClick={() => handleChoice("profile")}
              className={`text-4 rounded-[8px] flex items-center ${
                choiceMenu == "profile"
                  ? "text-[#633CFF] bg-[#EFEBFF]"
                  : "text-[#737373] hover:text-[#633CFF]"
              } justify-center gap-2 h-[46px] py-[11px] px-[27px] font-semibold`}>
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
  );
};

export default Header;
