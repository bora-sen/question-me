import React from 'react'

function Header() {
  return (
    <header className='pt-2 flex h-auto flex-col items-center justify-center sm:flex-row sm:justify-between bg-highlight text-white_main'>
        <h1 className='text-5xl font-display mb-4 sm:ml-2'>questionMe?</h1>

        <div className='font-content'>
          <ul className='flex sm:mr-2'>
            <li className='mx-3 text-lg'>About</li>
            <li className='mx-3 text-lg'>Create Test</li>
            <li className='mx-3 text-lg'>Github Link</li>
          </ul>
        </div>
    </header>
  )
}

export default Header