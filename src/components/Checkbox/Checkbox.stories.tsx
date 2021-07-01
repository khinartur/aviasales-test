import React, {useState} from "react";
import {storiesOf} from '@storybook/react';
import {Checkbox} from "@/components/Checkbox/Checkbox";

const stories = storiesOf('Чекбокс', module);

stories.add('Main', () => {
  const [checked, setChecked] = useState(false);

  const onChange = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <Checkbox
      label="Без пересадок"
      name="transfer"
      value="0"
      checked={checked}
      onChange={onChange}
    />
  );
});
