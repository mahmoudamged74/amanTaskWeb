import React from 'react'
import Icon from '../lib/IconComp/Icon'

function Banner() {
  return (
    <div className='bg-[#071027] w-full flex items-center justify-center py-4 gap-3 relative px-16'>
      <p className='text-white text-[10px] md:text-sm'>شاهد أسعارًا ومزايا أخرى في برنامجنا </p>

      <div className='flex items-center gap-2'>
        <p className='text-[#FF5A00] underline text-[10px] md:text-sm'>شاهد الان </p>
        <Icon name='rightArrow' size={12} />
      </div>

      <div className='absolute right-6 md:right-16'>
        <Icon name='close' size={12} />
      </div>
    </div>
  )
}

export default Banner
