import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className='max-w-7xl w-full mx-auto px-4 flex flex-row items-center'>
      <p className='flex-1'>Navbar</p>
      <Link href={'/dashboard'}>
        Dashboard
      </Link>
    </div>
  )
}

export default Navbar