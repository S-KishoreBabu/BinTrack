import React from 'react'
import Banner from '../components/Banner'
import CardWrapper from '../components/CardWrapper'
import BinStatusTable from '../components/BinStatusTable'
const Home = () => {
  return (
    <div className='h-max w-full bg-[#171717] pb-100'>
        <Banner />
        <CardWrapper/>
        <BinStatusTable/>
    </div>
  )
}

export default Home