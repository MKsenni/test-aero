import React from 'react'

const InputValue = ({min, max} : {min: number, max: number}) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-1'>
        <span>от</span>
        <input type='text' size={min.toString().length} value={min} name={'name'}/>
      </div>
      <span className='border border-grey w-5'></span>
      <div className='flex gap-1'>
        <span>до</span>
        <input type='text' size={max.toString().length} value={max} name={'name'}/>
      </div>
    </div>
  )
}

export default InputValue