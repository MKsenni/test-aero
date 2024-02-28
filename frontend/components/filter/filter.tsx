import Projects from './projects/projects'
import Rooms from './rooms/rooms'
import Price from './price/price'
import Square from './square/square'

const Filter = () => {
  
  return (
    <section className='font-ev 3xl:flex 3xl:justify-between 3xl:items-center grid lg:grid-cols-2 grid-cols-1 gap-5'>
      <Projects />
      <Rooms />
      <Price />
      <Square />
    </section>
  )
}

export default Filter