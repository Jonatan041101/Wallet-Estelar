import Icons from '@/atoms/icons/icons';
import Image from 'next/image';
import React from 'react';
import Profile from './Profile';

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <a href="https://stellar.org/" target="_blank">
          <i className="header__i">
            <Icons icon="Stellar" />
          </i>
        </a>
        <h3 className="header__h3">Visor de cuenta</h3>
      </div>
      <div className="header__profile">
        <Profile />
        <button className="header__btn">
          <i className="header__mode">
            <Icons icon="Sun" />
          </i>
        </button>
      </div>
    </div>
  );
}
