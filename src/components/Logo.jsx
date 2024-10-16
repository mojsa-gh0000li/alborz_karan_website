import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href='/'>
        <Image 
        src='/logo2.svg'
        width={120}
        height={100}
        priority alt =''
        />
    </Link>
  )
}

export default Logo
