import React from 'react';
import { useModal } from '../context/ModalContext';

export default function HeroSection() {
  const { openAppModal, openVideoModal } = useModal();

  return (
    <section className="hero-section" id="home">
      {/* Background Ambient Elements & Waves */}
      <div className="bg-glow bg-glow-pink"></div>
      <div className="bg-glow bg-glow-cyan"></div>
      <div className="bg-wave bg-wave-1"></div>
      <div className="bg-wave bg-wave-2"></div>

      {/* Floating blurred leaves for organic depth */}
      <div className="floating-leaf leaf-left-1"></div>
      <div className="floating-leaf leaf-left-2"></div>
      <div className="floating-leaf leaf-right-1"></div>
      <div className="floating-leaf leaf-right-2"></div>

      <div className="hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          <h1 className="hero-heading">
            <span className="text-dark">Smart</span>
            <span className="text-dark">Shopping</span>
            <span className="text-gradient">Better Living</span>
          </h1>

          <p className="hero-subtext">
            <span>Save on Every Purchase</span>
            <span>Earn with Every Connection</span>
          </p>

          <div className="hero-cta-group">
            <button className="btn-join" onClick={openAppModal}>
              Join Now
            </button>
            <button className="btn-video" onClick={openVideoModal}>
              <span className="video-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 8.2V15.8C9.5 16.58 10.37 17.05 11.02 16.61L16.64 12.81C17.22 12.42 17.22 11.58 16.64 11.19L11.02 7.39C10.37 6.95 9.5 7.42 9.5 8.2Z" fill="#e60067" />
                </svg>
              </span>
              <span className="video-label">Watch Video</span>
            </button>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="hero-visual">
          {/* Stacked Floating Pills on Upper Right */}
          <div className="floating-badges">
            <div className="badge-pill badge-save" onClick={openAppModal}>Save</div>
            <div className="badge-pill badge-shop" onClick={openAppModal}>Shop</div>
            <div className="badge-pill badge-earn" onClick={openAppModal}>Earn</div>
          </div>

          {/* Hero Image of smiling woman with smartphone & veggies */}
          <div className="hero-image-wrapper">
            <img
              src="/assets/hero_woman_transparent.png"
              alt="WOMUP Smart Shopping and Earning with smartphone and fresh groceries"
              className="hero-img"
              id="heroImage"
            />
          </div>
        </div>
      </div>

      {/* Bottom Floating Features Card (Overlapping Hero) */}
      <div className="features-card-wrapper" id="features">
        <div className="features-card">
          {/* Feature 1: Monthly Shopping Coin */}
          <div className="feature-item" onClick={openAppModal}>
            <div className="feature-icon-box icon-pink">
              <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11C13 11 11 8 13.5 5C16 2 20.5 7 21.5 11H16Z" fill="#ff1475" />
                <path d="M28 11C31 11 33 8 30.5 5C28 2 23.5 7 22.5 11H28Z" fill="#ff1475" />
                <circle cx="22" cy="11" r="2" fill="#e60067" />
                <rect x="6" y="11" width="32" height="7" rx="2" fill="#ff1475" />
                <rect x="8" y="18" width="28" height="20" rx="2.5" fill="#ff1475" />
                <rect x="20" y="11" width="4" height="27" fill="#ffffff" />
                <rect x="8" y="25" width="28" height="3.5" fill="#ffffff" />
              </svg>
            </div>
            <div className="feature-text">
              <span className="line-1">Monthly</span>
              <span className="line-2">Shopping Coin</span>
            </div>
          </div>

          <div className="feature-divider"></div>

          {/* Feature 2: Wide Shop Network */}
          <div className="feature-item" onClick={openAppModal}>
            <div className="feature-icon-box icon-purple">
              <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 16L10 8H34L37 16H7Z" fill="#7c3aed" />
                <path d="M7 16C7 18 8.8 19.5 10.75 19.5C12.7 19.5 14.5 18 14.5 16H7Z" fill="#6d28d9" />
                <path d="M14.5 16C14.5 18 16.3 19.5 18.25 19.5C20.2 19.5 22 18 22 16H14.5Z" fill="#7c3aed" />
                <path d="M22 16C22 18 23.8 19.5 25.75 19.5C27.7 19.5 29.5 18 29.5 16H22Z" fill="#6d28d9" />
                <path d="M29.5 16C29.5 18 31.3 19.5 33.25 19.5C35.2 19.5 37 18 37 16H29.5Z" fill="#7c3aed" />
                <rect x="9" y="19.5" width="26" height="18.5" rx="2" fill="#7c3aed" />
                <rect x="13" y="24" width="7" height="14" rx="1.5" fill="#ffffff" />
                <rect x="23" y="24" width="8" height="8" rx="1.5" fill="#ffffff" />
              </svg>
            </div>
            <div className="feature-text">
              <span className="line-1">Wide</span>
              <span className="line-2">Shop Network</span>
            </div>
          </div>

          <div className="feature-divider"></div>

          {/* Feature 3: Real Savings on Purchases */}
          <div className="feature-item" onClick={openAppModal}>
            <div className="feature-icon-box icon-blue">
              <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="18" fill="#2563eb" />
                <circle cx="16" cy="16" r="3.2" fill="#ffffff" />
                <circle cx="28" cy="28" r="3.2" fill="#ffffff" />
                <line x1="28" y1="15" x2="16" y2="29" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="feature-text">
              <span className="line-1">Real Savings</span>
              <span className="line-2">on Purchases</span>
            </div>
          </div>

          <div className="feature-divider"></div>

          {/* Feature 4: Income Opportunity */}
          <div className="feature-item" onClick={openAppModal}>
            <div className="feature-icon-box icon-chart">
              <div className="chart-halo"></div>
              <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="barGradHero" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#db2777" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
                <rect x="7" y="29" width="6" height="10" rx="3" fill="url(#barGradHero)" />
                <rect x="15.5" y="21" width="6" height="18" rx="3" fill="url(#barGradHero)" />
                <rect x="24" y="13" width="6" height="26" rx="3" fill="url(#barGradHero)" />
                <rect x="32.5" y="6" width="6" height="33" rx="3" fill="url(#barGradHero)" />
              </svg>
            </div>
            <div className="feature-text">
              <span className="line-1">Income</span>
              <span className="line-2">Opportunity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
