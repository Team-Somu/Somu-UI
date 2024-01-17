import { cn } from '@/service';
import { useAlertContext } from './AlertContext';
import { AlertContentVariants } from './variants';

export interface AlertContentProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function AlertContnet({ className, children, ...props }: AlertContentProps) {
  const { isOpen, isClose, setIsOpen, setIsClose } = useAlertContext();

  const handleTransitionEnd = () => {
    if (isOpen && isClose) {
      //   setIsOpen?.(false);
      //   setIsClose(false);
    }
  };

  console.log('isClose >>>>', isClose);

  return (
    <div
      className={cn(AlertContentVariants({ isOpen, isClose }), className)}
      {...props}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  );
}
