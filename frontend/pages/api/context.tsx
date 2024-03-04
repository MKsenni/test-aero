import React, { ReactNode, createContext, useContext, useState } from 'react';

interface ProjectContextType {
  projectId: string | null;
  setProjectId: (projectId: string | null) => void;
}

interface RoomsContextType {
  rooms: string[] | undefined;
  setRoom: (room: string[] | undefined) => void;
}

interface PricesMinType {
  priceMin: string | null;
  setPriceMin: (priceMin: string | null) => void;
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

const RoomsContextDispatch = createContext<RoomsContextType | undefined>(
  undefined
);

export const useRoomsContext = () => {
  const context = useContext(RoomsContextDispatch);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};

const PriceMinContextDispatch = createContext<PricesMinType | undefined>(
  undefined
);

export const usePriceMinContext = () => {
  const context = useContext(PriceMinContextDispatch);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projectId, setProjectId] = useState<string | null>(null);
  const [rooms, setRoom] = useState<string[] | undefined>(undefined);
  const [priceMin, setPriceMin] = useState<string | null>(null);

  return (
    <ProjectContextDispatch.Provider value={{ projectId, setProjectId }}>
      <RoomsContextDispatch.Provider value={{ rooms, setRoom }}>
        <PriceMinContextDispatch.Provider value={{ priceMin, setPriceMin }}>
          {children}
        </PriceMinContextDispatch.Provider>
      </RoomsContextDispatch.Provider>
    </ProjectContextDispatch.Provider>
  );
};
