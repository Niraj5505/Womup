import React, { useEffect } from 'react';
import { useModal } from '../context/ModalContext';

export default function AppModal() {
  const { isAppModalOpen, closeAppModal } = useModal();

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isAppModalOpen) {
        closeAppModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAppModalOpen, closeAppModal]);

  if (!isAppModalOpen) return null;

  return (
    <div
      className="modal-backdrop active minimal-modal-backdrop"
      id="appModal"
      aria-hidden="false"
      onClick={(e) => {
        if (e.target.classList.contains('modal-backdrop')) closeAppModal();
      }}
    >
      <div className="minimal-modal-box">
        {/* Close Button */}
        <button 
          className="minimal-close-btn" 
          onClick={closeAppModal} 
          aria-label="Close Modal"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* App Icon */}
        <div className="minimal-app-icon">
          <img src="/assets/womup-logo.png?v=5" alt="WOMUP" className="minimal-logo-img" />
        </div>

        {/* Header */}
        <h3 className="minimal-modal-title">Get the WOMUP App</h3>
        <p className="minimal-modal-subtitle">
          Shop smart, save with monthly coins, and earn rewards at your nearby local stores.
        </p>

        {/* Store Download Buttons - Official Logos */}
        <div className="minimal-store-buttons">
          <a 
            href="https://play.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="minimal-badge-link"
            aria-label="Get it on Google Play"
          >
            <img 
              src="/assets/google-play-badge.svg" 
              alt="Get it on Google Play" 
              className="store-badge-svg"
            />
          </a>

          <a 
            href="https://apple.com/app-store" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="minimal-badge-link"
            aria-label="Download on the App Store"
          >
            <img 
              src="/assets/app-store-badge.svg" 
              alt="Download on the App Store" 
              className="store-badge-svg"
            />
          </a>
        </div>

        {/* Micro-footer */}
        <p className="minimal-modal-footer">
          Available on iOS & Android &bull; Free Download
        </p>
      </div>
    </div>
  );
}
