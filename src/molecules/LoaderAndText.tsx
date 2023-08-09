import Loader from '@/atoms/Loader';
import React from 'react';

interface Props {
  text: string;
}

export default function LoaderAndText({ text }: Props) {
  return (
    <div className="loader__text">
      <Loader />
      {text}
    </div>
  );
}
