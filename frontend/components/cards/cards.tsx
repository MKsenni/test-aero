import React, { useEffect } from 'react';
import Card from './card/card';
import { useGetPlansQuery, useGetProjectQuery } from '@/redux/hook';
import { usePriceMinContext, useProjectContext, useRoomsContext } from '@/pages/api/context';
import router from 'next/router';

const Cards = () => {
  const { data } = useGetPlansQuery(1);
  const { projectId } = useProjectContext();
  const { rooms } = useRoomsContext();
  const {priceMin} = usePriceMinContext();

  useEffect(() => {
    router.push({
      pathname: '/',
      query: { search: `${projectId}`, room: rooms, pricesMin: `${priceMin}`, page: '1' },
    });
  }, [rooms]);

  const { data: projectData } = useGetProjectQuery({
    project: projectId ?? '',
    page: 1,
    rooms: rooms,
    pricesMin: priceMin ?? '',
  });

  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-12 gap-x-5">
      {projectData?.data ? (
        projectData?.data.length > 0 ? (
          projectData.data.map((item, idx) => <Card key={idx} card={item} />)
        ) : (
          <p className="m-auto">В проекте отсутствуют планировки для выбора</p>
        )
      ) : (
        data?.data.map((item, idx) => <Card key={idx} card={item} />)
      )}
    </div>
  );
};

export default Cards;
