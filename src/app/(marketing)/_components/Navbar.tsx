"use client"
import React from 'react'
import { useSrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import Logo from './Logo'
import { ModeToggle } from '@/components/mode-toogle'
const Navbar = () => {
  const scrolled = useSrollTop()
  return (
    <div className={cn("z-50 bg-background fixed top-0 dark:bg-[#1f1f1f] flex items-center w-full p-6",
      scrolled && "border-b shadow-sm"
    )}>
      <Logo/>
      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        <ModeToggle/>
      </div>
    </div>
  )
}

export default Navbar