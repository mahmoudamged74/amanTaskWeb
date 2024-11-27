import React from 'react'
import Image from '../../lib/ImgComp/Image'
import Icon from '../../lib/IconComp/Icon'
import SideMenu from './SideMenu'
import { NavLink } from 'react-router-dom'

function index() {
  return (
    <div className='w-full flex md:justify-center justify-end px-4 md:px-16 py-4 md:py-8 items-center relative'>
      <Image name='logo' className='absolute left-2 md:left-16 scale-50 md:scale-100' />

        <div className='hidden items-center gap-8 md:flex'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <NavLink to="priceList" ><p>المنتجات</p></NavLink>
                <Icon name='downArrow' size={12} />
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
            <NavLink to="offers" ><p>عروض</p></NavLink>    
                <Icon name='downArrow' size={12} />
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <NavLink to="priceList" ><p>قائمة الاسعار</p></NavLink>  
                <Icon name='downArrow' size={12} />
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <NavLink to="/" ><p>الرئيسيه</p></NavLink>  
            </div>
        </div>

        <div className='md:flex hidden items-center gap-2 absolute right-16'>
            <button className='border font-bold border-[#879AAF] text-[#879AAF] p-2 rounded cursor-pointer'>تسجيل الدخول</button>
            <button className='border font-bold border-[#3861FB] bg-[#3861FB] text-white p-2 rounded cursor-pointer'>تجربة مجانية</button>
        </div>

        <SideMenu />

    </div>
  )
}

export default index

