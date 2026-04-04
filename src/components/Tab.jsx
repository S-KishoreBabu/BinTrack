import CardWrapper from "./CardWrapper"
import BinStatusTable from "./BinStatusTable";
import { useState } from "react";
const Tab = () => {
    const [activeTab, setActiveTab] = useState('grid');
    const handleTabClick = (tab,event) => {
        setActiveTab(tab);
        console.log(event.target);
        if(tab === 'grid'){
            event.target.classList.remove('border-transparent','text-gray-600');   
            event.target.classList.add('border-green-600','text-green-600');
            event.target.nextSibling.classList.remove('border-green-600','text-green-600');
            event.target.nextSibling.classList.add('border-transparent','text-gray-600');
        }
        if(tab === 'table'){
            event.target.classList.remove('border-transparent','text-gray-600');
            event.target.classList.add('border-green-600','text-green-600');
            event.target.previousSibling.classList.remove('border-green-600','text-green-600');
            event.target.previousSibling.classList.add('border-transparent','text-gray-600');
        }
    }
  return (
    <>
    <div className='w-full h-15 flex items-center justify-between px-5 border-b border-gray-600'>
        <div className='flex items-end pb-1 h-full text-[#E5E5E5] font-bold text-xl'>
            <span>Dustbin Status Overview :</span>
        </div>
      <div className="h-full w-50">
        <ul className='h-full flex items-center justify-around gap-5 text-md font-medium  '>
          <li  className='h-full flex items-end pb-1 gap-1 border-b-3  border-green-600 text-green-600 cursor-pointer' onClick={(event) => handleTabClick('grid',event)}>Grid</li>
          <li className='h-full flex items-end pb-1 gap-1 border-b-3  border-transparent text-gray-600 cursor-pointer' onClick={(event) => handleTabClick('table',event)}>Table</li>
        </ul>
      </div>
    </div>
    {activeTab === 'grid' ? <CardWrapper /> : <BinStatusTable />}
    </>

  )
}

export default Tab