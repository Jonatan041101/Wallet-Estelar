'use client';
import React from 'react';
import Icons from './icons/icons';
import { IconTypes } from '@/types/icons';

type ButtonClass =
  | 'button__complete'
  | 'button__cancel'
  | 'button__under'
  | 'button__wallet'
  | 'button__transparent';

interface Props {
  handleClick: () => void;
  text: string;
  classNameBtn: ButtonClass;
  icon?: IconTypes;
  id?: string;
}

export default function Button({
  text,
  classNameBtn,
  icon,
  handleClick,
  id,
}: Props) {
  return (
    <button
      onClick={handleClick}
      className={`button ${classNameBtn}`}
      data-testid={id}
    >
      {icon && (
        <i className="button__i">
          <Icons icon={icon} />
        </i>
      )}
      <span>{text}</span>
    </button>
  );
}
