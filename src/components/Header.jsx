import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-16 bg-gray-800  flex items-center justify-between text-xl font-bold'>
        <h1>BinTrack</h1>

        <ul>
            <li>about us</li>
            <li>contact</li>
            <li>notification</li>    
        </ul>
    </div>
  )
}

export default Header