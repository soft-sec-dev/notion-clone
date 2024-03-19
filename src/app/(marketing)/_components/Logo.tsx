import React from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
})

const Logo = () => {
  return (
    <div className='hidden md:flex items-center gap-x-2'>
      <Image
        src="/notion.svg"
        height="40"
        width="40"
        alt='logo'
      />
      <p className={cn("font-semibold", font.className)}>Jotion</p>
    </div>
  )
}

export default Logo