import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppModal from './components/AppModal';
import VideoModal from './components/VideoModal';
import SuccessModal from './components/SuccessModal';
import Toast from './components/Toast';
import BackToTop from './components/BackToTop';
import ScrollRevealManager from './components/ScrollRevealManager';

// Pages
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import ForCustomers from './pages/ForCustomers';
import ForVendors from './pages/ForVendors';
import ShopCategories from './pages/ShopCategories';
import IncomeOpportunity from './pages/IncomeOpportunity';
import MobileApp from './pages/MobileApp';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ModalProvider>
      <div className="page-wrapper">
        <ScrollToTop />
        <ScrollRevealManager />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/how-it-works.html" element={<HowItWorks />} />

          <Route path="/for-customers" element={<ForCustomers />} />
          <Route path="/for-customers.html" element={<ForCustomers />} />

          <Route path="/for-vendors" element={<ForVendors />} />
          <Route path="/for-vendors.html" element={<ForVendors />} />

          <Route path="/shop-categories" element={<ShopCategories />} />
          <Route path="/shop-categories.html" element={<ShopCategories />} />

          <Route path="/income-opportunity" element={<IncomeOpportunity />} />
          <Route path="/income-opportunity.html" element={<IncomeOpportunity />} />

          <Route path="/womup-mobile-app" element={<MobileApp />} />
          <Route path="/womup-mobile-app.html" element={<MobileApp />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.html" element={<Contact />} />

          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />

        {/* Global Modals & Notifications */}
        <AppModal />
        <VideoModal />
        <SuccessModal />
        <Toast />
        <BackToTop />
      </div>
    </ModalProvider>
  );
}

