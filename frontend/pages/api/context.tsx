import React, { ReactNode, createContext, useContext, useState } from 'react';

interface ProjectContextType {
  projectId: string | null;
  setProjectId: (projectId: string | null) => void;
}

const ProjectContextDispatch = createContext<ProjectContextType | undefined>(
  undefined
);

export const useProjectContext = () => {
  const context = useContext(ProjectContextDispatch);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projectId, setProjectId] = useState<string | null>(null);

  return (
    <ProjectContextDispatch.Provider value={{ projectId, setProjectId }}>
      {children}
    </ProjectContextDispatch.Provider>
  );
};
