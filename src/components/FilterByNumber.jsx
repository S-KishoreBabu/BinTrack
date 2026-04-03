import React from 'react'
import { useState,useRef, useEffect } from 'react';
const FilterByNumber = ({handleSearch,placeholder="search..."}) => {    
    const [searchValue,setSearchValue] = useState("");
    const inputRef = useRef(null);
    const searchDivRef = useRef(null);
    const [isFocus,setIsFocus] = useState(false);

    useEffect(()=>{
        if(isFocus){
            searchDivRef.current.style.border ="solid 2px lightblue";
            searchDivRef.current.style.backgroundColor = "#262626"
        }
        else{
            searchDivRef.current.style.border ="solid 2px #373737";
            searchDivRef.current.style.backgroundColor = "#373737"
        }
    },[isFocus]);

  return (
  <div className='flex items-center h-max mt-5'>
    <div ref={searchDivRef} style={{border:"none",backgroundColor:"none"}} className='rounded-md h-full border-2 border-[#373737] bg-[#373737]  w-full  outline-none    flex justify-start items-center' >
    <input type="number" value={searchValue} ref={inputRef} placeholder={placeholder} onChange={(e)=>{setSearchValue(e.target.value);}} onKeyDown={(event)=>{
            if (event.key === 'Enter') {
                handleSearch(searchValue);
                inputRef.current.blur();
            }
            }} onFocus={()=>{setIsFocus(true)}} onBlur={()=>{setIsFocus(false);}} className='px-3 py-1 w-full bg-[#525252] rounded-md text-[#f5f5f5] outline-none' />

    </div>
    <button className='h-9 rounded-3xl ml-5 w-max bg-[#525252] hover:bg-[#262626] cursor-pointer text-[#f5f5f5] px-5' onClick={()=>{
        handleSearch(searchValue);
    }} >Apply</button>
  </div>
  )
}

export default FilterByNumber