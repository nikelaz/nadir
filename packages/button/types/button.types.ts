import { AriaButtonOptions } from '@react-aria/button';
import { ChildrenProps } from '@nadir-ui/common';

export interface ButtonProps extends AriaButtonOptions<'button'>, ChildrenProps {
  variant?: 'text' | 'pill' | 'outlined';
  variants?: string[];
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
