import React, { useState } from 'react';

const InputValue = ({
  min,
  max,
  setMin,
  setMax,
}: {
  min?: number;
  max?: number;
  setMin: (minValue: string) => void;
  setMax: (maxValue: string) => void;
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1">
        <span>от</span>
        <input
          type="text"
          value={minVal?.toLocaleString()}
          name="minValue"
          onChange={(e) => {
            const cleanedValue = e.target.value.replace(/\s/g, '');
            setMinVal(Number(cleanedValue));
            setMin(cleanedValue);
          }}
        />
      </div>
      <span className="border border-grey w-5"></span>
      <div className="flex gap-1">
        <span>до</span>
        <input
          type="text"
          value={maxVal?.toLocaleString()}
          name="maxValue"
          onChange={(e) => {
            const cleanedValue = e.target.value.replace(/\s/g, '');
            setMaxVal(Number(cleanedValue));
            setMax(cleanedValue);
          }}
        />
      </div>
    </div>
  );
};

export default InputValue;
