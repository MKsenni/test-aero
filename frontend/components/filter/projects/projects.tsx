'use client'
import { useId } from 'react'

const Projects = () => {
  const filterInputId = useId();
  return (
    <div className='flex flex-col gap-3 flex-1'>
      <label htmlFor={filterInputId} className='text-md text-grey'>Проект</label>
      <div className='px-6 border border-grey rounded-base'>
        <select id={filterInputId} className='py-4 text-lg w-full focus:outline-none' defaultValue="Все">
          <option className='w-full' value="all">Все</option>
        </select>
      </div>
    </div>
  )
}

export default Projects