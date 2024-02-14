import { createContext, useContext } from 'react';
import { TabsProps } from './Tabs';

type TabsContext = Omit<TabsProps, 'children'>;

export const TabsContext = createContext<TabsContext | undefined>(undefined);

export function useTabsContext(): TabsContext {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('useTabsContext should be used within the TabsContext provider!');
  }

  return context;
}
