import React from 'react';

type InputTypes = 'password' | 'text' | 'number';
interface Props {
  labelText: string;
  value: string;
  placeholder: string;
  type: InputTypes;
  name: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({
  labelText,
  placeholder,
  type,
  value,
  name,
  handleChange,
}: Props) {
  return (
    <label className="input__label">
      <span className="input__span">{labelText}</span>
      <input
        name={name}
        className="input__input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}
