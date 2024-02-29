import React from 'react';
import Counter from './counter';
import Reset from './reset';

const Info = () => {
  return (
    <div className="flex justify-center relative pb-16 font-ev border-b-[1px] border-b-grey">
      <Counter />
      <Reset />
    </div>
  );
};

export default Info;
