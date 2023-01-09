import React from 'react'
import style from './style.module.css'

function LoadingComponent() {
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
          <div class={style.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <span className='text-2xl font-content text-stroke'>Loading Test..</span>
    </div>

  )
}

export default LoadingComponent