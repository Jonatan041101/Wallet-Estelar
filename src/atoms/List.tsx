import React from 'react';

interface Props {
  list: string[];
}
export default function List({ list }: Props) {
  return (
    <ul className="list">
      {list.map((text) => (
        <li className="list__li" key={text}>
          {text}
        </li>
      ))}
    </ul>
  );
}
