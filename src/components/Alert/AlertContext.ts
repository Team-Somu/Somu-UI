import { createContext, useContext } from 'react';
import { AlertProps } from './Alert';

interface AlertContext extends Omit<AlertProps, 'children'> {
  isClose: boolean;
  setIsClose: (value: boolean) => void;
}

export const AlertContext = createContext<AlertContext>({
  isClose: false,
  setIsClose: () => {},
});

export function useAlertContext(): AlertContext {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('useAlertContext should be used within the AlertContext provider!');
  }

  return context;
}
