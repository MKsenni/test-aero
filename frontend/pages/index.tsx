import Button from '@/components/button';
import Cards from '@/components/cards/cards';
import Filter from '@/components/filter/filter';
import Info from '@/components/filter/info';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className='px-[70px] pt-8 bg-white'>
      <header className='mb-12'>
        <h1 className='text-[#040306] text-9xl'>Планировки</h1>
      </header>
      <main className='flex flex-col gap-12'>
        <Filter />
        <Info />
        <Cards />
        <div className='m-auto w-[580px] mb-[70px]'>
          <Button />
        </div>
      </main>
    </div>
  )
};

export default HomePage;
