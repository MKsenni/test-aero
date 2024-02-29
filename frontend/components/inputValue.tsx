import { formattedNum } from '@/lib/utils/utils';
import React, { useState } from 'react';

const InputValue = ({ min, max }: { min?: number; max?: number }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1">
        <span>от</span>
        <input
          type="text"
          size={min?.toString().length}
          value={formattedNum(Number(minVal))}
          name={'name'}
          onChange={(e) => setMinVal(Number(e.target.value))}
        />
      </div>
      <span className="border border-grey w-5"></span>
      <div className="flex gap-1">
        <span>до</span>
        <input
          type="text"
          size={max?.toString().length}
          value={formattedNum(Number(maxVal))}
          name={'name'}
          onChange={(e) => setMaxVal(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default InputValue;
