import React from 'react';
import Icons from './icons/icons';

interface Props {
  isCopied: boolean;
  text: string;
  handleChangeCopy: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckComponent({
  isCopied,
  text,
  handleChangeCopy,
}: Props) {
  return (
    <div className="check">
      <label className="check__label">
        <div className="check__container">
          <input
            className="check__input"
            type="checkbox"
            checked={isCopied}
            onChange={handleChangeCopy}
          />
          {isCopied && (
            <i className="check__i">
              <Icons icon="Check" />
            </i>
          )}
        </div>
        {text}
      </label>
    </div>
  );
}
