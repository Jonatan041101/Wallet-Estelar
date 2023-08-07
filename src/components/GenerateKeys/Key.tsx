import React from 'react';

interface Props {
  keyText: string;
  nameKey: string;
  id: string;
}
export default function Key({ keyText, nameKey, id }: Props) {
  return (
    <div className="key">
      <h4 className="key__h4">{nameKey} :</h4>
      <code className="key__key" id={id}>
        {keyText}
      </code>
    </div>
  );
}
