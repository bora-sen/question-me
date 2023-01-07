import React from 'react'

function MainContainer({children}) {
  return (
    <main className='sm:container mx-auto'>
    {children}
    </main>
  )
}

export default MainContainer