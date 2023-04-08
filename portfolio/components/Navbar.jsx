import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex flex-col items-center md:flex-row gap-4 md:gap-14'>
        <Link className='text-2xl font-semibold hover:text-blue-700' href={'#'}>About</Link>
        <Link className='text-2xl font-semibold hover:text-blue-700' href={'#'}>Experience</Link>
        <Link className='text-2xl font-semibold hover:text-blue-700' href={'#'}>Projects</Link>
        <Link className='text-2xl font-semibold hover:text-blue-700' href={'#'}>Contact</Link>
      </nav>
      
    </>
  )
}

export default Navbar