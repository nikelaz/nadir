import { useRef } from 'react';
import type { ButtonProps } from '../types/button.types';
import { useButton } from '@react-aria/button';
import { useVariant, useSize } from '@nadir-ui/common';
import { clsx } from 'clsx';
import './button.css';

export const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  const baseClassName = 'nadir_button';
  const variant = useVariant(props, baseClassName);
  const size = useSize(props, baseClassName);

  return (
    <button
      className={clsx(baseClassName, variant, size)}
      ref={ref}
      {...buttonProps}
    >
      {props.children}
    </button>
  );
};
