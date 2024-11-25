'use client';

import React, { ReactNode } from 'react';

interface Props {
  show: boolean;
  onClose: () => void;
  containerClass?: string;
  children?: ReactNode;
  className?: string;
}

function Modal({ show, onClose, containerClass, className, children }: Props) {
  // Compute dynamic class names based on the 'show' prop
  const modalClasses = `z-[100] fixed top-0 left-0 w-full h-full flex items-center justify-center ${
    show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
  } transition-all duration-300`;

  return (
    <div className={modalClasses}>
      {/* Background overlay to capture clicks outside the modal */}
      <div
        className={`absolute w-full h-full bg-black opacity-60 ${className}`}
        onClick={onClose}
      />
      {/* Modal content */}
      <div
        className={`z-10 shadow-light absolute w-1/2 ${containerClass}`}
        id="scroll-2"
      >
        {show ? children : null}
      </div>
    </div>
  );
}

export default Modal;
