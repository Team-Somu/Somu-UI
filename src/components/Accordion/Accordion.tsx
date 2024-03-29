/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import type { ComponentProps, FC } from 'react';
import { AccordionContext } from './AccordionContext';
import { VariantProps } from 'class-variance-authority';
import {
  AccordionContentVariants,
  AccordionItemVariants,
  AccordionTriggerVariants,
} from './variants';
export interface AccordionProps
  extends ComponentProps<'div'>,
    VariantProps<typeof AccordionItemVariants>,
    VariantProps<typeof AccordionTriggerVariants>,
    VariantProps<typeof AccordionContentVariants> {
  arrowIcon?: FC<ComponentProps<'svg'>>;
  type?: 'single' | 'multiple';
  // value?: string[] | string;
  defaultValue?: string;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const { children, type, ...accordionProps } = props;

  const [value, setValue] = useState<string[] | string>(
    props?.defaultValue ? (type === 'multiple' ? [props?.defaultValue] : props.defaultValue) : ''
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

  return (
    <AccordionContext.Provider value={provider}>
      <div id='accordion'>{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
