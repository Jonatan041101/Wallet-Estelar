import {
  Albedo,
  Check,
  Copy,
  Cross,
  CrossModal,
  GitHub,
  Moon,
  Send,
  Stellar,
  Sun,
} from '@/atoms/icons';
import { IconsTypes } from '@/types/icons';
type Icons = {
  [key in IconsTypes]: JSX.Element;
};

export const IconsComponent: Icons = {
  'cross-modal': <CrossModal />,
  albedo: <Albedo />,
  check: <Check />,
  copy: <Copy />,
  cross: <Cross />,
  github: <GitHub />,
  moon: <Moon />,
  send: <Send />,
  stellar: <Stellar />,
  sun: <Sun />,
};
