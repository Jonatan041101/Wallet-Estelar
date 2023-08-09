import { readdirSync, writeFileSync } from 'fs';

const cleanFileName = (fileName: string) => {
  const name = fileName.split('.')[0];
  return name;
};
export const creteIconsTypes = () => {
  let typesIcons = 'export type IconsTypes = ';
  readdirSync('./src/atoms/icons').filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index' && cleanName !== 'icons') {
      typesIcons += `| '${cleanName}' `;
    }
  });

  writeFileSync('./src/types/icons.d.ts', typesIcons);
};
