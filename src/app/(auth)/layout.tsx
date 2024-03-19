import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full bg-red-500 text-white'>
      {children}
    </div>
  )
}

export default layout