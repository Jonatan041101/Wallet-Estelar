import { IconsTypes } from '@/types/icons';
import React from 'react';
import Stellar from './Stellar';
import CrossModal from './CrossModal';
import Cross from './Cross';
import Sun from './Sun';
import Moon from './Moon';
import Albedo from './Albedo';
import GitHub from './GitHub';
import Copy from './Copy';
import Check from './Check';

interface Props {
  icon: IconsTypes;
}

export default function Icons({ icon }: Props) {
  return (
    <>
      {icon === 'stellar' && <Stellar />}
      {icon === 'cross-modal' && <CrossModal />}
      {icon === 'cross' && <Cross />}
      {icon === 'sun' && <Sun />}
      {icon === 'moon' && <Moon />}
      {icon === 'albedo' && <Albedo />}
      {icon === 'github' && <GitHub />}
      {icon === 'copy' && <Copy />}
      {icon === 'check' && <Check />}
    </>
  );
}
