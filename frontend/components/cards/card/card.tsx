import { PlanRes } from '@/lib/data/types';
import { formattedNum } from '@/lib/utils/utils';
import Image from 'next/image';
import React from 'react';

const Card = ({ card }: { card: PlanRes }) => {
  const price = formattedNum(Number(card.price));
  const oldPrice = formattedNum(Number(card.old_price));

  return (
    <div className="border border-black-100 rounded-base flex flex-col items-stretch h-[642px] px-10 py-8 gap-[51px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-xl">
            {card.rooms}-комнатная {card.square} м2
          </span>
          <div className="flex items-baseline gap-5">
            <span className="text-4xl">{price} ₽</span>
            <span className="text-sm line-through">{oldPrice} ₽</span>
          </div>
        </div>
        <div className="p-[19px] h-fit border border-black rounded-full">
          <Image src="/heart.svg" alt="сердце" width={19} height={19} />
        </div>
      </div>
      <div className="m-auto">
        <Image src={card.image} alt="" width={170} height={290} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-grey">Проект</span>
          <div>{card.project_title}</div>
        </div>
        <span className="block border border-b-grey"></span>
        <div className="flex items-center justify-between">
          <span className="text-grey">Этаж</span>
          <div>{card.floor}</div>
        </div>
        <span className="block border border-b-grey"></span>
        <div className="flex items-center justify-between">
          <span className="text-grey">Срок сдачи</span>
          <div>{card.release_dates}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
