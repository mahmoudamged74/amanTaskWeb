import React from 'react'
import Image from '../lib/ImgComp/Image'

function Footer() {
  return (
    <>
    <div className='px-4 md:px-20 pb-8 flex items-center flex-wrap justify-between'>
      <div className='flex items-start gap-12'>
        <div>
            <p className='text-[#172A41] text-lg mb-2'>Customers</p>
            <div className='flex flex-col justify-start gap-2'>
                <p className='text-[#4E657F]'>Sign In</p>
                <p className='text-[#4E657F]'>System Status</p>
                <p className='text-[#4E657F]'>Refer a Restaurant</p>
            </div>
        </div>
        <div>
            <p className='text-[#172A41] text-lg mb-2'>Products</p>
            <div className='flex flex-col justify-start gap-2'>
                <p className='text-[#4E657F]'>Point of Sale</p>
                <p className='text-[#4E657F]'>Software</p>
                <p className='text-[#4E657F]'>Hardware</p>
                <p className='text-[#4E657F]'>Intergrations</p>
                <p className='text-[#4E657F]'>Product Policy</p>
            </div>
        </div>
        <div>
            <p className='text-[#172A41] text-lg mb-2'>Company</p>
            <div className='flex flex-col justify-start gap-2'>
                <p className='text-[#4E657F]'>About Us</p>
                <p className='text-[#4E657F]'>News</p>
                <p className='text-[#4E657F]'>Community</p>
                <p className='text-[#4E657F]'>Careers</p>
                <p className='text-[#4E657F]'>Licenses</p>
            </div>
        </div>
      </div>
      <Image name='logo' width={120} />

    </div>
      <div className='mt-4 pt-4 border-t border-gray-300 w-[90%] pb-6 mx-auto flex flex-wrap items-center gap-8 md:gap-16'>
        <p className='text-[#4E657F] text-lg'>Instagram</p>
        <p className='text-[#4E657F] text-lg'>Twitter</p>
        <p className='text-[#4E657F] text-lg'>Facebook</p>
        <p className='text-[#4E657F] text-lg'>Linkedind</p>
      </div>
    </>
  )
}

export default Footer
