import { useProjectContext, useRoomsContext } from '@/pages/api/context';
import { useGetProjectQuery, useQueryStateResult } from '@/redux/hook';
import React from 'react';

const Counter = () => {
  const { data } = useQueryStateResult(1);

  const { projectId } = useProjectContext();
  const { rooms } = useRoomsContext();

  const { data: projectData } = useGetProjectQuery({
    project: projectId ? projectId : '',
    page: 1,
    rooms: rooms,
  });

  return (
    <div>Найдено {projectData?.meta.total ?? data?.meta.total} квартир</div>
  );
};

export default Counter;
