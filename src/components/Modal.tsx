import Icons from '@/atoms/icons/icons';
import React from 'react';

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
  title?: string;
}

export default function Modal({ children, title, closeModal }: Props) {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__btn" onClick={closeModal}>
          <i className="modal__close">
            <Icons icon="cross-modal" />
          </i>
        </button>
        <h3 className="modal__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
