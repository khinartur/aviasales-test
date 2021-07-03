import React from 'react';
import styles from '@/blocks/Ticket/blocks/Segment/Segment.scss';
import { Segment as SegmentEntity } from '@/interfaces/Ticket';
import { Info } from '@/components/Info/Info';
import { DateHelper } from '@/utils/date';
import { pluralize, TPluralMap } from '@/utils/intl';

interface SegmentProps {
  segment: SegmentEntity;
}

const TRANSFERS_PLURAL_MAP: TPluralMap = {
  one: 'пересадка',
  few: 'пересадки',
  many: 'пересадок',
  other: 'пересадок',
};

export const Segment: React.FC<SegmentProps> = ({ segment }) => {
  const { origin, destination, date, stops, duration } = segment;

  const stopsCount = stops.length;

  return (
    <div className={styles.segment}>
      <Info
        caption={`${origin} - ${destination}`}
        content={DateHelper.getFlightTimeFromDateAndDuration(
          new Date(date),
          duration,
        )}
      />
      <Info
        caption="В пути"
        content={DateHelper.beautifyHoursAndMinutesFromMinutes(duration)}
      />
      <Info
        caption={`${stopsCount} ${pluralize(stopsCount, TRANSFERS_PLURAL_MAP)}`}
        content={stops.join(',')}
      />
    </div>
  );
};
