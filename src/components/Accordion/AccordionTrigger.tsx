import React from 'react';
import { AccordionProps } from './Accordion';
import { useAccordionContext } from './AccordionContext';

export interface AccordionTriggerProps extends AccordionProps {}

const AccordionTrigger = React.forwardRef<HTMLDivElement, AccordionTriggerProps>((props) => {
  const { children } = props;
  // const [isOpen, setOpen] = useState(props.isOpen);
  const context = useAccordionContext();

  return <div onClick={context?.setOpen}>{children}</div>;
});

export default AccordionTrigger;
