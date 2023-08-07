import React, { useState } from 'react';

export default function useBoolean() {
  const [view, setView] = useState<boolean>(false);

  const handleChangeBoolean = () => setView(!view);

  return {
    view,
    handleChangeBoolean,
  };
}
