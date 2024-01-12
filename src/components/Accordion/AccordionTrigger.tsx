import React, { HTMLAttributes } from 'react';
import { cn } from '@/service';
import { AccordionTriggerVariants } from './variants';
import { VariantProps } from 'class-variance-authority';
import { useAccordionItemContext } from './AccordionItemContext';

export interface AccordionTriggerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AccordionTriggerVariants> {}

const AccordionTrigger: React.FC<AccordionTriggerProps> = (props) => {
  const { children, size } = props;
  const { onValueChange, value } = useAccordionItemContext();

  return (
    <div
      onClick={() => {
        onValueChange?.(value);
      }}
      className={cn(AccordionTriggerVariants({ size }))}
    >
      {children}
    </div>
  );
};

export default AccordionTrigger;
