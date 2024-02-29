import React from 'react';
import Card from './card/card';
import { useGetPlansQuery } from '@/redux/hook';

const Cards = () => {
  const { data } = useGetPlansQuery(1);
  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-12 gap-x-5">
      {data?.data &&
        data.data.map((item, idx) => <Card key={idx} card={item} />)}
    </div>
  );
};

export default Cards;
