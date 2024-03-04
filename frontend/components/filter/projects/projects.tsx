'use client';
import { ProjectRes } from '@/lib/data/types';
import { useEffect, useId, useState } from 'react';
import router from 'next/router';
import { useProjectContext } from '@/pages/api/context';

const Projects = ({ projects }: { projects: ProjectRes[] | undefined }) => {
  const filterInputId = useId();
  const [projectId, setProject] = useState('');
  const { setProjectId } = useProjectContext();

  const applySearchWord = (searchIdProject: string | null) => {
    searchIdProject
      ? router.push({
          pathname: '/',
          query: { search: `${projectId}`, page: '1' },
        })
      : router.push({
          pathname: '/',
          query: { page: '1' },
        });
  };
  useEffect(() => {
    if (projectId !== 'all') {
      applySearchWord(projectId);
      setProjectId(projectId);
    }
  }, [projectId]);

  return (
    <div className="flex flex-col gap-3 flex-1">
      <label htmlFor={filterInputId} className="text-md text-grey">
        Проект
      </label>
      <div className="px-6 border border-grey rounded-base">
        {projects ? (
          <select
            id={filterInputId}
            className="py-4 text-lg w-full focus:outline-none"
            defaultValue="all"
            onChange={(e) => setProject(e.target.value)}
          >
            <option className="w-full" value="all">
              Все
            </option>
            {projects.map((item) => (
              <option key={item.id} className="w-full" value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        ) : (
          <p>Проекты отсутствуют</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
