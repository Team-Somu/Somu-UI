import React, { useCallback, useId, useMemo } from 'react';
import { AccordionProps } from './Accordion';
import { AccordionItemContext } from './AccordionItemContext';
import { Primitive, cn } from '@/service';
import { useAccordionContext } from './AccordionContext';
import {
  AccordionContentVariants,
  AccordionItemVariants,
  AccordionTriggerVariants,
} from './variants';
import { VariantProps } from 'class-variance-authority';

type AccordionEl = React.ElementRef<typeof Primitive.div>;

export interface AccordionItemProps
  extends AccordionProps,
    VariantProps<typeof AccordionItemVariants>,
    VariantProps<typeof AccordionContentVariants>,
    VariantProps<typeof AccordionTriggerVariants> {
  collapsed?: boolean;
  value: string;
  onValueChange?(value: string): void;
}

const AccordionItem = React.forwardRef<AccordionEl, AccordionItemProps>((props) => {
  const { children, value: propsValue, rounded, ...accordionProps } = props;
  const {
    type,
    handleItemOpen,
    handleItemClose,
    value: contextValues,
    rounded: contextRounded = true,
    ...contextProps
  } = useAccordionContext();
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
    ...contextProps,
    ...accordionProps,
    value,
    collapsed,
    onValueChange,

    // handleItemOpen,
    // handleItemClose,
  };
  return (
    <AccordionItemContext.Provider value={provider}>
      <div className={cn(AccordionItemVariants({ rounded: rounded ?? contextRounded }))}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
});

export default AccordionItem;
