import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  MapPin,
  Coins,
  Store,
  Clock,
  Star,
  ShieldAlert,
  ArrowRight,
  Filter,
  X,
  Receipt,
  Info,
} from 'lucide-react'
import { Container } from '../../components/ui/Container.tsx'
import { Badge } from '../../components/ui/Badge.tsx'
import { Card } from '../../components/ui/Card.tsx'
import { Button } from '../../components/ui/Button.tsx'
import { IconBox } from '../../components/ui/IconBox.tsx'
import { Modal } from '../../components/ui/Modal.tsx'
import {
  DEMO_MERCHANTS,
  PARTNER_CATEGORIES,
  type DemoMerchant,
  type PartnerCategory,
} from '../../data/demoMerchants.ts'

export const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [activeMerchant, setActiveMerchant] = useState<DemoMerchant | null>(null)

  // Filtered merchants based on category and search query
  const filteredMerchants = useMemo(() => {
    return DEMO_MERCHANTS.filter((m) => {
      const matchesCategory =
        selectedCategory === 'All' || m.category === selectedCategory

      const query = searchQuery.trim().toLowerCase()
      const matchesSearch =
        !query ||
        m.name.toLowerCase().includes(query) ||
        m.location.toLowerCase().includes(query) ||
        m.category.toLowerCase().includes(query) ||
        m.categoryLabel.toLowerCase().includes(query) ||
        m.city.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 pb-24">
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-purple-900 via-womup-purple to-purple-950 text-white relative overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-womup-magenta/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <Container size="lg" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-purple-200 mb-6">
              <Store className="w-3.5 h-3.5 text-amber-300" />
              <span>Merchant Network • Demo Showcase</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display mb-4">
              Shop With WOMUP Partners
            </h1>

            <p className="text-base sm:text-lg text-purple-100/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Explore participating merchant categories and see how you can save on your daily grocery, pharmacy, dining, and lifestyle purchases using WOMUP Shopping Coins.
            </p>

            {/* Search Input Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by merchant name, location (e.g. Pune, Bengaluru, Noida), or category..."
                  className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-medium shadow-lg border-2 border-transparent focus:border-womup-magenta focus:outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Demo Disclosure Pill */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-purple-200/80">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Demonstration directory: Simulated partner listings for preview.</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CATEGORY FILTER BAR */}
      {/* ------------------------------------------------------------- */}
      <section className="sticky top-18 lg:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs py-3.5">
        <Container size="lg">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 pt-0.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider pr-2 border-r border-slate-200 flex-shrink-0">
              <Filter className="w-3.5 h-3.5 text-womup-purple" />
              <span>Category</span>
            </div>

            {PARTNER_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex-shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-womup-purple text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* DEMO MERCHANTS DIRECTORY GRID */}
      {/* ------------------------------------------------------------- */}
      <Container size="lg" className="pt-10">
        {/* Results Header with Compliance Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div>
            <h2 className="text-xl font-bold text-slate-950 flex items-center gap-2">
              <span>{selectedCategory === 'All' ? 'All Partner Categories' : `${selectedCategory} Stores`}</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-womup-purple">
                {filteredMerchants.length} Demo {filteredMerchants.length === 1 ? 'Merchant' : 'Merchants'}
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Showing illustrative partner outlets where WOMUP Shopping Coins can be applied.
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 font-semibold self-start sm:self-auto">
            <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>Strictly Demo Data • No Real Affiliations</span>
          </div>
        </div>

        {/* Merchants Grid */}
        {filteredMerchants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMerchants.map((merchant) => (
              <motion.div
                key={merchant.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  variant="default"
                  className="h-full flex flex-col justify-between overflow-hidden border-slate-200 hover:border-womup-purple/30 hover:shadow-womup-card transition-all group"
                  padding="none"
                >
                  {/* Top Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={merchant.image}
                      alt={merchant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* DEMO Overlay Pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-[10px] font-black tracking-wider uppercase text-amber-300 border border-amber-300/30 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      DEMO MERCHANT
                    </div>

                    {/* Category Pill */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-900 shadow-xs">
                      {merchant.category}
                    </div>

                    {/* Rating Pill */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{merchant.rating}</span>
                      <span className="text-[10px] text-slate-300">({merchant.reviewCount})</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Merchant Title */}
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-womup-purple transition-colors line-clamp-1 mb-1.5">
                        {merchant.name}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-womup-purple flex-shrink-0" />
                        <span className="truncate">{merchant.location}</span>
                      </div>

                      {/* Shopping Coin Benefit Box */}
                      <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 mb-4">
                        <div className="flex items-start gap-2">
                          <Coins className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[11px] font-black uppercase text-amber-900 tracking-wider block">
                              Shopping Coin Benefit
                            </span>
                            <p className="text-xs font-bold text-slate-900 mt-0.5 leading-snug">
                              {merchant.shoppingCoinInfo}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Hours & Availability */}
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-4">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Hours: {merchant.hours}</span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button
                      variant="primary"
                      size="sm"
                      fullWidth
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      onClick={() => setActiveMerchant(merchant)}
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="p-12 text-center rounded-3xl bg-white border border-slate-200 shadow-xs max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4 text-womup-purple">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Demo Merchants Found</h3>
            <p className="text-xs text-slate-500 mb-6">
              No demo partners match "{searchQuery}" in category "{selectedCategory}". Try clearing your search or switching categories.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
            >
              Reset All Filters
            </Button>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* COMPLIANCE FOOTER BANNER */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-100/90 border border-slate-200 flex items-start gap-4 text-xs text-slate-700 leading-relaxed">
          <Info className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              Important Disclaimer Regarding Merchant Partners
            </h4>
            <p className="text-slate-600">
              All merchant names, images, addresses, and discount figures presented on this page are simulated demonstration (mock) data. They are designed to showcase the WOMUP promotional model and user interface ahead of live commercial rollouts. WOMUP does not claim active partnerships with any independent business or brand shown here. Official merchant onboarding and verified local store listings will be published under official platform agreements.
            </p>
          </div>
        </div>
      </Container>

      {/* ------------------------------------------------------------- */}
      {/* MERCHANT DETAILS MODAL */}
      {/* ------------------------------------------------------------- */}
      <Modal
        isOpen={activeMerchant !== null}
        onClose={() => setActiveMerchant(null)}
        title={activeMerchant?.name || 'Merchant Details'}
        description={`Category: ${activeMerchant?.categoryLabel || ''} • ${activeMerchant?.city || ''}`}
        icon={
          <IconBox color="purple" size="md" shape="squircle">
            <Store className="w-5 h-5 text-womup-purple" />
          </IconBox>
        }
        footer={
          <div className="w-full flex items-center justify-between gap-3">
            <span className="text-[11px] text-slate-400">
              Demo listing for illustration only.
            </span>
            <Button variant="primary" size="sm" onClick={() => setActiveMerchant(null)}>
              Close Details
            </Button>
          </div>
        }
      >
        {activeMerchant && (
          <div className="space-y-5">
            {/* Merchant Image Banner */}
            <div className="relative h-44 rounded-xl overflow-hidden bg-slate-100">
              <img
                src={activeMerchant.image}
                alt={activeMerchant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-[10px] font-black text-amber-300 border border-amber-300/30">
                DEMO PARTNER PROFILE
              </div>
            </div>

            {/* Address & Timings */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-womup-purple flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{activeMerchant.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-600">Operating Hours: {activeMerchant.hours}</span>
              </div>
            </div>

            {/* Simulated Bill Calculation Breakdown */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-amber-50/40 border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wide text-womup-purple flex items-center gap-1.5">
                  <Receipt className="w-4 h-4" />
                  <span>Sample WOMUP Bill Calculation</span>
                </span>
                <Badge variant="gold" size="sm">
                  Model Example
                </Badge>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Simulated Store Bill:</span>
                  <span className="font-bold text-slate-900 font-inr">
                    ₹{activeMerchant.sampleBill.billAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-amber-700 font-medium">
                  <span>Shopping Coin Applied:</span>
                  <span className="font-bold font-inr">
                    - ₹{activeMerchant.sampleBill.coinUsed.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="pt-2 border-t border-purple-200/80 flex items-center justify-between text-sm font-bold text-slate-950">
                  <span>Amount to Pay:</span>
                  <span className="text-womup-purple font-extrabold font-inr">
                    ₹{activeMerchant.sampleBill.amountToPay.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mt-1">
                  <span>Displayed Saving:</span>
                  <span className="font-inr">
                    ₹{activeMerchant.sampleBill.saving.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
              <strong>Notice:</strong> This is a mock merchant designed to illustrate the Shopping Coin savings mechanism. No commercial affiliation or endorsement is represented.
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
