import React from 'react';
import styles from '@/blocks/Ticket/blocks/Header/Header.scss';
import { Price } from '@/components/Price/Price';
import { Image } from '@/components/Image/Image';
import { getCDNImageSrcWithIata } from '@/utils/image';

interface HeaderProps {
  price: number;
  carrier: string;
}

export const Header: React.FC<HeaderProps> = ({ price, carrier }) => {
  return (
    <div className={styles.header}>
      <Price value={price} />
      <Image src={getCDNImageSrcWithIata(carrier)} />
    </div>
  );
};
