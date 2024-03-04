'use client';
import InputValue from '@/components/inputValue';
import { PricesRes } from '@/lib/data/types';
import { usePriceMinContext } from '@/pages/api/context';
import React, { useEffect, useId, useState } from 'react';

const Price = ({ prices }: { prices: PricesRes | undefined }) => {
  const {setPriceMin} = usePriceMinContext();
  const [min, setMin] = useState<string>('');
  const [_max, setMax] = useState<string>('');
  useEffect(() => {
    setPriceMin(min);
  }, [min])
  const priceInputId = useId();
  return (
    <div className="flex flex-col gap-3 flex-1">
      <label htmlFor={priceInputId} className="text-md text-grey">
        Стоимость
      </label>
      <div
        id={priceInputId}
        className="border border-grey rounded-base text-lg px-6 py-4"
      >
        {prices ? (
          <InputValue
            min={prices?.min}
            max={prices?.max}
            setMin={(minValue: string) => setMin(minValue)}
            setMax={(maxValue: string) => setMax(maxValue)}
          />
        ) : (
          <p>Выбор цены отсутствует</p>
        )}
      </div>
    </div>
  );
};

export default Price;
