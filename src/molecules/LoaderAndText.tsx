import Loader from '@/atoms/Loader';
import { MessageLoad } from '@/utils/constants';
import React from 'react';

interface Props {
  text: MessageLoad;
}

export default function LoaderAndText({ text }: Props) {
  return (
    <div className="loader__text">
      <Loader />
      {text}
    </div>
  );
}
