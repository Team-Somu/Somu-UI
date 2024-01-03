import { forwardRef, useEffect, useRef, useState } from 'react';
import { AccordionProps } from './Accordion';
import { useAccordionContext } from './AccordionContext';
import { cn } from '@/service';

interface AccordionContentProps extends AccordionProps {}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>((props, ref) => {
  const { children } = props;
  const { isOpen } = useAccordionContext();
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      ref = contentRef;
      setContentHeight(contentRef.current.scrollHeight);

      console.log(contentRef.current.scrollHeight);
      console.log(contentRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div
      ref={contentRef}
      {...props}
      //   hidden={!isOpen}
      className={cn(isOpen ? 'animate-collapsed-down' : 'animate-collapsed-up')}
      style={{
        ['--content-height' as never]: `${contentHeight}px`,
        // height: `${contentHeight}px`,
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
});

export default AccordionContent;
