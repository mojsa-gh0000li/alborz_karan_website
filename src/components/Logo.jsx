import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href='/'>
        <Image 
        src='/logo2.svg'
        width={130}
        height={130}
        priority alt =''
        />
    </Link>
  )
}

export default Logo
