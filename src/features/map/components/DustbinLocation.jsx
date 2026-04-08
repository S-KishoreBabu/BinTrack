import React from 'react'
import useDustbins from "../../bins/hooks/useDustbin";
import Map from './Map';
import ErrorBoundary from "../../../components/ui/ErrorBoundary";

const DustbinLocation = () => {
    const dustbins = useDustbins();
  return (
    <div className='w-full h-max p-8 bg-[#e5e5e5] dark:bg-[#373737]'>
    <div className=' w-full h-max text-black dark:text-[#E5E5E5] text-3xl'>
    <span>Dustbin location dashboard :</span>
    </div>
    <div className='flex w-full h-max  my-5 dark:text-[#E5E5E5]'>
        <div className='h-full w-full px-5 py-8'>
            <p>The Dustbin Location Dashboard provides a real-time map view of all smart dustbins, showing their exact locations and current fill status. It helps users quickly identify which bins are empty, partially filled, or full using color-coded markers.</p>
        </div>
        <div className='border-l border-[#878787] h-full w-full px-5 py-8'>
            <p>This dashboard enables efficient waste collection by guiding authorities to only the bins that require attention, reducing unnecessary trips, saving fuel, and improving overall waste management efficiency.</p>
        </div>
    </div>
    <ErrorBoundary>
        <div>

            <div className='  z-1 shadow-[8px_8px_0_0_rgb(0,150,7)] dark:shadow-[8px_8px_0_0_rgba(38,252,48,0.5)]'>
                <Map dustbins={dustbins} />
            </div>
            <div className='w-40 relative z-3 -top-30 -left-10 '>
              <img src="https://img.icons8.com/fluency/240/waste--v1.png" className='w-full h-full object-contain'/>
            </div>
        </div>

    </ErrorBoundary>
    </div>
  )
}

export default DustbinLocation