import React from 'react';

const Room = ({ value, number }: { value: string; number: number }) => {
  return (
    <>
      <button
        type="button"
        className="border border-grey rounded-base px-6 py-[14px] focus:bg-blue cursor-pointer focus:text-white focus:border-blue"
      >
        {value}
      </button>
    </>
  );
};

export default Room;
