import { useQueryStateResult } from '@/redux/hook';
import React from 'react';

const Counter = () => {
  const { data } = useQueryStateResult(1);

  return <div>Найдено {data?.meta.total} квартир</div>;
};

export default Counter;
