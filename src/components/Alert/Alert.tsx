import { useMemo, useState } from 'react';
import { AlertContext } from './AlertContext';

export interface AlertProps {
  isOpen?: boolean;
  setIsOpen?: (value: boolean) => void;
  children?: React.ReactNode;
}

export default function Alert({
  isOpen: isOpenProps,
  setIsOpen: setIsOpenProps,
  children,
}: AlertProps) {
  // state
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const isControlled = useMemo(() => {
    return setIsOpenProps !== undefined;
  }, [setIsOpenProps]);
  const isOpenValue = useMemo(() => {
    return isControlled ? isOpenProps : isOpen;
  }, [isControlled, isOpen, isOpenProps]);

  // event
  const handleIsOpenChange = (value: boolean) => {
    setIsOpen(value);
    setIsOpenProps?.(value);
  };

  return (
    <AlertContext.Provider
      value={{ isOpen: isOpenValue, setIsOpen: handleIsOpenChange, isClose, setIsClose }}
    >
      {children}
    </AlertContext.Provider>
  );
}
