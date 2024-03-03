import React, { useEffect } from 'react';
import Card from './card/card';
import { useGetPlansQuery, useGetProjectQuery } from '@/redux/hook';
import { useProjectContext } from '@/pages/api/context';
import { useState } from 'react';
import { PlansRes } from '@/lib/data/types';

const Cards = () => {
  const { data } = useGetPlansQuery(1);
  const { projectId } = useProjectContext();
  const { data: projectData } = useGetProjectQuery({
    project: projectId ? projectId : '',
    page: 1,
  });

  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-12 gap-x-5">
      {projectData?.data ? (
        projectData?.data.length > 0 ? (
          projectData.data.map((item, idx) => <Card key={idx} card={item} />)
        ) : (
          <p className="m-auto">В проекте отсутствуют планировки для выбора</p>
        )
      ) : (
        data?.data.map((item, idx) => <Card key={idx} card={item} />)
      )}
    </div>
  );
};

export default Cards;
