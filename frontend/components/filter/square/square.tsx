'use client';
import InputValue from '@/components/inputValue';
import { SquaresRes } from '@/lib/data/types';
import React, { useId } from 'react';

const Square = ({ squareis }: { squareis?: SquaresRes }) => {
  const squareInputId = useId();
  return (
    <div className="flex flex-col gap-3 flex-1">
      <label htmlFor={squareInputId} className="text-md text-grey">
        Задайте площадь, м²
      </label>
      <div
        id={squareInputId}
        className="border border-grey rounded-base text-lg px-6 py-4"
      >
        <InputValue min={squareis?.min} max={squareis?.max} />
      </div>
    </div>
  );
};

export default Square;
