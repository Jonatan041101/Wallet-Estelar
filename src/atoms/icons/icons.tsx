'use client';
import React, { useState, useEffect } from 'react';
import Loader from '../Loader';
import { IconsTypes } from '@/types/icons';
interface DynamicIconProps {
  icon: IconsTypes;
}

const Icons = ({ icon }: DynamicIconProps): JSX.Element => {
  const [LoadedComponent, setLoadedComponent] = useState<JSX.Element | null>(
    null,
  );

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const importDynamic = await import(`./${icon}`);
        setLoadedComponent(importDynamic.default);
      } catch (error) {
        console.error(error);
      }
    };
    loadComponent();
  }, [icon]);

  if (!LoadedComponent) {
    return <Loader />;
  }

  return LoadedComponent;
};

export default Icons;
