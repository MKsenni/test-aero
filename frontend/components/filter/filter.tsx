import Projects from './projects/projects';
import Rooms from './rooms/rooms';
import Price from './price/price';
import Square from './square/square';
import { useGetProjectQuery, useGetProjectsQuery } from '@/redux/hook';
import { useProjectContext } from '@/pages/api/context';
import { useState } from 'react';
import { PlansRes } from '@/lib/data/types';

const Filter = () => {
  const { data } = useGetProjectsQuery(1);
  const { projectId } = useProjectContext();
  // const [chooseProject, setChooseProject] = useState<PlansRes | undefined>();
  // if (projectId) {
  //   const { data } = useGetProjectQuery({project: projectId, page: 1});
  //   setChooseProject(data);
  // }
  return (
    <section className="font-ev 3xl:flex 3xl:justify-between 3xl:items-center grid lg:grid-cols-2 grid-cols-1 gap-5">
      <Projects projects={data?.data.projects} />
      <Rooms rooms={data?.data.rooms} />
      <Price prices={data?.data.price} />
      <Square squareis={data?.data.square} />
    </section>
  );
};

export default Filter;
