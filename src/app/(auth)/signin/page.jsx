import React from 'react'

const Login= () => {
  return (
    <div className='flex justify-center items-center w-full h-screen '>
     <div className=' flex-col'>
      <p className=''>
        Login to DearDiary
      </p>
        <input type="text" placeholder='Enter Email'  className='  outline-none '/>
        <input type="text" placeholder='Enter Password'  className='  outline-none '/>
        <button>Submit</button>
      </div>
      
    </div>
  )
}

export default Login