import React from 'react'
import Image from '../lib/ImgComp/Image'
import Icon from '../lib/IconComp/Icon'

function HowUse() {
  return (
    <div className='flex flex-col items-center justify-center mt-12'>
    <p className='text-[#3861FB] font-bold'>كيف يعمل؟</p>
    <div dir='rtl' className='text-center my-8'>
    <p className='text-xl font-bold md:text-3xl md:w-[45%] mx-auto text-[#172A41]'>لماذا تختار نظام POS لدينا؟</p>

    <div className='text-[#4E657F] text-center text-sm md:text-base mt-4 md:w-[50%] mx-auto'>
    اكتشف كيف يمكن لنظام POS الخاص بنا أن يجعل إدارة عملك أسهل وأكثر فعالية. احصل على عرض مجاني الآن وابدأ رحلتك نحو تطوير أعمالك!        </div>
</div>

    <Image name='howuse' width='full' />

    <div className='flex items-start gap-4 justify-center flex-wrap mt-12'>
        <div dir="rtl" className='flex flex-col text-center justify-center items-center md:w-[30%]'>
            <Icon name='thinder' size={40} />
            <p className='text-[#101828] text-xl'>تحديثات دورية</p>
            <p className='text-[#667085]'>النظام يتطور باستمرار لتلبية احتياجات السوق وتوفير أفضل تجربة.</p>
        </div>
        <div dir="rtl" className='flex flex-col text-center justify-center items-center md:w-[30%]'>
            <Icon name='chats' size={40} />
            <p className='text-[#101828] text-xl'>دعم تقني مستمر:</p>
            <p className='text-[#667085]'>فريق متخصص متاح على مدار الساعة لمساعدتك.</p>
        </div>
        <div dir="rtl" className='flex flex-col text-center justify-center items-center md:w-[30%]'>
            <Icon name='flower' size={40} />
            <p className='text-[#101828] text-xl'>أمان عالي للبيانات:</p>
            <p className='text-[#667085]'>جميع المعلومات محمية بأنظمة تشفير متطورة.</p>
        </div>
    </div>
</div>
  )
}

export default HowUse
