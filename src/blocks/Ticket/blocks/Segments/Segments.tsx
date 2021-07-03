import React from 'react';
import styles from '@/blocks/Ticket/blocks/Segments/Segments.scss';
import { Segment as SegmentEntity } from '@/interfaces/Ticket';
import { Segment } from '@/blocks/Ticket/blocks/Segment/Segment';

interface SegmentsProps {
  segments: SegmentEntity[];
}

export const Segments: React.FC<SegmentsProps> = ({ segments }) => {
  return (
    <div className={styles.segments}>
      {segments.map((segment, idx) => (
        <Segment key={idx} segment={segment} />
      ))}
    </div>
  );
};
