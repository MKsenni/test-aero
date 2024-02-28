import Image from 'next/image'
import React from 'react'

const Reset = () => {
  return (
    <div className='flex items-center gap-3 absolute right-0 cursor-pointer '>
      <Image width={12} height={12} src='/Vector.svg' alt='сброс фильтра' />
      <span className='text-black-100'>Очистить всё</span>
    </div>
  )
}

export default Reset