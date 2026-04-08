import React, { useContext } from 'react'
import { useState,useRef, useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import { ThemeContext } from "../../context/ThemeContext";
const SearchButton = ({handleSearch,placeholder="search..."}) => {    
    const [searchValue,setSearchValue] = useState("");
    const inputRef = useRef(null);
    const searchDivRef = useRef(null);
    const [isFocus,setIsFocus] = useState(false);
    const {lightTheme} = useContext(ThemeContext);
    useEffect(()=>{
        if(!lightTheme){
            if(isFocus){
                searchDivRef.current.style.border ="solid 2px lightblue";
                searchDivRef.current.style.backgroundColor = "#262626"
            }
            else{
                searchDivRef.current.style.border ="solid 2px #373737";
                searchDivRef.current.style.backgroundColor = "#373737"
            }
        }
        else{
            if(isFocus){
                searchDivRef.current.style.border ="solid 2.4px #024abf";
                searchDivRef.current.style.backgroundColor = "#FAFAFA"
            }
            else{
                searchDivRef.current.style.border ="solid 2px #e5e5e5";
                searchDivRef.current.style.backgroundColor = "#e5e5e5"
            }            
        }

    },[isFocus,lightTheme]);

  return (
  <>
    <div ref={searchDivRef} style={{border:"none"}} className='rounded-md h-full border-2 border-[#373737]   w-full  outline-none bg-[#e5e5e5]  dark:bg-[#373737]  flex justify-start items-center' >
        <IoMdSearch className='inline-block text-2xl ml-2 mr-1' />
    <input type="text" value={searchValue} ref={inputRef} placeholder={placeholder} onChange={(e)=>{setSearchValue(e.target.value);}} onKeyDown={(event)=>{
            if (event.key === 'Enter') {
                handleSearch(searchValue);
                inputRef.current.blur();
            }
            }} onFocus={()=>{setIsFocus(true)}} onBlur={()=>{setIsFocus(false);}} className='px-3 py-1 w-full dark:text-[#f5f5f5] outline-none' />

    </div>
    <button className='h-9 rounded-3xl ml-5 w-max bg-blue-700 hover:bg-blue-500 text-white dark:bg-blue-300 dark:hover:bg-blue-200 cursor-pointer dark:text-[#0b143f] px-5' onClick={()=>{
        handleSearch(searchValue);
    }} >Search</button>
  </>
  )
}

export default SearchButton