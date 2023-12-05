"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Set isBrowser to true on component mount
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Handle clicks outside the modal to close it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Add/remove event listener based on modal state
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup function to remove the event listener when modal unmounts or closes
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Render modal content using ReactDOM.createPortal
  const modalContent = isOpen && isBrowser && (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div ref={modalRef} className="z-50 bg-white p-5 rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );

  return isBrowser ? ReactDOM.createPortal(modalContent, document.body) : null;
};

export default Modal;
