import { useState } from "react";
import { SidebarContext } from "./SidebarContext";
export const SidebarProvider = ({children})=>{
    const [isOpen,setIsOpen] = useState(false);
    return (
        <SidebarContext.Provider value ={{isOpen,setIsOpen}}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarContext;