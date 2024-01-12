import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { cn } from '@/service';
import { AccordionContentVariants } from './variants';
import { VariantProps } from 'class-variance-authority';
import { useAccordionItemContext } from './AccordionItemContext';

interface AccordionContentProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AccordionContentVariants> {}

const AccordionContent: React.FC<AccordionContentProps> = (props) => {
  const { children, size, className } = props;
  const { collapsed } = useAccordionItemContext();
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && collapsed) {
      console.log(contentRef.current.scrollHeight);
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [collapsed]);

  return (
    <div
      ref={contentRef}
      className={cn(
        collapsed ? 'animate-collapsed-down' : 'animate-collapsed-up',
        'overflow-hidden bg-gray10 dark:bg-gray6',
        className
      )}
      style={{
        ['--content-height' as never]: `${contentHeight}px`,
      }}
    >
      <div {...props} className={cn(AccordionContentVariants({ size }))}>
        {children}
      </div>
    </div>
  );
};

export default AccordionContent;
