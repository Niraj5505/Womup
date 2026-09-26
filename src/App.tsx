import React, { useState } from 'react'
import { PromoNavbar } from './components/promotional/PromoNavbar.tsx'
import { PromoHero } from './components/promotional/PromoHero.tsx'
import { PromoBanner } from './components/promotional/PromoBanner.tsx'
import { PromoHowItWorks } from './components/promotional/PromoHowItWorks.tsx'
import { PromoCategories } from './components/promotional/PromoCategories.tsx'
import { PromoShoppingCoin } from './components/promotional/PromoShoppingCoin.tsx'
import { PromoShoppingBenefits } from './components/promotional/PromoShoppingBenefits.tsx'
import { PromoReferralSection } from './components/promotional/PromoReferralSection.tsx'
import { PromoWhyWomup } from './components/promotional/PromoWhyWomup.tsx'
import { PromoFinalCta } from './components/promotional/PromoFinalCta.tsx'
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
      <div className="min-h-screen bg-[#FFF8FA] text-[#05062A] font-sans antialiased selection:bg-[#FD849F] selection:text-white relative">
        {/* 1. NAVBAR */}
        <PromoNavbar onOpenJoinModal={handleOpenJoinModal} />

        <main>
          {/* 2. HERO ADVERTISEMENT */}
          <PromoHero onOpenJoinModal={handleOpenJoinModal} />

          {/* 3. ₹2,000 SHOPPING BENEFIT PROMOTION */}
          <PromoBanner onOpenJoinModal={handleOpenJoinModal} />

          {/* 4. HOW WOMUP WORKS */}
          <PromoHowItWorks />

          {/* 5. SHOPPING CATEGORIES */}
          <PromoCategories />

          {/* 6. SHOPPING COIN */}
          <PromoShoppingCoin />

          {/* 7. SAVING EXAMPLE */}
          <PromoShoppingBenefits />

          {/* 8. REFERRAL / INCOME CONCEPT */}
          <PromoReferralSection />

          {/* 9. WHY WOMUP */}
          <PromoWhyWomup />

          {/* 10. FINAL ADVERTISEMENT CTA */}
          <PromoFinalCta onOpenJoinModal={handleOpenJoinModal} />
        </main>

        {/* 11. FOOTER */}
        <PromoFooter />

        {/* Minimal Floating Sticky Advertisement Bar */}
        <PromoFloatingAd onOpenJoinModal={handleOpenJoinModal} />

        {/* Promotional Enquiry Modal (Visual CTA Only) */}
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
