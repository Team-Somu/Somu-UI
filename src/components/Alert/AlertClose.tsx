import React from 'react';
import { useAlertContext } from './AlertContext';

export interface AlertCloseProps {
  children: JSX.Element;
}

export default function AlertClose({ children }: AlertCloseProps) {
  const { setIsClose } = useAlertContext();

  return (
    <>
      {React.Children.map(children, (item) => {
        return React.cloneElement(item, {
          autoFocus: true,
          onClick: () => {
            setIsClose?.(true);
          },
        });
      })}
    </>
  );
}
