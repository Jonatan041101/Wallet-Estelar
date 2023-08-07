import React from 'react';

interface Props {
  keyText: string;
  nameKey: string;
}
export default function Key({ keyText, nameKey }: Props) {
  return (
    <div className="key">
      <h4 className="key__h4">{nameKey} :</h4>
      <code className="key__key">{keyText}</code>
    </div>
  );
}
