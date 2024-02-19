import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components';
import { AccordionProps } from '@/components/Accordion/Accordion';

interface AccordionSpecProps {
  type: AccordionProps['type'];
  data: {
    label: React.ReactNode;
    value: string;
    content: React.ReactNode;
  }[];
}

export default function AccordionSpec({ type, data }: AccordionSpecProps) {
  return (
    <Accordion type={type}>
      {data.map((item) => (
        <AccordionItem value={item.value}>
          <AccordionTrigger>{item.label}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
