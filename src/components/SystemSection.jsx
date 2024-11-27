import React from 'react'
import Image from '../lib/ImgComp/Image'
import Icon from '../lib/IconComp/Icon'

function SystemSection() {
  return (
    <div  className='flex flex-col items-center justify-center'>
        <div className='bg-[#EDF2F9] text-sm md:text-base px-4 py-2 rounded-3xl flex items-center gap-2 mb-4'>
            <p className='bg-[#3861FB] text-white py-1 px-2 rounded-2xl'>New</p>
            <p className='text-[#4E657F]'>ابدأ الآن وحقق أفضل تجربة لإدارة المبيعات والكاشير</p>
        </div>

        <div dir='rtl' className='text-center'>
            <p className='text-4xl md:text-7xl font-medium text-[#172A41]'>نظام POS متكامل</p>
            <p className='text-2xl md:text-5xl text-[#172A41]'>لجميع أنواع المحلات والصيدليات والسوبر ماركت</p>

            <div className='text-[#4E657F] text-sm md:text-base mt-4'>
                <p>حل مثالي لإدارة عمليات الكاشير وتحقيق أعلى مستويات الكفاءة</p>
                <p >مع نظام POS المتطور، يمكنك التحكم في كل تفاصيل العمل من مكان واحد، مهما كان نوع نشاطك. سواء كنت تدير صيدلية،</p>
                <p>متجر ملابس، أو سوبر ماركت، سيضمن لك النظام تجربة سلسة وأكثر تنظيمًا.</p>
            </div>
        </div>
        <button className='border font-bold border-[#FF5A00] bg-[#FF5A00] text-white text-sm md:text-base py-2 md:py-4 px-4 md:px-8 mt-4 rounded-lg cursor-pointer mb-4'
        >ابداء الان </button>

        <Image name='system' />

        <div className='flex my-4'>
          {Array(5)
           .fill(null)
           .map((_) => (
          <Icon name='star' />
        ))}

        </div>

    </div>
  )
}

export default SystemSection
