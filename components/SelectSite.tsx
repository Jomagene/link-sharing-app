import React, { useState, ChangeEvent } from "react";

export default function SelectSite() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    console.log("Selected value:", event.target.value);
  };

  return (
    <div className="w-full">
      <select
        className="custom-select h-12 flex gap-3 bg-white rounded-md text-sm w-full transition"
        value={selectedValue}
        onChange={handleChange}>
        <option value="github" className="hover:!bg-[#333] h-12 border-b">
          Github
        </option>
        <option value="frontend-m" className="h-12">
          Frontend Mentor
        </option>
        <option value="twitter" className="h-12">
          Twitter
        </option>
        <option value="linkedin" className="h-12">
          LinkedIn
        </option>
        <option value="youtube" className="h-12">
          YouTube
        </option>
        <option value="facebook" className="h-12">
          Facebook
        </option>
        <option value="twitch" className="h-12">
          Twitch
        </option>
        <option value="devto" className="h-12">
          Dev.to
        </option>
        <option value="codewars" className="h-12">
          Codewars
        </option>
        <option value="codepen" className="h-12">
          Codepen
        </option>
        <option value="freecodecamp" className="h-12">
          FreeCodeCamp
        </option>
        <option value="gitlab" className="h-12">
          GitLab
        </option>
        <option value="hashnode" className="h-12">
          Hashnode
        </option>
        <option value="stackoverflow">Stack Overflow</option>
      </select>
      <p className="mt-2">Selected Value: {selectedValue}</p>
    </div>
  );
}
