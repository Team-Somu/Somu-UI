import { cva } from 'class-variance-authority';

const defaultAlertContentClass =
  'fixed top-[50%] left-[50%] -translate-x-[50%] transition-all duration-1000';

export const AlertContentVariants = cva(defaultAlertContentClass, {
  variants: {
    isOpen: {
      true: 'animate-alert-fade-up',
      false: 'hidden',
    },
    isClose: {
      true: '!translate-y-[0%]',
      false: '',
    },
  },
  defaultVariants: {
    isOpen: false,
    isClose: false,
  },
});
