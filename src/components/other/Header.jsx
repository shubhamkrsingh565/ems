/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Header = ({data}) => {
  // console.log(data)

  const [username, setUsername] = useState('')

  // if(!data) {
  //   setUsername('Admin')
  // } else {
  //   setUsername(data.firstName)
  // }

  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
        <button className='bg-red-600 text-lg font-medium px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header 