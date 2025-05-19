import React from 'react'
import dataImage from "../assets/data.svg"
function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-10 py-5 flex justify-between items-center'>
      <img src={dataImage} alt="Data"  className='w-13'/>
      <h1 class='text-red-900'></h1>
    <div className='flex gap-10 text-amber-200 font-sans ... '>
      {['Services','Our work','About us','Insights','Contect us'].map((iteam,index)=>(
<a key={index} className={` text-lg ${index===4 && "ml-32"}`}>{iteam}</a>
      ))}
    </div>

    </div>
  )
}

export default Navbar
