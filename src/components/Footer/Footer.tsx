import Icons from '@/atoms/icons/icons';
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__ul">
        <li className="footer__li">Términos de servicio</li>
        <li className="footer__li">Política de privacidad</li>
      </ul>
      <div className="footer__git">
        <i className="footer__i">
          <Icons icon="GitHub" />
        </i>
        GitHub
      </div>
    </footer>
  );
}
