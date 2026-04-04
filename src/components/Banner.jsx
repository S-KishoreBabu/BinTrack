import React from 'react'
import BannerImg from "../assets/banner.png"
import BannerButton from './BannerButton'
import { GridScan } from './GridScan'
const Banner = () => {
  return (
    <div className="h-137.5 w-full relative">

        <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="green"
            gridScale={0.1}
            scanColor="green"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}>
                <div className='flex flex-col items-center m-25 '>
                    <div className='w-200 text-6xl text-center font-extrabold cursor-default text-white'>
                        <h1>Smart Dustbin Monitoring System</h1>

                    </div>
                    <div className='w-200 text-2xl text-center mt-10 font-mono cursor-default text-white'>
                        <h1>Monitor waste level in real-time efficeincly</h1>
                    </div>
                    <BannerButton/>
                </div>
            </GridScan>
    </div>
  )
}

export default Banner


