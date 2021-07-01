import React from 'react';
import classnames from 'classnames';
import styles from '@/components/Checkbox/Checkbox.scss';
import { Text } from '@/components/Text/Text';
import statusDoneIcon from '@/static/icons/statusDone.svg';

interface CheckboxProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  value,
  checked,
  onChange: onChangeProp,
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeProp(event.target.checked);
  };

  const boxClass = classnames(styles.box, {
    [styles.boxChecked]: checked,
  });

  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className={boxClass}>{checked && <img src={statusDoneIcon} />}</div>
      <Text>{label}</Text>
    </label>
  );
};
