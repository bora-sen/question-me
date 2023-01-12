import React from 'react'
import pic from './notfound.jpg';
import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col'>
        <img src={pic} alt="" />
        <h1 className='text-4xl'>Page Not Found</h1>
        <Link to="/">Go To Home</Link>
      </div>
    </section>
  )
}

export default NotFoundPage