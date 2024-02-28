'use client'
import InputValue from '@/components/inputValue';
import React, { useId } from 'react'

const Square = () => {
  const squareInputId = useId();
  return (
    <div className='flex flex-col gap-3 flex-1'>
      <label htmlFor={squareInputId} className='text-md text-grey'>Задайте площадь, м²</label>
      <div id={squareInputId} className='border border-grey rounded-base text-lg px-6 py-4'>
        <InputValue min={10000} max={12000000}/>
      </div>
    </div>
  )
}

export default Square