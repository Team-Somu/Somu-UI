import React, { ComponentProps } from 'react';
import { TabsContext } from './TabsContext';

export interface TabsProps extends ComponentProps<'div'> {
  defaultValue?: string;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { children, defaultValue } = props;
  const provider = {
    defaultValue,
  };

  return <TabsContext.Provider value={provider}>{children}</TabsContext.Provider>;
};

export default Tabs;
