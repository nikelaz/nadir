import { ParagraphProps } from '../types/typography.types';
import { clsx } from 'clsx';
import './paragraph.css';
import './font-size-utils.css';
import './spacing-utils.css';

export const Paragraph = (props: ParagraphProps) => {
  const compProps = {
    className: clsx(
      'nadir_paragraph',
      props.fontSize && `nadir_fs-${props.fontSize}`,
      props.marginTop && `nadir_mt-${props.marginTop}`,
      props.marginRight && `nadir_mr-${props.marginRight}`,
      props.marginBottom && `nadir_mb-${props.marginBottom}`,
      props.marginLeft && `nadir_ml-${props.marginLeft}`,
      props.textAlign && `nadir_ta-${props.textAlign}`,
    ),
  }

  return <p {...compProps}>{props.children}</p>
};
