import React from 'react';
import { useAlertContext } from './AlertContext';

export interface AlertTriggerProps {
  children: JSX.Element;
}

export default function AlertTrigger({ children }: AlertTriggerProps) {
  const { setIsOpen } = useAlertContext();

  return (
    <>
      {React.Children.map(children, (item) => {
        return React.cloneElement(item, {
          onClick: () => {
            setIsOpen?.(true);
          },
        });
      })}
    </>
  );
}
