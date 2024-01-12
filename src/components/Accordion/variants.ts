import { bgTextColor, paddingSize } from '@service';
import { cva } from 'class-variance-authority';

const defaultAccordionTriggerClass =
  'flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray10 border-b-0 rounded-t-xl focus:ring-4 ';
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
