import React from 'react';
import { useModal } from '../context/ModalContext';

export default function AppModal() {
  const { isAppModalOpen, closeAppModal } = useModal();

  if (!isAppModalOpen) return null;

  return (
    <div
      className="modal-backdrop active"
      id="appModal"
      aria-hidden="false"
      onClick={(e) => {
        if (e.target.classList.contains('modal-backdrop')) closeAppModal();
      }}
    >
      <div className="modal-box app-download-box">
        <button className="modal-close" onClick={closeAppModal} aria-label="Close Modal">
          &times;
        </button>
        <div className="modal-header">
          <div className="app-icon-badge">
            <img src="/assets/womup-logo.png" alt="WOMUP" className="modal-logo-img" />
          </div>
          <h3>Download WOMUP App</h3>
          <p>Start saving and earning on your everyday shopping!</p>
        </div>
        <div className="store-buttons">
          <a href="#" className="store-btn google-play">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1 9.9-9.9v-.2L3.7 1.7l-.1.1zM17 15.6l-3.5-3.5 3.5-3.5 4 2.3c1.1.6 1.1 1.7 0 2.4l-4 2.3zM13.5 12.1L3.6 22c.4.4 1 .5 1.7.1l11.7-6.7-3.5-3.3zM13.5 11.9L17 8.6 5.3 1.9C4.6 1.5 4 1.6 3.6 2l9.9 9.9z" />
            </svg>
            <div>
              <span className="store-tag">GET IT ON</span>
              <span className="store-name">Google Play</span>
            </div>
          </a>
          <a href="#" className="store-btn app-store">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-1.04 2.76 1 .08 2.06-.51 2.68-1.26z" />
            </svg>
            <div>
              <span className="store-tag">Download on the</span>
              <span className="store-name">App Store</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
