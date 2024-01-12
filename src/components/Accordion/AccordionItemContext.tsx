import { createContext, useContext } from 'react';
import { AccordionItemProps } from './AccordionItem';

type AccordionItemContext = Omit<AccordionItemProps, 'children'>;

export const AccordionItemContext = createContext<AccordionItemContext | undefined>(undefined);

export function useAccordionItemContext(): AccordionItemContext {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      'useAccordionItemContext should be used within the AccordionItemContext provider!'
    );
  }

  return context;
}
