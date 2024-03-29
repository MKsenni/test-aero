'use client';
import React, { useId } from 'react';
import Room from './room/room';
import { RoomsRes, RoomsType } from '@/lib/data/types';

const Rooms = ({ rooms }: { rooms?: RoomsRes[] }) => {
  const roomsInputId = useId();
  const roomsArr = rooms?.filter((item) => item.number);

  return (
    <div className="flex flex-col gap-3 flex-1">
      <label htmlFor={roomsInputId} className="text-md text-grey">
        Укажите количество комнат
      </label>
      <div className="flex justify-start flex-1 xl:gap-5 gap-2">
        {roomsArr ? (
          roomsArr.map((room, idx) => {
            switch (room.number) {
              case 0:
                return <Room key={idx} value={RoomsType.ST} room={'0'} />;
              case 1:
                return <Room key={idx} value={RoomsType.ONE} room={'1'} />;
              case 2:
                return <Room key={idx} value={RoomsType.TWO} room={'2'} />;
              case 3:
                return <Room key={idx} value={RoomsType.THREE} room={'3'} />;
              case 4:
                return <Room key={idx} value={RoomsType.FOUR} room={'4'} />;
              default:
                return <p>no results</p>;
            }
          })
        ) : (
          <p>Выбор количества комнат отсутствует</p>
        )}
      </div>
    </div>
  );
};

export default Rooms;
