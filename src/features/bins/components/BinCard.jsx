import React, { useState } from 'react'
import greenBin from "../../../assets/dustbin-green.png";
import redBin from "../../../assets/dustbin-red.png";
import Input from "../../../components/ui/Input";

const BinCard = ({ id, location, percentage }) => {
  const [hover, setHover] = useState(false)

  const isFull = percentage > 80

  const shadow = isFull
    ? "50px -70px 45px -70px rgba(196,2,2,0.8)"
    : "50px -70px 45px -70px rgba(14,179,2,1)"

    const bgImage = isFull ? "linear-gradient(to right, #e00404, #ff6969)": "linear-gradient(to right, #065f46, #4ade80)"

  return (
    <div style={{backgroundImage:bgImage}} className='flex justify-center shadow-sm items-center w-30 h-40 lg:w-50 lg:h-70 bg-linear-to-r from-green-800 to-green-400 rounded-2xl'>
      
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          boxShadow: hover ? shadow : "none",
          transition: "box-shadow 0.3s ease, transform 0.3s ease"
        }}
        className='w-full h-full hover:scale-98 rounded-2xl shadow-2xl bg-[#FAFAFA] dark:bg-[#373737] dark:border-2  dark:border-[#525252]'
      >
        
        <div
          style={{
            backgroundImage: `url(${isFull ? redBin : greenBin})`
          }}
          className='h-full w-full rounded-2xl bg-center bg-contain bg-no-repeat'
        >
          
          <div className='w-full h-full rounded-2xl backdrop-blur-xl p-1 lg:p-3'>
            
            {/* Image */}
            <div className='w-full h-20 lg:h-32'>
              <img
                src={isFull ? redBin : "https://img.icons8.com/fluency/240/waste--v1.png"}
                className='w-full h-full object-contain'
              />
            </div>

            {/* Content */}

            <div className='w-full relative -top-4 rounded-2xl bg-[#FAFAFA] shadow-md dark:shadow-none dark:bg-[#373737] dark:border border-[#A3A3A3] dark:border-[#525252] p-1 lg:p-2'>             
              <div className='flex justify-between items-center text-[#171717] dark:text-[#F5F5F5]'>
                <span className='lg:font-bold text-xs md:text-xs lg:text-sm'>{location}</span>
                <div className='h-4 w-4 lg:h-8 lg:w-8 rounded-full bg-[#E5E5E5] dark:bg-[#525252] flex items-center justify-center'>
                  <span className='font-medium lg:text-bold text-xs lg:text-sm'>{id}</span>
                </div>
              </div>

              <hr className='my-1 lg:my-2 border-[#A3A3A3] dark:border-[#525252]' />

              <div className='flex items-center'>
                <Input percentage={percentage} />
                <div className='ml-1.5 text-[10px] lg:ml-3 lg:text-xs dark:text-[#e8e8e8]'>
                  Dustbin {id} is filled {percentage}%
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default BinCard