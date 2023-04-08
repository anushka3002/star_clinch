import React from 'react'

const Homepage = () => {
  return (
    <div>
        {/* navbar */}
        <div className='h-[70px] bg-black '>
            <div className='flex justify-between px-2 my-auto h-full'>
            <img className='w-[160px] h-[40px] my-auto' src="/logo.png"></img>
            <p className='text-[white] my-auto'>Hello, Manish</p></div>
        </div>
        {/* shortlist details */}
        <div>
            <p className='text-[40px] font-bold ml-2 mt-2'>Shortlist</p>
            <p className='ml-2 text-[20px] text-[grey]'>Details :</p>
        </div>
        <div className='flex justify-between px-6 pt-1'>
            <div className='text-center'>
                <p className='text-[30px] font-medium'>Event Date</p>
                <p className='text-[20px]'>2023-02-22</p>
            </div>
            <div>
                <p className='text-[30px] font-medium'>Location</p>
                <p className='text-[20px]'>Delhi, India</p>
            </div>
        </div>
        <p className='mt-2 text-[25px] font-medium text-center'>Budget</p>
        <button className='bg-black rounded-[7px] p-3 text-[white] justify-center'>₹500,000</button>
    </div>
  )
}

export default Homepage