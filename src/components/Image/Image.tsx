import React from 'react';
import styles from '@/components/Image/Image.scss';

interface ImageProps {
  src: string;
}

export const Image: React.FC<ImageProps> = ({ src }) => {
  return <img src={src} />;
};
