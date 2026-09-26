import React, { useState } from 'react'
import { PromoNavbar } from './components/promotional/PromoNavbar.tsx'
import { PromoHero } from './components/promotional/PromoHero.tsx'
import { PromoHowItWorks } from './components/promotional/PromoHowItWorks.tsx'
import { PromoForCustomers } from './components/promotional/PromoForCustomers.tsx'
import { PromoForVendors } from './components/promotional/PromoForVendors.tsx'
import { PromoIncomeOpportunity } from './components/promotional/PromoIncomeOpportunity.tsx'
import { PromoCategories } from './components/promotional/PromoCategories.tsx'
import { PromoMobileApp } from './components/promotional/PromoMobileApp.tsx'
import { PromoContactJoin } from './components/promotional/PromoContactJoin.tsx'
import { PromoFooter } from './components/promotional/PromoFooter.tsx'
import { PromoFloatingAd } from './components/promotional/PromoFloatingAd.tsx'
import { JoinFreeModal } from './components/promotional/JoinFreeModal.tsx'
import { ToastProvider } from './context/ToastContext.tsx'
import { ToastContainer } from './components/ui/Toast.tsx'

export const App: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)

  const handleOpenJoinModal = () => {
    setIsJoinModalOpen(true)
  }

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false)
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#FAF7FD] text-[#0A0E2A] font-sans antialiased selection:bg-[#FF007A] selection:text-white relative">
        {/* TOP NAVIGATION BAR */}
        <PromoNavbar onOpenJoinModal={handleOpenJoinModal} />

        <main>
          {/* SECTION 1: HOME PAGE (HERO) */}
          <PromoHero onOpenJoinModal={handleOpenJoinModal} />

          {/* SECTION 2: HOW WOMUP WORKS */}
          <PromoHowItWorks onOpenJoinModal={handleOpenJoinModal} />

          {/* SECTION 3: FOR CUSTOMERS */}
          <PromoForCustomers onOpenJoinModal={handleOpenJoinModal} />

          {/* SECTION 4: FOR VENDORS */}
          <PromoForVendors onOpenJoinModal={handleOpenJoinModal} />

          {/* SECTION 5: INCOME OPPORTUNITY */}
          <PromoIncomeOpportunity onOpenJoinModal={handleOpenJoinModal} />

          {/* SECTION 6: SHOP CATEGORIES */}
          <PromoCategories onOpenJoinModal={handleOpenJoinModal} />

          {/* SECTION 7: WOMUP MOBILE APP */}
          <PromoMobileApp onOpenJoinModal={handleOpenJoinModal} />

          {/* SECTION 8: CONTACT / JOIN PAGE (BE A PART OF WOMUP) */}
          <PromoContactJoin onOpenJoinModal={handleOpenJoinModal} />
        </main>

        {/* FOOTER */}
        <PromoFooter />

        {/* Minimal Floating Sticky Action Bar */}
        <PromoFloatingAd onOpenJoinModal={handleOpenJoinModal} />

        {/* Promotional Enquiry Modal (Visual CTA) */}
        <JoinFreeModal
          isOpen={isJoinModalOpen}
          onClose={handleCloseJoinModal}
        />

        {/* Global Toast Layer */}
        <ToastContainer />
      </div>
    </ToastProvider>
  )
}

export default App
