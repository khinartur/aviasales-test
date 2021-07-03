import React from 'react';
import styles from '@/components/Price/Price.scss';
import { Text } from '@/components/Text/Text';

interface InfoProps {
  caption: string;
  content: string;
}

export const Info: React.FC<InfoProps> = ({ caption, content }) => {
  return (
    <div className={styles.wrapper}>
      <Text mode="secondary" size="small" uppercase bold>
        {caption}
      </Text>
      <Text size="h4" bold>
        {content}
      </Text>
    </div>
  );
};
