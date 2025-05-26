import React from 'react'

type LayoutProps = {
    children: React.ReactNode;
}

const layout = ({children}: LayoutProps) => {
  return (
    <div className='w-full'>
        <div className='w-[70%] mx-auto flex flex-col'>
            <div>
                {children}
            </div>
        </div>
    </div>
  )
}

export default layout