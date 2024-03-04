'use client';
import Projects from './projects/projects';
import Rooms from './rooms/rooms';
import Price from './price/price';
import Square from './square/square';
import { useGetProjectsQuery } from '@/redux/hook';
import { useProjectContext } from '@/pages/api/context';
import { useEffect, useState } from 'react';

const Filter = () => {
  const { projectId } = useProjectContext();
  const { data } = useGetProjectsQuery(1);
  const [isDisabled, setIsDisabled] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    const disabled = data?.data.projects.find(
      (item) => item.id === Number(projectId)
    );
    setIsDisabled(disabled?.disabled);
  }, [projectId]);

  return (
    <section className="font-ev 3xl:flex 3xl:justify-between 3xl:items-center grid lg:grid-cols-2 grid-cols-1 gap-5">
      <Projects projects={data?.data.projects} />
      <Rooms rooms={projectId && !isDisabled ? data?.data.rooms : undefined} />
      <Price prices={projectId && !isDisabled ? data?.data.price : undefined} />
      <Square
        squareis={projectId && !isDisabled ? data?.data.square : undefined}
      />
    </section>
  );
};

export default Filter;
