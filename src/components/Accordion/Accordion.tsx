import React, { useState } from 'react';
import type { ComponentProps, FC } from 'react';
import { AccordionContext } from './AccordionContext';

export interface AccordionProps extends ComponentProps<'div'> {
  arrowIcon?: FC<ComponentProps<'svg'>>;
  isOpen?: boolean;
  setOpen?: () => void;
  //   children: ReactElement<AccordionTriggerProps> | ReactElement<AccordionTriggerProps>[];
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>((props) => {
  const { children } = props;
  const [isOpen, setOpen] = useState(props.isOpen);
  const provider = {
    ...props,
    isOpen,
    setOpen: () => {
      props.setOpen?.();
      setOpen(!isOpen);
    },
  };

  return <AccordionContext.Provider value={provider}>{children}</AccordionContext.Provider>;
});

export default Accordion;
