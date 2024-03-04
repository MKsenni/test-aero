import { useRoomsContext } from '@/pages/api/context';
import React from 'react';

const Room = ({ value, room }: { value: string; room: string }) => {
  const { rooms, setRoom } = useRoomsContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event && rooms) {
      const updatedRooms = rooms.includes(room)
        ? rooms.filter((item) => item !== room)
        : [...rooms, room];
      setRoom(updatedRooms);
    } else {
      setRoom([room]);
    }
  }

    const isActive = rooms && rooms.includes(room);

  return (
    <>
      <button
        type="button"
        className={`border border-grey rounded-base px-6 py-[14px] cursor-pointer ${
          isActive ? 'bg-blue text-white' : ''
        }`}
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  );
};

export default Room;
