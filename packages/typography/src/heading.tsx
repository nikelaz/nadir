import { HeadingProps } from '../types/typography.types';
import { clsx } from 'clsx';
import './heading.css';
import './font-size-utils.css';
import './spacing-utils.css';
import './text-align-utils.css';

export const Heading = (props: HeadingProps) => {
  const compProps = {
    className: clsx(
      'nadir_heading',
      `nadir_heading--${props.level}`,
      props.fontSize && `nadir_fs-${props.fontSize}`,
      props.marginTop && `nadir_mt-${props.marginTop}`,
      props.marginRight && `nadir_mr-${props.marginRight}`,
      props.marginBottom && `nadir_mb-${props.marginBottom}`,
      props.marginLeft && `nadir_ml-${props.marginLeft}`,
      props.textAlign && `nadir_ta-${props.textAlign}`,
    ),
  }

  switch (props.level) {
    case 1:
      return <h1 {...compProps}>{props.children}</h1>;
    case 2:
      return <h2 {...compProps}>{props.children}</h2>;
    case 3:
      return <h3 {...compProps}>{props.children}</h3>;
    case 4:
      return <h4 {...compProps}>{props.children}</h4>;
    case 5:
      return <h5 {...compProps}>{props.children}</h5>;
    case 6:
      return <h6 {...compProps}>{props.children}</h6>;
  }
};
