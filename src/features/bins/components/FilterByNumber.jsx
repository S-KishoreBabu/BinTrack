import React, { useState, useRef, useEffect, useContext } from 'react';
import { ThemeContext } from "../../../context/ThemeContext";

const FilterByNumber = ({ handleSearch, placeholder = "search..." }) => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  const searchDivRef = useRef(null);
  const [isFocus, setIsFocus] = useState(false);
  const { lightTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (!lightTheme) {
      if (isFocus) {
        searchDivRef.current.style.border = "solid 2px lightblue";
        searchDivRef.current.style.backgroundColor = "#262626";
      } else {
        searchDivRef.current.style.border = "solid 2px #373737";
        searchDivRef.current.style.backgroundColor = "#373737";
      }
    } else {
      if (isFocus) {
        searchDivRef.current.style.border = "solid 2.4px #024abf";
        searchDivRef.current.style.backgroundColor = "#FAFAFA";
      } else {
        searchDivRef.current.style.border = "solid 2px #e5e5e5";
        searchDivRef.current.style.backgroundColor = "#e5e5e5";
      }
    }
  }, [isFocus, lightTheme]); // include lightTheme here

  return (
    <div className="flex items-center h-max mt-5">
      <div
        ref={searchDivRef}
        style={{ border: "none" }}
        className="rounded-md h-full w-full outline-none flex justify-start items-center"
      >
        <input
          type="number"
          value={searchValue}
          ref={inputRef}
          placeholder={placeholder}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch(searchValue);
              inputRef.current.blur();
            }
          }}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className="px-3 py-1 w-full rounded-md outline-none 
                     dark:text-[#f5f5f5]"
        />
      </div>
      <button
        className="h-9 rounded-3xl ml-5 w-max bg-[#E5E5E5] hover:bg-[#d2d2d2] dark:bg-[#525252] dark:[#FAFAFA] cursor-pointer px-5"
        onClick={() => handleSearch(searchValue)}
      >
        Apply
      </button>
    </div>
  );
};

export default FilterByNumber;
