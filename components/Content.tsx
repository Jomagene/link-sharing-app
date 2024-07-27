"use client";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

export default function Content() {
  let [currentMenu, setCurrentMenu] = useState("links");
  return (
    <>
      <Header setChoiceMenu={setCurrentMenu} choiceMenu={currentMenu} />
      <Main choiceMenu={currentMenu} />
    </>
  );
}
