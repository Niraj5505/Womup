import React, { useState } from 'react'
import {
  Sparkles,
  Coins,
  CreditCard,
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
  Percent,
  CheckCircle,
  Search,
  Gift,
  Bell,
  Sliders,
  Layers,
  Palette,
} from 'lucide-react'
import {
  Button,
  Card,
  Badge,
  SectionHeading,
  Container,
  IconBox,
  StatCard,
  Modal,
  Input,
  Select,
} from '../../components/ui/index.ts'
import { useToast } from '../../hooks/useToast.ts'
import {
  HeroSection,
  ShoppingCoinSection,
  SavingsCalculatorSection,
  HowItWorksSection,
  MonthlySavingsExampleSection,
  IncomeModelSection,
  TeamStructureSection,
  IncomeRangeSection,
  NoInvestmentNoSellingSection,
} from '../../components/sections/index.ts'

export const HomePage: React.FC = () => {
  const toast = useToast()

  // Interactive controls for live playground
  const [activeTab, setActiveTab] = useState<'components' | 'tokens'>('components')
  const [activeTokenCategory, setActiveTokenCategory] = useState<
    'colors' | 'typography' | 'radius' | 'shadows' | 'gradients' | 'spacing'
  >('colors')

  // Component states
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [inputValue, setInputValue] = useState('2500')
  const [inputError, setInputError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('fashion')

  // Sample reward claim simulation
  const handleClaimReward = () => {
    toast.reward(
      '₹150 WOMUP Cashback Claimed!',
      'Credited directly to your digital rewards wallet. Valid on next checkout.',
    )
    setIsModalOpen(false)
  }

  const categoryOptions = [
    { value: 'fashion', label: 'Women Fashion & Apparel (Up to 25% Cashback)' },
    { value: 'beauty', label: 'Beauty & Skincare (Earn 2X SuperCoins)' },
    { value: 'tech', label: 'Tech & Gadgets (Verified Deals)' },
    { value: 'lifestyle', label: 'Home & Lifestyle Revolutions' },
  ]

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 pb-20">
      {/* Complete WOMUP Homepage Hero Section */}
      <HeroSection
        onJoinFreeClick={() => setIsModalOpen(true)}
        onHowItWorksClick={() => {
          const el = document.getElementById('how-it-works')
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          } else {
            toast.info('How It Works', 'Explore the verified WOMUP rewards model below.')
          }
        }}
      />

      {/* ₹2,000 Shopping Coin Everyday Categories Section */}
      <ShoppingCoinSection
        onCategoryClick={(cat) => {
          toast.reward(
            `${cat.name} Coin Benefit`,
            `Use up to ₹2,000 Shopping Coins across verified ${cat.name} partner outlets.`,
          )
        }}
      />

      {/* How Much Can You Save? Interactive Calculator Section */}
      <SavingsCalculatorSection
        onStartSavingClick={() => setIsModalOpen(true)}
      />

      {/* How WOMUP Works: 3-Step Process Section */}
      <HowItWorksSection
        onJoinFreeClick={() => setIsModalOpen(true)}
      />

      {/* Monthly Savings Example Section (Before vs After) */}
      <MonthlySavingsExampleSection
        onJoinFreeClick={() => setIsModalOpen(true)}
      />

      {/* Income Model: Refer Kare Aur 2 Tarah Se Income Paayen */}
      <IncomeModelSection
        onJoinFreeClick={() => setIsModalOpen(true)}
      />

      {/* WOMUP Team Structure (7 Levels Network) */}
      <TeamStructureSection />

      {/* WOMUP Promotional Income Range (₹50,000 – ₹5,00,000) */}
      <IncomeRangeSection onLearnMoreClick={() => setIsModalOpen(true)} />

      {/* WOMUP Promotional Highlights: No Investment & No Selling */}
      <NoInvestmentNoSellingSection onJoinFreeClick={() => setIsModalOpen(true)} />

      {/* Reusable Component & Design Tokens Explorer Section */}
      <Container id="design-system-explorer" size="lg" className="pt-16">
        {/* Navigation Switcher: Components vs Tokens */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('components')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'components'
                  ? 'bg-womup-purple text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Reusable Components (11)</span>
            </button>

            <button
              onClick={() => setActiveTab('tokens')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'tokens'
                  ? 'bg-womup-purple text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Design Tokens</span>
            </button>
          </div>

          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
            Status: Production Ready • Mobile-First
          </span>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TAB 1: REUSABLE COMPONENTS SHOWCASE */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'components' && (
          <div className="space-y-16">
            {/* 1. StatCard Component (Rewards & E-Commerce metrics) */}
            <div>
              <SectionHeading
                tagline="Metrics & Savings"
                title="1. StatCard Component"
                description="Engineered for high-trust rewards metrics with Indian Rupee (₹) styling, percentage changes, and icon boxes."
                badge={<Badge variant="gold">E-Commerce Essential</Badge>}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <StatCard
                  label="Total Cashback Earned"
                  prefix="₹"
                  value="14,850"
                  change="+24% this month"
                  trend="up"
                  icon={<CreditCard className="w-5 h-5 text-purple-700" />}
                  iconColor="purple"
                  variant="default"
                />

                <StatCard
                  label="WOMUP Coins Balance"
                  value="4,250"
                  suffix="Coins"
                  change="500 expiring soon"
                  trend="neutral"
                  icon={<Coins className="w-5 h-5 text-amber-700" />}
                  iconColor="gold"
                  variant="rewards"
                />

                <StatCard
                  label="Empowered Shoppers"
                  value="85,000+"
                  change="+12.5k new"
                  trend="up"
                  icon={<TrendingUp className="w-5 h-5 text-fuchsia-700" />}
                  iconColor="magenta"
                  variant="default"
                />

                <StatCard
                  label="Exclusive Brand Vouchers"
                  value="128"
                  subtitle="Across 42 categories"
                  icon={<Percent className="w-5 h-5 text-pink-700" />}
                  iconColor="pink"
                  variant="default"
                />
              </div>
            </div>

            {/* 2. Button Component */}
            <div>
              <SectionHeading
                tagline="Actions & Triggers"
                title="2. Button Component"
                description="Smooth Framer Motion tap scale, touch-friendly 44px mobile heights, loading states, and reward gold accents."
                action={
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setButtonLoading(!buttonLoading)}
                  >
                    Toggle Loading: {buttonLoading ? 'ON' : 'OFF'}
                  </Button>
                }
              />

              <Card variant="default" className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Button Variants
                  </h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="primary" isLoading={buttonLoading}>
                      Primary (Purple/Magenta)
                    </Button>
                    <Button variant="magenta" isLoading={buttonLoading}>
                      Bright Magenta
                    </Button>
                    <Button
                      variant="gold"
                      leftIcon={<Coins className="w-4 h-4 text-slate-950" />}
                      isLoading={buttonLoading}
                    >
                      Rewards Gold
                    </Button>
                    <Button variant="secondary" isLoading={buttonLoading}>
                      Secondary White
                    </Button>
                    <Button variant="outline" isLoading={buttonLoading}>
                      Deep Purple Outline
                    </Button>
                    <Button variant="ghost" isLoading={buttonLoading}>
                      Subtle Ghost
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Button Sizes (Mobile-First Touch Scale)
                  </h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="primary" size="sm">
                      Small (36px)
                    </Button>
                    <Button
                      variant="primary"
                      size="md"
                      leftIcon={<ShoppingBag className="w-4 h-4" />}
                    >
                      Medium (44px standard)
                    </Button>
                    <Button
                      variant="gold"
                      size="lg"
                      rightIcon={<Sparkles className="w-4 h-4 text-slate-950" />}
                    >
                      Large CTA (52px)
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* 3. Card Component */}
            <div>
              <SectionHeading
                tagline="Surfaces & Containers"
                title="3. Card Component"
                description="Clean high-trust surfaces: default white with crisp border, elevated floating, warm gold rewards, and interactive hover lift."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="default" interactive>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="purple" size="sm">
                      Standard
                    </Badge>
                    <span className="text-xs text-slate-400">Card.tsx</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    Clean High-Trust Card
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    White surface with subtle border and crisp dark text. Interactive hover lifts
                    smoothly.
                  </p>
                  <Button variant="secondary" size="sm" fullWidth>
                    Explore Details
                  </Button>
                </Card>

                <Card variant="rewards" interactive>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="gold" size="sm" icon={<Coins className="w-3 h-3" />}>
                      Rewards Tier
                    </Badge>
                    <span className="text-xs text-amber-700 font-semibold font-inr">₹500 Value</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    Gold Rewards Card
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Subtle warm gold gradient tint for vouchers, coin balances, and festive perks.
                  </p>
                  <Button variant="gold" size="sm" fullWidth>
                    Claim Voucher
                  </Button>
                </Card>

                <Card variant="elevated" interactive>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="success" size="sm" icon={<ShieldCheck className="w-3 h-3" />}>
                      Verified
                    </Badge>
                    <span className="text-xs text-emerald-700 font-bold">100% Assured</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    Elevated Floating Card
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Soft floating shadow with minimal border. Perfect for prominent product cards.
                  </p>
                  <Button variant="outline" size="sm" fullWidth>
                    Verify Merchant
                  </Button>
                </Card>
              </div>
            </div>

            {/* 4. Badge & IconBox Components */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Badges */}
              <div>
                <SectionHeading
                  tagline="Status & Indicators"
                  title="4. Badge Component"
                  description="Pill badges supporting dots, leading icons, and rewards states."
                />
                <Card variant="default" className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="purple" dot>
                      Purple Pill
                    </Badge>
                    <Badge variant="magenta" dot>
                      Magenta Pill
                    </Badge>
                    <Badge variant="pink" dot>
                      Warm Pink
                    </Badge>
                    <Badge variant="gold" icon={<Coins className="w-3 h-3 text-amber-600" />}>
                      Gold Rewards
                    </Badge>
                    <Badge variant="success" icon={<CheckCircle className="w-3 h-3 text-emerald-600" />}>
                      Cashback Ready
                    </Badge>
                    <Badge variant="outline">Neutral Outline</Badge>
                  </div>
                </Card>
              </div>

              {/* IconBox */}
              <div>
                <SectionHeading
                  tagline="Icon Containers"
                  title="5. IconBox Component"
                  description="Structured icon holders in brand squircle and circle shapes."
                />
                <Card variant="default">
                  <div className="flex flex-wrap items-center gap-4">
                    <IconBox color="purple" size="md" shape="squircle">
                      <ShoppingBag />
                    </IconBox>
                    <IconBox color="magenta" size="md" shape="squircle">
                      <Gift />
                    </IconBox>
                    <IconBox color="gold" size="md" shape="squircle">
                      <Coins />
                    </IconBox>
                    <IconBox color="pink" size="md" shape="squircle">
                      <HeartIcon />
                    </IconBox>
                    <IconBox color="white" size="md" shape="circle">
                      <ShieldCheck className="text-emerald-600" />
                    </IconBox>
                    <IconBox color="dark" size="md" shape="circle">
                      <Sparkles className="text-amber-400" />
                    </IconBox>
                  </div>
                </Card>
              </div>
            </div>

            {/* 6. Form Inputs & Select Components */}
            <div>
              <SectionHeading
                tagline="Forms & Data Entry"
                title="6. Input & Select Components"
                description="Designed for Indian user flows: Indian Rupee (₹) prefix, mobile (+91) prefix, error states, and custom select."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input with Rupee Prefix */}
                <Card variant="default" className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Currency & Text Inputs
                  </h4>

                  <Input
                    label="Redemption Amount"
                    prefixText="₹"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value)
                      if (Number(e.target.value) > 10000) {
                        setInputError('Maximum instant redemption limit is ₹10,000 per day')
                      } else {
                        setInputError('')
                      }
                    }}
                    error={inputError}
                    helperText={
                      !inputError ? 'Available cashback balance: ₹14,850' : undefined
                    }
                    badge={<Badge variant="gold" size="sm">Instant UPI</Badge>}
                  />

                  <Input
                    label="Search Exclusive Offers"
                    placeholder="E.g. Nykaa, Myntra, Tanishq, Tata Neu..."
                    leftIcon={<Search className="w-4 h-4" />}
                    rightIcon={<Sliders className="w-4 h-4" />}
                    helperText="Search over 450+ verified merchant partners"
                  />
                </Card>

                {/* Select & Mobile Input */}
                <Card variant="default" className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Dropdown & Mobile Verification
                  </h4>

                  <Select
                    label="Shopping Category"
                    options={categoryOptions}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    helperText="Selecting a category personalizes your highest cashback rates"
                    badge={<Badge variant="purple" size="sm">Dynamic Rates</Badge>}
                  />

                  <Input
                    label="Registered Mobile Number"
                    prefixText="+91"
                    placeholder="98765 43210"
                    helperText="We will send a 4-digit OTP for secure authentication"
                    rightIcon={<ShieldCheck className="w-4 h-4 text-emerald-500" />}
                  />
                </Card>
              </div>
            </div>

            {/* 7. Toast & Feedback System */}
            <div>
              <SectionHeading
                tagline="Feedback & Notifications"
                title="7. Toast Notification System"
                description="Trigger floating alert toasts with automatic dismiss timers and e-commerce reward variations."
              />

              <Card variant="default" className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    variant="gold"
                    size="sm"
                    leftIcon={<Coins className="w-4 h-4 text-slate-950" />}
                    onClick={() =>
                      toast.reward(
                        '₹150 Cash Credited!',
                        'Order #WM-8291 verified. Money sent to linked UPI VPA.',
                      )
                    }
                  >
                    Reward Toast (Gold)
                  </Button>

                  <Button
                    variant="primary"
                    size="sm"
                    leftIcon={<CheckCircle className="w-4 h-4" />}
                    onClick={() =>
                      toast.success(
                        'Profile Saved Successfully',
                        'Your shopping preferences have been updated.',
                      )
                    }
                  >
                    Success Toast (Green)
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<Bell className="w-4 h-4" />}
                    onClick={() =>
                      toast.info(
                        'SuperSaver Sale Live!',
                        'Extra 10% instant discount on partner stores today.',
                      )
                    }
                  >
                    Info Toast (Purple)
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      toast.error(
                        'Voucher Code Expired',
                        'This promotional code reached maximum claims.',
                      )
                    }
                  >
                    Error Toast (Red)
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 2: DESIGN TOKENS EXPLORER */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'tokens' && (
          <div className="space-y-8">
            {/* Token Category Navigation */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-white border border-slate-200">
              {(
                ['colors', 'typography', 'radius', 'shadows', 'gradients', 'spacing'] as const
              ).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTokenCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTokenCategory === cat
                      ? 'bg-womup-purple text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Colors Token Section */}
            {activeTokenCategory === 'colors' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Primary Brand & Visual Identity Colors
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Strictly matching WOMUP specifications: Deep Purple, Bright Magenta, Pink,
                    White, Gold/Yellow, and Dark Text.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Deep Purple */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="h-16 rounded-lg bg-womup-purple mb-3 shadow-sm flex items-end p-2 text-white font-bold text-xs">
                        Deep Purple • #581C87
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Deep Purple (Primary Anchor)</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Represents prestige, trustworthy foundation, and brand leadership.
                      </p>
                    </div>

                    {/* Bright Magenta */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="h-16 rounded-lg bg-womup-magenta mb-3 shadow-sm flex items-end p-2 text-white font-bold text-xs">
                        Bright Magenta • #C026D3
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Bright Magenta (Action Trigger)</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        High energy, empowering, primary call-to-action color.
                      </p>
                    </div>

                    {/* Warm Pink */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="h-16 rounded-lg bg-pink-500 mb-3 shadow-sm flex items-end p-2 text-white font-bold text-xs">
                        Warm Pink • #EC4899
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Pink (Micro Accent)</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Warmth, community connections, and wishlist indicators.
                      </p>
                    </div>

                    {/* Gold / Yellow */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="h-16 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 mb-3 shadow-sm flex items-end p-2 text-slate-950 font-bold text-xs">
                        Gold / Yellow • #E5A93C
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Gold (Rewards & Coins)</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Cashback, SuperCoins, festive rewards, and VIP member tiers.
                      </p>
                    </div>

                    {/* Dark Text */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="h-16 rounded-lg bg-slate-900 mb-3 shadow-sm flex items-end p-2 text-white font-bold text-xs">
                        Slate 900 • #0F172A
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Dark Text (High Contrast)</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Clear, accessible, high-trust text rendering across all light surfaces.
                      </p>
                    </div>

                    {/* Pure White Surface */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="h-16 rounded-lg bg-white border border-slate-300 mb-3 shadow-sm flex items-end p-2 text-slate-900 font-bold text-xs">
                        Pure White • #FFFFFF
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Crisp White (Base Canvas)</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        E-commerce surface purity ensuring highest product and deal legibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Typography Tokens */}
            {activeTokenCategory === 'typography' && (
              <Card variant="default" className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Primary Display & Body Fonts
                  </h4>
                  <p className="text-sm text-slate-700">
                    <strong>Display Font:</strong> Outfit (Headings, StatCard numbers, Logos)
                    <br />
                    <strong>Body Font:</strong> Plus Jakarta Sans (Body, Inputs, Badges, Indian
                    Rupee ₹ clarity)
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-baseline justify-between border-b border-slate-100 pb-3">
                    <span className="text-3xl font-extrabold text-slate-950 font-display">
                      Heading 1 • 36px/48px
                    </span>
                    <span className="text-xs font-mono text-slate-400">text-4xl / 700</span>
                  </div>

                  <div className="flex items-baseline justify-between border-b border-slate-100 pb-3">
                    <span className="text-2xl font-bold text-slate-950 font-display">
                      Heading 2 • 28px/32px
                    </span>
                    <span className="text-xs font-mono text-slate-400">text-2xl / 700</span>
                  </div>

                  <div className="flex items-baseline justify-between border-b border-slate-100 pb-3">
                    <span className="text-base font-normal text-slate-700">
                      Body Standard • 16px font size with 24px line height for clear reading.
                    </span>
                    <span className="text-xs font-mono text-slate-400">text-base / 400</span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-slate-900 font-inr">
                      ₹12,499 (Rupee Symbol Legibility Check)
                    </span>
                    <span className="text-xs font-mono text-slate-400">font-inr / 700</span>
                  </div>
                </div>
              </Card>
            )}

            {/* Radius Tokens */}
            {activeTokenCategory === 'radius' && (
              <Card variant="default">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm">
                    <span className="text-xs font-bold block mb-1">sm</span>
                    <span className="text-[11px] text-slate-500">6px</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                    <span className="text-xs font-bold block mb-1">md</span>
                    <span className="text-[11px] text-slate-500">10px</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="text-xs font-bold block mb-1">lg</span>
                    <span className="text-[11px] text-slate-500">14px</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold block mb-1">xl</span>
                    <span className="text-[11px] text-slate-500">20px</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span className="text-xs font-bold block mb-1">2xl</span>
                    <span className="text-[11px] text-slate-500">28px</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-full">
                    <span className="text-xs font-bold block mb-1">full</span>
                    <span className="text-[11px] text-slate-500">Pill</span>
                  </div>
                </div>
              </Card>
            )}

            {/* Shadows Tokens */}
            {activeTokenCategory === 'shadows' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-womup-sm text-center">
                  <span className="text-sm font-bold block mb-1">Shadow SM</span>
                  <span className="text-xs text-slate-500">Buttons & Micro chips</span>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-womup-card text-center">
                  <span className="text-sm font-bold block mb-1">Shadow Card</span>
                  <span className="text-xs text-slate-500">Standard product/stat card</span>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-womup-card-hover text-center">
                  <span className="text-sm font-bold block mb-1">Shadow Elevated / Hover</span>
                  <span className="text-xs text-slate-500">Floating popovers & active cards</span>
                </div>
              </div>
            )}

            {/* Gradients Tokens */}
            {activeTokenCategory === 'gradients' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-r from-womup-purple-800 to-womup-magenta text-white shadow-sm">
                  <h4 className="text-sm font-bold">Primary CTA Gradient</h4>
                  <p className="text-xs text-purple-100 mt-1">
                    Used selectively on primary conversion buttons and high-priority triggers.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500 via-womup-gold to-amber-600 text-slate-950 shadow-sm">
                  <h4 className="text-sm font-bold">Gold Rewards Gradient</h4>
                  <p className="text-xs text-amber-950 mt-1">
                    Coins, festive discount vouchers, and VIP cashback status pills.
                  </p>
                </div>
              </div>
            )}

            {/* Spacing Tokens */}
            {activeTokenCategory === 'spacing' && (
              <Card variant="default">
                <p className="text-xs text-slate-500 mb-4">
                  Baseline 4px grid. Standard interactive touch targets are calibrated to 44px
                  minimum for effortless mobile navigation across Indian telecom devices.
                </p>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-slate-400">4px (1)</span>
                    <div className="h-3 bg-purple-200 rounded" style={{ width: '16px' }} />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-slate-400">8px (2)</span>
                    <div className="h-3 bg-purple-300 rounded" style={{ width: '32px' }} />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-slate-400">16px (4)</span>
                    <div className="h-3 bg-purple-400 rounded" style={{ width: '64px' }} />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-slate-400">44px (touch)</span>
                    <div className="h-3 bg-womup-purple rounded" style={{ width: '176px' }} />
                  </div>
                </div>
              </Card>
            )}
          </div>
        )}
      </Container>

      {/* 8. Interactive Modal Demo */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Claim Your Welcome Voucher"
        description="Empowerment • Shopping • Revolutions reward activation."
        icon={
          <IconBox color="gold" size="md">
            <Coins className="w-5 h-5 text-amber-700" />
          </IconBox>
        }
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="gold"
              size="sm"
              leftIcon={<Sparkles className="w-4 h-4 text-slate-950" />}
              onClick={handleClaimReward}
            >
              Confirm & Claim ₹150
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase text-amber-800">
                Instant Credit
              </span>
              <span className="text-2xl font-extrabold text-slate-950 font-inr">
                ₹150.00
              </span>
            </div>
            <Badge variant="gold" size="sm">
              Zero Min Order
            </Badge>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            By claiming this reward, your WOMUP wallet will be credited instantly. You can apply this
            on any partner merchant store across India.
          </p>
        </div>
      </Modal>
    </div>
  )
}

function HeartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  )
}
