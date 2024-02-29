'use client';
import { ProjectRes } from '@/lib/data/types';
import { useId, useState } from 'react';

const Projects = ({ projects }: { projects: ProjectRes[] | undefined }) => {
  const filterInputId = useId();
  const titles = projects?.filter((item) => item.title);

  const [projectVal, setProject] = useState('orange');

  return (
    <div className="flex flex-col gap-3 flex-1">
      <label htmlFor={filterInputId} className="text-md text-grey">
        Проект
      </label>
      <div className="px-6 border border-grey rounded-base">
        {titles && (
          <select
            id={filterInputId}
            className="py-4 text-lg w-full focus:outline-none"
            defaultValue="Все"
            onChange={(e) => setProject(e.target.value)}
          >
            <option className="w-full" value="all">
              Все
            </option>
            {titles.map((title, idx) => (
              <option key={idx} className="w-full" value={title.title}>
                {title.title}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default Projects;
