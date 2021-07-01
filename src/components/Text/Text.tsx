import React from 'react';
import classnames from 'classnames';
import styles from '@/components/Text/Text.scss';

type TextMode = 'primary' | 'secondary' | 'contrast';

type TextSize = 'h3' | 'h4' | 'base' | 'small';

const TAG_BY_SIZE: { [K in TextSize]: string } = {
  h3: 'h3',
  h4: 'p',
  base: 'p',
  small: 'p',
};

interface TextProps {
  mode?: TextMode;
  size?: TextSize;
  bold?: boolean;
  uppercase?: boolean;
}

export const Text: React.FC<TextProps> = ({
  mode = 'primary',
  size = 'base',
  bold,
  uppercase,
  children,
}) => {
  const className = classnames(styles.base, [styles[size]], {
    [styles.primary]: mode === 'primary',
    [styles.secondary]: mode === 'secondary',
    [styles.contrast]: mode === 'contrast',
    [styles.bold]: bold,
  });

  let text = children as string;
  if (uppercase) {
    text = text.toUpperCase();
  }

  return React.createElement(TAG_BY_SIZE[size], { className }, text);
};
