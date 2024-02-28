import React from 'react'
import Card from './card/card'

const Cards = () => {
  return (
    <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-12 gap-x-5'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Cards