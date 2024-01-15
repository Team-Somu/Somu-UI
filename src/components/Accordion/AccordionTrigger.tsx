import React, { HTMLAttributes } from 'react';
import { cn } from '@/service';
import { AccordionTriggerVariants } from './variants';
import { VariantProps } from 'class-variance-authority';
import { useAccordionItemContext } from './AccordionItemContext';

export interface AccordionTriggerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AccordionTriggerVariants> {}

const AccordionTrigger: React.FC<AccordionTriggerProps> = (props) => {
  const { children, size, colors } = props;
  const {
    onValueChange,
    value,
    size: contextSize,
    colors: contextColors,
  } = useAccordionItemContext();

  return (
    <div
      onClick={() => {
        onValueChange?.(value);
      }}
      className={cn(
        AccordionTriggerVariants({ size: size ?? contextSize, colors: colors ?? contextColors })
      )}
    >
      {children}
    </div>
  );
};

export default AccordionTrigger;
