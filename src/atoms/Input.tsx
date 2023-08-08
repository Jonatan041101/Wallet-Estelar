import React from 'react';

interface Props {
  labelText: string;
  value: string;
  placeholder: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ labelText, value, handleChange }: Props) {
  return (
    <label className="input__label">
      <span className="input__span">{labelText}</span>
      <input
        className="input__input"
        placeholder="Comienza con S, ejemplo: SCHK…ZLJK"
        type="password"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}
