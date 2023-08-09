import { IconsTypes } from '@/types/icons';
import { IconsComponent } from '@/utils/IconsAll';

interface Props {
  icon: IconsTypes;
}

export default function Icons({ icon }: Props) {
  return IconsComponent[icon];
}
