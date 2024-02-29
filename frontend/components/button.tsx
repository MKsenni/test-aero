import { useQueryStateResult } from '@/redux/hook';
import React from 'react';

const Button = () => {
  const { data } = useQueryStateResult(1);
  return (
    <button type="button" className="bg-blue text-white w-full py-4 rounded-md">
      Показать еще {data?.meta.per_page} из {data?.meta.total}
    </button>
  );
};

export default Button;
