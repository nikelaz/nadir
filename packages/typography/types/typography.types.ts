import { ChildrenProps } from '@nadir-ui/common';

interface FontSizeProps {
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

interface MarginBottomProps {
  marginBottom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160 | 170 | 180 | 190 | 200;
}

interface MarginTopProps {
  marginTop?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160 | 170 | 180 | 190 | 200;
}

interface MarginLeftProps {
  marginLeft?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160 | 170 | 180 | 190 | 200;
}

interface MarginRightProps {
  marginRight?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160 | 170 | 180 | 190 | 200;
}

interface TextAlignProps {
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}

interface MarginProps extends MarginBottomProps, MarginTopProps, MarginLeftProps, MarginRightProps {}

export interface HeadingProps extends ChildrenProps, FontSizeProps, MarginProps, TextAlignProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface ParagraphProps extends ChildrenProps, FontSizeProps, MarginProps, TextAlignProps {}
