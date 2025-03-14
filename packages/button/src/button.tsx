import { useRef } from 'react';
import type { ButtonProps } from '../types/button.types';
import { useButton, useFocusRing, useHover } from 'react-aria';
import { mergeProps } from '@react-aria/utils';
import { useVariant, useSize, useStateProps } from '@nadir-ui/common';
import { clsx } from 'clsx';
import './button.css';
const baseClassName = 'nadir_button';

export const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  const variant = useVariant(props, baseClassName);
  const size = useSize(props, baseClassName);
  const { focusProps, isFocusVisible } = useFocusRing();
  const { hoverProps, isHovered } = useHover({ isDisabled: props.isDisabled });

  const stateProps = useStateProps([
    { condition: isHovered, prop: 'data-hovered' },
    { condition: isPressed, prop: 'data-pressed' },
    { condition: isFocusVisible, prop: 'data-focus-visible' },
  ]);

  const compProps: any = mergeProps(
    buttonProps,
    hoverProps,
    focusProps,
    stateProps,
  );

  return (
    <button
      ref={ref}
      className={clsx(baseClassName, variant, size)}
      {...compProps}
    >
      {props.children}
    </button>
  );
};
