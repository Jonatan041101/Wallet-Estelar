import Icons from '@/atoms/icons/icons';
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__ul">
        <a href="https://www.stellar.org/terms-of-service" target="_blank">
          <li className="footer__li">Términos de servicio</li>
        </a>
        <a href="https://www.stellar.org/privacy-policy" target="_blank">
          <li className="footer__li">Política de privacidad</li>
        </a>
      </ul>
      <a
        className="footer__git"
        href="https://github.com/Jonatan041101/Wallet-Stellar"
        target="_blank"
      >
        <i className="footer__i">
          <Icons icon="GitHub" />
        </i>
        GitHub
      </a>
    </footer>
  );
}
