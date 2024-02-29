import Button from '@/components/button';
import Cards from '@/components/cards/cards';
import Filter from '@/components/filter/filter';
import Info from '@/components/filter/info';
import { GetServerSidePropsContext, NextPage } from 'next';
import { filterApi, getRunningQueriesThunk } from './api/filterApi';
import { wrapper } from './api/store';

const HomePage: NextPage = () => {
  return (
    <div className="px-[70px] pt-8 bg-white">
      <header className="mb-12">
        <h1 className="text-[#040306] text-9xl">Планировки</h1>
      </header>
      <main className="flex flex-col gap-12">
        <Filter />
        <Info />
        <Cards />
        <div className="m-auto w-[580px] mb-[70px]">
          <Button />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    await store.dispatch(filterApi.endpoints.getProjects.initiate(1));
    await store.dispatch(filterApi.endpoints.getPlans.initiate(1));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return { props: {} };
  }
);
