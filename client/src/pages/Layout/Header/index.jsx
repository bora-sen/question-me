import React from 'react'

function Header() {
  return (
    <header className='pt-2 flex h-auto flex-col items-center justify-center sm:flex-row sm:justify-between bg-highlight text-white_main'>
        <a href='/' className='text-5xl font-display mb-4 sm:ml-2'>questionMe?</a>

        <div className='font-content'>
          <ul className='flex sm:mr-2'>
            <li className='mx-3 text-lg'><a href="/">About</a></li>
            <li className='mx-3 text-lg'><a href="/create">Create Test</a></li>
            <li className='mx-3 text-lg'><a href="https://github.com/bora-sen/question-me">Github Link</a></li>
          </ul>
        </div>
    </header>
  )
}

export default Header