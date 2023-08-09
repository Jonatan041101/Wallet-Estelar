import Icons from '@/atoms/icons/icons';
import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <i className="header__i">
          <Icons icon="Stellar" />
        </i>
        <h3 className="header__h3">Visor de cuenta</h3>
      </div>

      <button className="header__btn">
        <i className="header__mode">
          <Icons icon="Sun" />
        </i>
      </button>
    </div>
  );
}
