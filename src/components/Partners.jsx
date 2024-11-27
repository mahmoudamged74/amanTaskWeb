import React from 'react'
import Image from '../lib/ImgComp/Image'

function Partners() {
  const partners = ["lukeresturant",
      "curacans",
      "savory",
      "maze",
      "casedetapas",
      "appetito",
      "gusto"]

  return (
    <div  className='flex flex-col items-center justify-center'>
    <div dir='rtl' className='text-center'>
        <p className='text-2xl md:text-5xl text-[#172A41]'>شركات ومحلات يثقون في نظام <br/> POS الخاص بنا</p>

        <div className='text-[#4E657F] text-sm md:text-base mt-4 md:w-[60%] mx-auto'>
        نظام POS الخاص بنا ليس مجرد برنامج كاشير عادي؛ إنه النظام المفضل للشركات والمتاجر الرائدة في السوق. لقد ساعدنا عشرات العملاء من مختلف القطاعات على تحسين أدائهم، إدارة مبيعاتهم بسهولة، وتحقيق نمو ملحوظ في الأرباح.            
        </div>
    </div>

    <div className='flex items-center gap-6 w-[70%] flex-wrap justify-center py-6'>
      {partners.map(partner => <Image name={partner} /> )}
    </div>
    </div>

  )
}

export default Partners
