import React, { useState } from 'react';
import Icon from '../../lib/IconComp/Icon';
import Image from '../../lib/ImgComp/Image';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='block md:hidden'>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className=" flex flex-col items-center text-black justify-center w-6 h-6 bg-gray-100 rounded-md shadow-md md:hidden"
      >
       <div className='w-full h-[2px] bg-slate-400' />
       <div className='w-full h-[2px] bg-slate-400 my-1' />
       <div className='w-full h-[2px] bg-slate-400' />
      </button>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <Image name='logo' width={24} />

          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-4">
        <div className='items-start gap-4 flex flex-col'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <p>المنتجات</p>
                <Icon name='downArrow' size={12} />
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <p>عروض</p>
                <Icon name='downArrow' size={12} />
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <p>قائمة الاسعار</p>
                <Icon name='downArrow' size={12} />
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <p>الرئيسيه</p>
            </div>
        </div>

        <div className='flex flex-col items-start gap-2'>
            <button className='border font-bold border-[#879AAF] text-[#879AAF] p-2 rounded cursor-pointer'>تسجيل الدخول</button>
            <button className='border font-bold border-[#3861FB] bg-[#3861FB] text-white p-2 rounded cursor-pointer'>تجربة مجانية</button>
        </div>

        </nav>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default SideMenu;
