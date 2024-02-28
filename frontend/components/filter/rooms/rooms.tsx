'use client'
import React, { useId } from 'react'
import Room from './room/room'

const Rooms = () => {
  const roomsInputId = useId();
  return (
    <div className='flex flex-col gap-3 flex-1'>
      <label htmlFor={roomsInputId} className='text-md text-grey'>Укажите количество комнат</label>
      <div className='flex justify-start flex-1 xl:gap-5 gap-2'>
        <Room />
      </div>
    </div>
  )
}

export default Rooms