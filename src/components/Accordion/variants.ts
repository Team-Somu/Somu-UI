import { bgTextColor, paddingSize } from '@service';
import { cva } from 'class-variance-authority';

const defaultAccordionItemClass = `overflow-hidden `;

export const AccordionItemVariants = cva(defaultAccordionItemClass, {
  variants: {
    rounded: {
      false: ``,
      true: `first:rounded-t-xl last:rounded-b-xl`,
    },
  },
  defaultVariants: {
    rounded: true,
  },
});

const defaultAccordionTriggerClass =
  'flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray10  focus:ring-4 ';
export const AccordionTriggerVariants = cva(defaultAccordionTriggerClass, {
  variants: {
    size: {
      ...paddingSize,
    },
    colors: {
      ...bgTextColor,
    },
  },
  defaultVariants: {
    size: 'm',
    colors: 'primary',
  },
});

const defaultAccordionContentClass = 'border-b-0';

export const AccordionContentVariants = cva(defaultAccordionContentClass, {
  variants: {
    size: {
      ...paddingSize,
    },
  },
  defaultVariants: {
    size: 'm',
  },
});
