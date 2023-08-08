import List from '@/atoms/List';
import WarningTitle from '@/atoms/WarningTitle';
import React from 'react';

type ClassWarning = 'warning__red' | 'warning__violet' | 'warning__yellow';

interface Props {
  list?: string[];
  text?: string;
  classWarning: ClassWarning;
  children?: React.ReactNode;
}

export default function Warning({ list, text, classWarning, children }: Props) {
  return (
    <div className={`warning ${classWarning}`}>
      {children ? (
        children
      ) : (
        <>
          {text && <WarningTitle text={text} />}
          {list && <List list={list} />}
        </>
      )}
    </div>
  );
}
