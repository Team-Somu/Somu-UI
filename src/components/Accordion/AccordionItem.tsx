import React, { useCallback, useId, useMemo } from 'react';
import { AccordionProps } from './Accordion';
import { AccordionItemContext } from './AccordionItemContext';
import { Primitive } from '@/service';
import { useAccordionContext } from './AccordionContext';

type AccordionEl = React.ElementRef<typeof Primitive.div>;

export interface AccordionItemProps extends AccordionProps {
  collapsed?: boolean;
  value: string;
  onValueChange?(value: string): void;
}

const AccordionItem = React.forwardRef<AccordionEl, AccordionItemProps>((props) => {
  const { children, value: propsValue, ...accordionProps } = props;
  const { type, handleItemOpen, handleItemClose, value: contextValues } = useAccordionContext();
  const id = useId();

  const value = useMemo<string>(() => propsValue || id, [propsValue, id]);

  const collapsed = useMemo(() => {
    if (type === 'multiple') {
      return contextValues?.includes(value);
    } else {
      return contextValues === value;
    }
  }, [type, contextValues, value]);

  const onValueChange = useCallback(() => {
    if (type === 'multiple') {
      if (contextValues?.includes(value)) {
        handleItemClose?.(value);
      } else {
        handleItemOpen?.(value);
      }
    } else {
      if (contextValues === value) {
        handleItemClose?.(value);
      } else {
        handleItemOpen?.(value);
      }
    }
  }, [contextValues, handleItemClose, handleItemOpen, type, value]);

  const provider = {
    ...accordionProps,
    value,
    collapsed,
    onValueChange,
    // handleItemOpen,
    // handleItemClose,
  };
  return <AccordionItemContext.Provider value={provider}>{children}</AccordionItemContext.Provider>;
});

export default AccordionItem;
