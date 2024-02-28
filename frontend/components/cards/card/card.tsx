import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='border border-black-100 rounded-base flex flex-col items-stretch h-[642px] px-10 py-8 gap-[51px]'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
          <span className='text-xl'>1-комнатная 21,2 м2</span>
          <div className='flex items-baseline gap-5'>
            <span className='text-4xl'>4 040 000 ₽</span>
            <span className='text-sm line-through'>7 700 000 ₽</span>
          </div>
        </div>
        <div className='p-[19px] h-fit border border-black rounded-full'>
          <Image src='/heart.svg' alt='сердце' width={19} height={19}/>
        </div>
      </div>
      <div className='m-auto'>
        <Image src='/Group 28426752.png' alt='' width={170} height={290}/>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <span className='text-grey'>Проект</span>
          <div>ЖК Мотивы</div>
        </div>
        <span className='block border border-b-grey'></span>
        <div className='flex items-center justify-between'>
          <span className='text-grey'>Этаж</span>
          <div>2 из 14</div>
        </div>
        <span className='block border border-b-grey'></span>
        <div className='flex items-center justify-between'>
          <span className='text-grey'>Срок сдачи</span>
          <div>II квартал 2025</div>
        </div>
      </div>
    </div>
  )
}

export default Card