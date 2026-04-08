import CardWrapper from "./CardWrapper";
import BinStatusTable from "../../features/bins/components/BinStatusTable";
import { useState } from "react";
import Toggle from "./Toggle";
const Tab = () => {
  const [activeTab, setActiveTab] = useState("grid");
  const handleTabClick = (tab, event) => {
    if (tab === "grid") {
      event.target.classList.remove("border-transparent", "text-gray-500");
      event.target.classList.add("border-green-600", "text-green-600");
      event.target.nextSibling.classList.remove("border-green-600","text-green-600",);
      event.target.nextSibling.classList.add("border-transparent","text-gray-500",);
    }
    if(tab === "table") {
      event.target.classList.remove("border-transparent", "text-gray-500");
      event.target.classList.add("border-green-600", "text-green-600");
      event.target.previousSibling.classList.remove("border-green-600", "text-green-600",);
      event.target.previousSibling.classList.add("border-transparent","text-gray-500",);
    }
    setActiveTab(tab);
  };
  return (
    <>
    <div className='flex items-end pb-1 w-full px-8  h-full text-[#262626] dark:text-[#E5E5E5] pt-8 text-3xl'>
    <span>Dustbin Status Overview :</span>
    </div>
    <div className="w-full px-8" >
      <div className="w-full h-15 flex items-center justify-start border-b border-gray-600">
        <div className="h-full w-50">
          <ul className="h-full flex items-center justify-around gap-5 text-md font-medium  ">
            <li
              className="h-full flex items-end pb-1 gap-1 border-b-3  border-green-600 text-green-600 cursor-pointer"
              onClick={(event) => handleTabClick("grid", event)}
            >
              Grid
            </li>
            <li
              className="h-full flex items-end pb-1 gap-1 border-b-3  border-transparent text-gray-500 cursor-pointer"
              onClick={(event) => handleTabClick("table", event)}
            >
              Table
            </li>
          </ul>
        </div>
      </div>
    </div>
      {activeTab === "grid" ? <CardWrapper /> : <BinStatusTable />}
    </>
  );
};

export default Tab;
