import React from 'react';
import Icons from './icons/icons';

interface Props {
  text: string;
}

export default function WarningTitle({ text }: Props) {
  return (
    <h3 className="warning__h3">
      <i className="warning__i">
        <Icons icon="Cross" />
      </i>
      {text}
    </h3>
  );
}
