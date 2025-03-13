import { UseVariantPropsInput } from '../../types/hooks/use-variant.types';

export const useVariant = (props: UseVariantPropsInput, baseClassName: string) => {
  if (props.variants && props.variants.length) {
    return props.variants.map(variant => `${baseClassName}--${variant}`);
  }

  if (!props.variant) return null;
  return `${baseClassName}--${props.variant}`;
}
