import React from 'react';

interface Props {
  children: React.ReactNode;
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, handleSubmit }: Props) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
