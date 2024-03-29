"use client"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='max-x-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl'>Your ideas Documents, & Plans. Unifified. Welcole to <span className='underline'>Jotion</span></h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>Jotion is the connected workspace where <br />
        better, faster work happens
      </h3>
      <Button>
        Enter Jotion
        <ArrowRight className='h-4 w-4 ml-2' />
      </Button>
    </div>
  )
}

export default Header