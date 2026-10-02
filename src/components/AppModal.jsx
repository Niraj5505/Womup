import React, { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';

export default function AppModal() {
  const { isAppModalOpen, closeAppModal, showToast } = useModal();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [activeTab, setActiveTab] = useState('stores'); // 'stores' | 'qr'

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

  const handleSendLink = (e) => {
    e.preventDefault();
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    if (cleanNumber.length !== 10) {
      showToast('Please enter a valid 10-digit mobile number', 'error');
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      showToast(`🚀 Download link sent to +91 ${cleanNumber}! Check your SMS.`, 'success');
      setTimeout(() => {
        setIsSent(false);
        setPhoneNumber('');
      }, 4000);
    }, 900);
  };

  return (
    <div
      className="modal-backdrop active luxury-modal-backdrop"
      id="appModal"
      aria-hidden="false"
      onClick={(e) => {
        if (e.target.classList.contains('modal-backdrop')) closeAppModal();
      }}
    >
      <div className="modal-box app-download-box luxury-app-box">
        {/* Ambient Glowing Background Orbs */}
        <div className="modal-glow-orb modal-glow-pink"></div>
        <div className="modal-glow-orb modal-glow-purple"></div>

        {/* Close Button */}
        <button 
          className="modal-close luxury-close-btn" 
          onClick={closeAppModal} 
          aria-label="Close Modal"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Header */}
        <div className="modal-header luxury-header">
          {/* 3D Squircle Floating App Icon */}
          <div className="luxury-app-icon-wrapper">
            <div className="luxury-app-icon-pulse"></div>
            <div className="luxury-app-icon-card">
              <img src="/assets/womup-logo.png?v=4" alt="WOMUP" className="luxury-modal-logo" />
            </div>
            <span className="luxury-verified-badge" title="Official Verified App">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </span>
          </div>

          <div className="luxury-title-wrap">
            <h3 className="luxury-modal-title">
              Get the <span className="gradient-text-pink-purple">WOMUP App</span>
            </h3>
            <p className="luxury-modal-subtitle">
              Smart Shopping &bull; ₹2,000 Monthly Coins &bull; 7-Tier Income
            </p>

            {/* Social Proof Rating */}
            <div className="luxury-social-proof">
              <div className="stars-row">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="rating-score">4.9</span>
              <span className="proof-dot">&bull;</span>
              <span className="proof-downloads">50,000+ Smart Shoppers</span>
            </div>
          </div>
        </div>

        {/* 3 Value Hook Badges */}
        <div className="luxury-perks-row">
          <div className="perk-pill">
            <span className="perk-icon">🪙</span>
            <div className="perk-meta">
              <strong>&#8377;2,000 Coins</strong>
              <small>Free Every Month</small>
            </div>
          </div>
          <div className="perk-pill">
            <span className="perk-icon">⚡</span>
            <div className="perk-meta">
              <strong>Up to 25% Off</strong>
              <small>At Local Stores</small>
            </div>
          </div>
          <div className="perk-pill">
            <span className="perk-icon">💸</span>
            <div className="perk-meta">
              <strong>7-Level Cash</strong>
              <small>Daily Referral Pay</small>
            </div>
          </div>
        </div>

        {/* Download Method Switcher: Buttons vs QR Code */}
        <div className="modal-tab-switch">
          <button 
            type="button"
            className={`tab-btn ${activeTab === 'stores' ? 'active' : ''}`}
            onClick={() => setActiveTab('stores')}
          >
            Direct App Store
          </button>
          <button 
            type="button"
            className={`tab-btn ${activeTab === 'qr' ? 'active' : ''}`}
            onClick={() => setActiveTab('qr')}
          >
            Scan QR Code
          </button>
        </div>

        {activeTab === 'stores' ? (
          /* Store Buttons Section */
          <div className="store-buttons luxury-store-buttons">
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="store-btn luxury-store-btn google-play"
            >
              <div className="store-btn-shine"></div>
              <svg className="store-icon" viewBox="0 0 24 24" width="26" height="26">
                <path d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1 9.9-9.9v-.2L3.7 1.7l-.1.1z" fill="#00e5ff"/>
                <path d="M17 15.6l-3.5-3.5 3.5-3.5 4 2.3c1.1.6 1.1 1.7 0 2.4l-4 2.3z" fill="#ffb300"/>
                <path d="M13.5 12.1L3.6 22c.4.4 1 .5 1.7.1l11.7-6.7-3.5-3.3z" fill="#d500f9"/>
                <path d="M13.5 11.9L17 8.6 5.3 1.9C4.6 1.5 4 1.6 3.6 2l9.9 9.9z" fill="#00e676"/>
              </svg>
              <div className="store-btn-text">
                <span className="store-tag">GET IT ON</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>

            <a 
              href="https://apple.com/app-store" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="store-btn luxury-store-btn app-store"
            >
              <div className="store-btn-shine"></div>
              <svg className="store-icon" viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-1.04 2.76 1 .08 2.06-.51 2.68-1.26z" />
              </svg>
              <div className="store-btn-text">
                <span className="store-tag">DOWNLOAD ON THE</span>
                <span className="store-name">App Store</span>
              </div>
            </a>
          </div>
        ) : (
          /* QR Code Instant Scan Section */
          <div className="qr-download-panel">
            <div className="qr-box-wrap">
              <svg viewBox="0 0 120 120" width="100" height="100" className="qr-matrix-svg">
                {/* Simulated authentic matrix QR code */}
                <rect x="0" y="0" width="120" height="120" fill="#ffffff" rx="10" />
                {/* Corner Finder 1 */}
                <rect x="10" y="10" width="30" height="30" rx="6" fill="#0f172a" />
                <rect x="16" y="16" width="18" height="18" rx="3" fill="#ffffff" />
                <rect x="20" y="20" width="10" height="10" rx="2" fill="#ff1475" />
                {/* Corner Finder 2 */}
                <rect x="80" y="10" width="30" height="30" rx="6" fill="#0f172a" />
                <rect x="86" y="16" width="18" height="18" rx="3" fill="#ffffff" />
                <rect x="90" y="20" width="10" height="10" rx="2" fill="#7b5ce0" />
                {/* Corner Finder 3 */}
                <rect x="10" y="80" width="30" height="30" rx="6" fill="#0f172a" />
                <rect x="16" y="86" width="18" height="18" rx="3" fill="#ffffff" />
                <rect x="20" y="90" width="10" height="10" rx="2" fill="#0f172a" />
                {/* Matrix Dots */}
                <rect x="50" y="12" width="6" height="6" rx="1.5" fill="#0f172a" />
                <rect x="62" y="18" width="6" height="6" rx="1.5" fill="#ff1475" />
                <rect x="48" y="26" width="8" height="6" rx="1.5" fill="#0f172a" />
                <rect x="60" y="32" width="6" height="8" rx="1.5" fill="#7b5ce0" />
                <rect x="14" y="50" width="8" height="6" rx="1.5" fill="#0f172a" />
                <rect x="26" y="56" width="6" height="8" rx="1.5" fill="#0f172a" />
                <rect x="48" y="48" width="24" height="24" rx="4" fill="#fdf2f8" />
                <rect x="54" y="54" width="12" height="12" rx="3" fill="#ff1475" />
                <rect x="82" y="48" width="8" height="6" rx="1.5" fill="#0f172a" />
                <rect x="96" y="56" width="12" height="8" rx="1.5" fill="#7b5ce0" />
                <rect x="50" y="82" width="8" height="8" rx="1.5" fill="#0f172a" />
                <rect x="64" y="90" width="10" height="8" rx="1.5" fill="#0f172a" />
                <rect x="84" y="84" width="12" height="6" rx="1.5" fill="#ff1475" />
                <rect x="98" y="94" width="8" height="8" rx="1.5" fill="#0f172a" />
              </svg>
            </div>
            <div className="qr-instructions">
              <strong>Scan with Phone Camera</strong>
              <p>Direct auto-redirect to Google Play or App Store based on your OS</p>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="modal-divider-row">
          <span>or receive instant link on phone</span>
        </div>

        {/* Send Link via SMS Form */}
        <form className="luxury-sms-form" onSubmit={handleSendLink}>
          <div className="luxury-input-group">
            <span className="input-country-code">+91</span>
            <input 
              type="tel" 
              maxLength="10" 
              placeholder="Enter 10-digit mobile" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
              className="luxury-mobile-input"
              aria-label="Mobile Number"
            />
            <button 
              type="submit" 
              className={`luxury-send-btn ${isSent ? 'btn-sent' : ''}`}
              disabled={isSending || isSent}
            >
              {isSending ? (
                <span className="spinner-dots">Sending...</span>
              ) : isSent ? (
                <span>&#10003; Sent!</span>
              ) : (
                <span>Send Link</span>
              )}
            </button>
          </div>
        </form>

        {/* Footer Guarantee */}
        <div className="modal-security-note">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
          </svg>
          <span>Free &bull; 100% Safe &bull; No Spam Guaranteed</span>
        </div>
      </div>
    </div>
  );
}




