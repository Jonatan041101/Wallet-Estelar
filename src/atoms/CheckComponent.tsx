import React from 'react';
import Icons from './icons';

interface Props {
  copy: boolean;
  text: string;
  handleChangeCopy: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckComponent({
  copy,
  text,
  handleChangeCopy,
}: Props) {
  return (
    <div className="check">
      <div className="check__container">
        <input
          className="check__input"
          type="checkbox"
          checked={copy}
          onChange={handleChangeCopy}
        />
        {copy && (
          <i className="check__i">
            <Icons icon="check" />
          </i>
        )}
      </div>
      <p className="check__p">{text}</p>
    </div>
  );
}
