/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import type { ComponentProps, FC } from 'react';
import { AccordionContext } from './AccordionContext';
export interface AccordionProps extends ComponentProps<'div'> {
  arrowIcon?: FC<ComponentProps<'svg'>>;
  type?: 'single' | 'multiple';
  handleItemOpen?(value: string[] | string): void;
  handleItemClose?(value: string[] | string): void;
  value?: string[] | string;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const { children, type, ...accordionProps } = props;

  const [value, setValue] = useState<string[] | string>(
    props?.value ? props?.value : type === 'multiple' ? [] : ''
  );

  const handleItemOpen = React.useCallback(
    (itemValue: string) => {
      if (type === 'multiple') {
        setValue((prevValue = []) => [...prevValue, itemValue]);
      } else {
        setValue(itemValue);
      }
    },
    [type]
  );

  const handleItemClose = React.useCallback(
    (itemValue: string) => {
      if (type === 'multiple') {
        setValue((prevValue = []) =>
          (prevValue as string[]).filter((value) => value !== itemValue)
        );
      } else {
        setValue((prevValue) => (prevValue === itemValue ? '' : itemValue));
      }
    },
    [type]
  );

  const provider = {
    ...accordionProps,
    type,
    value,
    handleItemOpen,
    handleItemClose,
  };

  return <AccordionContext.Provider value={provider}>{children}</AccordionContext.Provider>;
};

export default Accordion;