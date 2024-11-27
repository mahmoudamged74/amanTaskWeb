import React from 'react'
import Image from '../lib/ImgComp/Image'

function Features() {
  return (
    <div className='flex flex-col items-center justify-center mt-12'>
        <div className='flex flex-col gap-2 justify-center items-center mb-4'>
        <Image width={100} name='logo' />
        <p className='text-[#3861FB] font-bold'>Key Features</p>
        </div>
        <div dir='rtl' className='text-center mb-8'>
        <p className='text-xl font-bold md:text-3xl md:w-[45%] mx-auto text-[#172A41]'>نظام POS الخاص بنا مصمم ليكون سهل الاستخدام وفعالاً، مع واجهة بسيطة تُسهل العمل حتى للمبتدئين.</p>

        <div className='text-[#4E657F] text-start text-sm md:text-base mt-4 md:w-[60%] mx-auto'>
        تجربة الكاشير أكثر سلاسة، مع شاشة مبيعات تتيح إضافة المنتجات بسرعة وتسجيل العمليات بمرونة عالية. تتيح هذه الشاشة أيضًا تخصيص الخصومات وإضافة المنتجات المفضلة للوصول السريع، ما يجعل عملية البيع أسرع وأكثر فاعلية.
        عند استخدام واجهة إدارة المخزون، تجد سهولة في إضافة المنتجات ومتابعة مستويات المخزون. يسمح لك النظام بتصنيف المنتجات وترتيبها وفقًا للفئات، مما يسهل العثور على أي منتج بنقرة واحدة، مع تنبيهات تلقائية عند انخفاض مستوى أي صنف لضمان عدم نفاد المخزون.        </div>
    </div>

    <Image name='feature' />
    </div>

  )
}

export default Features
