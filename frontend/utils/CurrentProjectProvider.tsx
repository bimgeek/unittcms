'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { TokenContext } from '@/utils/TokenProvider';
import useGetCurrentIds from '@/utils/useGetCurrentIds';
import { fetchProject } from '@/utils/projectsControl';

type CurrentProjectContextType = {
  projectId: number | null;
  projectName: string | null;
  isLoading: boolean;
};

const CurrentProjectContext = createContext<CurrentProjectContextType>({
  projectId: null,
  projectName: null,
  isLoading: false,
});

export function CurrentProjectProvider({ children }: { children: ReactNode }) {
  const context = useContext(TokenContext);
  const { projectId } = useGetCurrentIds();
  const [projectName, setProjectName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Reset when not in a project or not signed in
    if (!projectId || !context.isSignedIn()) {
      setProjectName(null);
      setIsLoading(false);
      return;
    }

    // Fetch only the project name - projectId is guaranteed to be non-null here
    async function fetchProjectName() {
      if (!projectId) return; // Type guard for TypeScript

      setIsLoading(true);
      try {
        const data = await fetchProject(context.token.access_token, projectId);
        setProjectName(data?.name || null);
      } catch (error) {
        setProjectName(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjectName();
  }, [projectId, context]);

  return (
    <CurrentProjectContext.Provider value={{ projectId, projectName, isLoading }}>
      {children}
    </CurrentProjectContext.Provider>
  );
}

export function useCurrentProject() {
  return useContext(CurrentProjectContext);
}
