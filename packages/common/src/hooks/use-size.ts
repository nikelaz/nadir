import { UseSizePropsInput } from '../../types/hooks/use-size.types';

export const useSize = (props: UseSizePropsInput, baseClassName: string) => {
  if (!props.size) return null;
  return `${baseClassName}--${props.size}`;
}
