import React, { useEffect, useState } from 'react'
import SearchButton from './SearchButton';
import useFetchData from '../utils/useFetchData';
import DropDown from './DropDown';
import FilterByNumber from './FilterByNumber';
import { FitScreen } from '@mui/icons-material';
const BinStatusTable = () => {
    const [dataNotFound,setDataNotFound] = useState(false);
    const [binData,setBinData] = useState([]);
    const data = useFetchData();
    const [filterUsed,setFilterUsed] = useState(false);
    const [optionValue,setOptionValue] = useState("");
    useEffect(()=>{
        setBinData(data);
    },[data])

    const handleSelect = (optionValue)=>{
        if(optionValue!=""){
            setFilterUsed(true);
            let newData = [];
            if(optionValue=="overFlow"){
                newData = data.filter((item)=>{
                    if(item.percentage>90){
                        return item;
                    }
                })
            }
            else if(optionValue=="nearlyFull"){
                newData = data.filter((item)=>{
                    if(item.percentage>80){
                        return item;
                    }
                })
            }
            else if(optionValue=="underCapacity"){
                newData = data.filter((item)=>{
                    if(item.percentage<80){
                        return item;
                    }
                })
            }

            if(newData.length==0){
                setDataNotFound(true);
            }
            else{
                setBinData(newData);
                setDataNotFound(false);
            }
        }
        else{
            setFilterUsed(false);
            setBinData(data);
            setDataNotFound(false);
        }
    }
    const handleLevel = (value)=>{
        if(value==""){
            setBinData(data);
            setDataNotFound(false);
            setFilterUsed(false);
        }
        else{
            setFilterUsed(true);

            let newData = data.filter((item)=>{
                if(value==item.percentage){
                    return item
                }
            })
            if(newData.length==0){
                setDataNotFound(true);
            }
            else{
                setBinData(newData);
                setDataNotFound(false);
            }
        }
    }

    const handleReset = ()=>{
        setBinData(data);
        setDataNotFound(false);
        setFilterUsed(false);
        setOptionValue("");
    }

    const handleSearch = (searchId)=>{
        if(searchId==""){
            setBinData(data);
            setDataNotFound(false);
        }
        else{
            let newData = data.filter((item)=>{
                if(item.id==searchId || item.location.toLowerCase().includes(searchId.toLowerCase())){
                    return item;
                }
            })
            if(newData.length==0){
                setDataNotFound(true);
            }
            else{
                setBinData(newData);
                setDataNotFound(false);
            }
        }
    }
  return (
    <div className=' p-8 w-full h-max '>
        <div className='w-full h-max rounded-xl shadow-md bg-[#FAFAFA] dark:bg-[#262626] text-[#737373] dark:text-[#8A8A8A] pb-12 '>
        <div className='w-full h-max p-4 flex justify-start items-center'>            
            <SearchButton handleSearch={handleSearch} placeholder="search by location or id"/>
            <DropDown left= "-380px" filterUsed={filterUsed} top= "0px">
                <div className='w-max'>
                    <select value={optionValue} onChange={(e)=>{
                        setOptionValue(e.target.value);
                        handleSelect(e.target.value);
                        }} className='bg-[#E5E5E5] dark:bg-[#525252] text-[#A3A3A3] p-2 w-full outline-none rounded'>
                        <option value="">Select Option</option>
                        <option value="underCapacity">Under capacity</option>
                        <option value="nearlyFull">Nearly full</option>
                        <option value="overFlow">Over flow</option>
                    </select>
                    <FilterByNumber handleSearch={handleLevel}/>
                    <div className='flex justify-center items-center mt-4'>
                    <button className='h-9 rounded-3xl w-max bg-[#E5E5E5] dark:bg-[#525252] hover:bg-[#d2d2d2] dark:hover:bg-[#262626] cursor-pointer dark:text-[#f5f5f5] px-5' onClick={handleReset} >Reset</button>
                    </div>
                </div>
            </DropDown>
        </div>

        <table className=' w-full '>
            <thead className='border-b border-0.5 h-12 border-[#d4d4d4] dark:border-[#373737] text-[#A3A3A3]'>
                <tr>
                    <td className='pl-4'>
                        <span>Id</span>
                    </td>
                    <td>
                        <span>Location</span>
                    </td>
                    <td>
                        <span>Status</span>
                    </td>
                    <td>
                        <span>Percentage</span>
                    </td>
                </tr>
            </thead>
            {dataNotFound || <tbody>
                {binData.map((item)=>(
                    <tr key={item.id} className='h-12 hover:bg-[#e5e5e5] dark:hover:bg-[#373737] border-b border-0.5 border-[#d4d4d4] dark:border-[#373737]' >
                        <td className='pl-4'><span>{item.id}</span></td>
                        <td><span>{item.location}</span></td>
                        <td><span>{item.percentage>80?"Nearly full":"Under capacity"}</span></td>
                        <td><span>{item.percentage} %</span></td>
                    </tr>
                ))}
            </tbody>}
        </table>
        {dataNotFound && (<div className='flex justify-center items-center h-70 w-full text-[#FAFAFA] text-center text-xl '><div><span>We couldn't find data
            <br/>Make sure the email or user UID is spelled and formatted correctly</span></div></div>)}
        </div>
    </div>
  )
}

export default BinStatusTable