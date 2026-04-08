import React from 'react'
import { useState,useRef ,useEffect} from 'react';
const DropDown = (props) => {
    const [dropDown, setDropDown] = useState(false);
    const dropDownRef = useRef(null);
    useEffect(()=>{
        const clickOutside = (e)=>{
            if(dropDownRef.current && !dropDownRef.current.contains(e.target)){
                setDropDown(false);
            }
        }
        document.addEventListener("mousedown",clickOutside);
        return(()=>{
            document.removeEventListener("mousedown",clickOutside);
        })
    },[])
  return (
        <div className='relative' ref={dropDownRef}>
            <div className='w-max h-max' onClick={()=>{setDropDown(!dropDown)}}>
                {props.dropDownHead}
            </div>

            {dropDown && 
                <div style={{marginLeft:props.left,marginTop:props.top}}  className="absolute bg-[#FAFAFA] dark:bg-[#373737] dark:border dark:border-[#525252] shadow-lg rounded-lg p-3 z-50">
                {props.children}
                </div>
            }
        </div>
  )
}

export default DropDown