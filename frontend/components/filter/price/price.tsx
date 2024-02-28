'use client'
import InputValue from '@/components/inputValue';
import React, { useId } from 'react'

const Price = () => {
  const priceInputId = useId();
  return (
    <div className='flex flex-col gap-3 flex-1'>
      <label htmlFor={priceInputId} className='text-md text-grey'>Стоимость</label>
      <div id={priceInputId} className='border border-grey rounded-base text-lg px-6 py-4'>
        <InputValue min={10000} max={12000000}/>
      </div>
    </div>
  )
}

export default Price